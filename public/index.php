<?php
declare(strict_types=1);

/**
 * Dynamic <head> injector for the Netzur React SPA (shared hosting).
 *
 * All non-asset requests are rewritten here by .htaccess. The static build
 * (per-route prerendered HTML where available) is served as-is, while the
 * meta title/description are read LIVE from the WordPress ACF REST API and
 * injected into the head. Editing ACF in WordPress now updates the served
 * <title>/<meta description> without rebuilding.
 */

const SITE_URL = 'https://netzur.com';   // base domain used for canonical / og:url
const WP_API = 'https://netzur.com/wp-json/wp/v2/netzur_services';
const WP_SOLUTIONS_API = 'https://netzur.com/wp-json/wp/v2/netzur_solutions';
const WP_PAGES_API = 'https://netzur.com/wp-json/wp/v2/netzur_pages';
const WP_POSTS_API = 'https://netzur.com/wp-json/wp/v2/posts';
const CACHE_DIR = __DIR__ . '/cache';

// Static routes managed through the "Netzur Pages" CPT (slug must match the route).
const STATIC_PAGES = ['who-we-are', 'join-the-team', 'pricing', 'integrations', 'contact-us', 'book-a-demo', 'rebranding', 'services', 'privacy-policy', 'refund-policy', 'terms-condition', 'cookies-policy', 'blog'];

/**
 * Resolve which WordPress ACF meta to read for a route.
 * - /                  -> netzur_pages CPT (post slug "home")
 * - /<static page>     -> netzur_pages CPT
 * - /solutions/<slug>  -> netzur_solutions CPT
 * - /blog/<slug>       -> posts (WordPress blog)
 * - /<service slug>    -> netzur_services CPT
 * - anything else      -> null (keeps prerendered head)
 */
function ig_resolve_meta(string $route): ?array
{
    $slug = null;
    $api = null;

    if ($route === '/') {
        $slug = 'home';
        $api = WP_PAGES_API;
    } elseif (preg_match('#^/solutions/([a-z0-9\-]+)$#', $route, $m)) {
        $slug = $m[1];
        $api = WP_SOLUTIONS_API;
    } elseif (preg_match('#^/blog/([a-z0-9\-]+)$#', $route, $m)) {
        $slug = $m[1];
        $api = WP_POSTS_API;
    } elseif (preg_match('#^/([a-z0-9\-]+)$#', $route, $m)) {
        if (in_array($m[1], STATIC_PAGES, true)) {
            $slug = $m[1];
            $api = WP_PAGES_API;
        } else {
            $slug = $m[1];
            $api = WP_API;
        }
    }

    if ($slug === null || $api === null) {
        return null;
    }

    return ig_fetch_meta($slug, $api);
}

/** Append a diagnostic line to cache/ig-meta.log (truncated to the last 200 lines). */
function ig_log(string $line): void
{
    if (!is_dir(CACHE_DIR)) {
        @mkdir(CACHE_DIR, 0755, true);
    }
    $file = CACHE_DIR . '/ig-meta.log';
    @file_put_contents($file, '[' . gmdate('Y-m-d H:i:s') . '] ' . $line . "\n", FILE_APPEND);
    $lines = @file($file, FILE_IGNORE_NEW_LINES) ?: [];
    if (count($lines) > 200) {
        @file_put_contents($file, implode("\n", array_slice($lines, -200)) . "\n");
    }
}

/** @return array{title:string, description:string}|null */
function ig_parse_yoast_head(string $head): ?array
{
    if ($head === '') {
        return null;
    }
    $title = null;
    $description = null;
    if (preg_match('#<title>(.*?)</title>#s', $head, $m)) {
        $title = html_entity_decode(strip_tags($m[1]), ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
    if (preg_match('#<meta\s+name="description"\s+content="(.*?)"\s*/?>#i', $head, $m)) {
        $description = html_entity_decode($m[1], ENT_QUOTES | ENT_HTML5, 'UTF-8');
    }
    if ($title === null && $description === null) {
        return null;
    }
    return ['title' => $title ?? '', 'description' => $description ?? ''];
}

/**
 * Fetch the latest meta from WordPress on EVERY request so edits show
 * instantly. The file cache is only used as a fallback when WordPress is
 * temporarily unreachable (so the site never breaks).
 *
 * Resolution order (per field):
 *   1. ACF `meta_title` / `meta_description` (edits reflect instantly)
 *   2. Yoast SEO head (title / meta description)
 *
 * @return array{title:string, description:string}|null
 */
function ig_fetch_meta(string $slug, string $api): ?array
{
    $safeSlug = preg_replace('/[^a-z0-9\-_]/i', '_', $slug);
    $apiTag = substr(md5($api), 0, 6); // keep cache files distinct per CPT
    $cacheFile = CACHE_DIR . '/meta-' . $apiTag . '-' . $safeSlug . '.json';

    $url = $api . '?slug=' . rawurlencode($slug) . '&_fields=acf,yoast_head';
    $ctx = stream_context_create(['http' => ['timeout' => 4, 'ignore_errors' => true]]);
    $body = @file_get_contents($url, false, $ctx);

    if ($body === false) {
        $err = error_get_last();
        ig_log('FETCH-FAIL ' . $slug . ' :: ' . ($err['message'] ?? 'unknown error'));
    }

    if ($body !== false) {
        $data = json_decode($body, true);
        if (is_array($data) && isset($data[0])) {
            $yoast = ig_parse_yoast_head((string) ($data[0]['yoast_head'] ?? ''));
            $acfTitle = (string) ($data[0]['acf']['meta_title'] ?? '');
            $acfDesc = (string) ($data[0]['acf']['meta_description'] ?? '');

            // ACF wins so edits to meta_title/meta_description always reflect;
            // Yoast only fills the gap when the ACF field is empty.
            $meta = [
                'title' => $acfTitle !== '' ? $acfTitle : ($yoast['title'] ?? ''),
                'description' => $acfDesc !== '' ? $acfDesc : ($yoast['description'] ?? ''),
            ];
            ig_log(
                'OK ' . $slug . ' acf=' . ($acfTitle !== '' ? 'y' : 'n')
                . ' yoast=' . ($yoast['title'] !== null && $yoast['title'] !== '' ? 'y' : 'n')
                . ' -> "' . $meta['title'] . '"'
            );
            if ($meta['title'] !== '' || $meta['description'] !== '') {
                if (!is_dir(CACHE_DIR)) {
                    @mkdir(CACHE_DIR, 0755, true);
                }
                @file_put_contents($cacheFile, json_encode($meta));
                return $meta;
            }
        } else {
            ig_log('NO-POST ' . $slug . ' (empty WP response)');
        }
    }

    // Fallback: serve the last known-good snapshot if WordPress is down.
    if (is_file($cacheFile)) {
        $cached = json_decode((string) file_get_contents($cacheFile), true);
        if (is_array($cached) && isset($cached['title'], $cached['description'])) {
            ig_log('SNAPSHOT ' . $slug . ' -> "' . $cached['title'] . '"');
            return $cached;
        }
    }

    ig_log('NULL ' . $slug . ' (no live data, no snapshot)');
    return null;
}

function ig_esc(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function ig_get_route(): string
{
    $path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?? '/';
    $path = rtrim(rawurldecode($path), '/');
    return $path === '' ? '/' : $path;
}

function ig_pick_template(string $route): string
{
    $root = __DIR__ . '/index.html';
    if ($route !== '/') {
        $candidate = __DIR__ . $route . '/index.html';
        if (is_file($candidate)) {
            return $candidate;
        }
    }
    return $root;
}

/** @param array{title:string, description:string}|null $meta */
function ig_inject(string $html, string $route, ?array $meta): string
{
    $title = $meta['title'] ?? '';
    $description = $meta['description'] ?? '';
    $url = SITE_URL . '/' . ltrim($route, '/');

    if ($title !== '') {
        $html = (string) preg_replace(
            '#<title>.*?</title>#s',
            '<title>' . ig_esc($title) . '</title>',
            $html,
            1
        );
        $html = (string) preg_replace(
            '#<meta\s+property="og:title"[^>]*>#i',
            '<meta property="og:title" content="' . ig_esc($title) . '" />',
            $html,
            1
        );
    }

    if ($description !== '') {
        $html = (string) preg_replace(
            '#<meta\s+name="description"[^>]*>#i',
            '<meta name="description" content="' . ig_esc($description) . '" />',
            $html,
            1
        );
        $html = (string) preg_replace(
            '#<meta\s+property="og:description"[^>]*>#i',
            '<meta property="og:description" content="' . ig_esc($description) . '" />',
            $html,
            1
        );
    }

    // Keep canonical and og:url in sync with the current URL at all times.
    $canonical = '<link rel="canonical" href="' . ig_esc($url) . '" />';
    $ogUrl = '<meta property="og:url" content="' . ig_esc($url) . '" />';

    if (preg_match('#<link\s+rel="canonical"[^>]*>#i', $html)) {
        $html = (string) preg_replace(
            '#<link\s+rel="canonical"[^>]*>#i',
            $canonical,
            $html,
            1
        );
    } else {
        $html = (string) preg_replace(
            '#<meta\s+property="og:type"[^>]*>#i',
            '$0' . "\n    " . $canonical,
            $html,
            1
        );
    }

    if (preg_match('#<meta\s+property="og:url"[^>]*>#i', $html)) {
        $html = (string) preg_replace(
            '#<meta\s+property="og:url"[^>]*>#i',
            $ogUrl,
            $html,
            1
        );
    } else {
        $html = (string) preg_replace(
            '#<meta\s+property="og:type"[^>]*>#i',
            '$0' . "\n    " . $ogUrl,
            $html,
            1
        );
    }

    return $html;
}

$route = ig_get_route();

// Diagnostic view: /path/?igdebug=1 shows recent meta-resolution log lines.
if (isset($_GET['igdebug'])) {
    header('Content-Type: text/plain; charset=UTF-8');
    echo "route: " . $route . "\n";
    echo "doc root: " . __DIR__ . "\n";
    echo "index.php exists: " . (is_file(__DIR__ . '/index.php') ? 'yes' : 'no') . "\n";
    echo "per-route html: " . (is_file(__DIR__ . $route . '/index.html') ? 'yes' : 'no') . "\n";
    echo "php version: " . PHP_VERSION . "\n";
    echo "allow_url_fopen: " . (ini_get('allow_url_fopen') ? 'on' : 'OFF') . "\n";
    echo "openssl: " . (extension_loaded('openssl') ? 'yes' : 'NO') . "\n";
    echo "cache writable: " . (is_dir(CACHE_DIR) ? (is_writable(CACHE_DIR) ? 'yes' : 'no') : 'missing') . "\n";
    echo "---- WP API reachability ----\n";
    $probe = @file_get_contents(WP_POSTS_API . '?per_page=1&_fields=id', false, stream_context_create(['http' => ['timeout' => 6, 'ignore_errors' => true]]));
    echo "probe: " . ($probe === false ? 'FAILED' : 'ok (' . strlen($probe) . ' bytes)') . "\n";
    if ($probe !== false) {
        $e = error_get_last();
        if (!empty($e['message'])) echo "last error: " . $e['message'] . "\n";
    }
    echo "---- last log lines ----\n";
    $log = CACHE_DIR . '/ig-meta.log';
    echo is_file($log) ? implode('', array_slice((array) @file($log, FILE_IGNORE_NEW_LINES), -40)) : "(no log yet)\n";
    exit;
}

$meta = ig_resolve_meta($route);

$templateFile = ig_pick_template($route);
$html = file_get_contents($templateFile);
if ($html === false) {
    $html = (string) file_get_contents(__DIR__ . '/index.html');
}

$html = ig_inject($html, $route, $meta);

header('Content-Type: text/html; charset=UTF-8');
// Never let browsers/proxies cache the (dynamic) HTML,
// otherwise an edited meta looks stale in view-source.
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
echo $html;