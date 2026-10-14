import React from 'react';
import { Cookie, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { WhoWeAreFooterCta } from '../components/company/WhoWeAreSections';

const META_TITLE = 'Cookie Policy | How Netzur Uses Cookies & Tracking Technologies';
const META_DESCRIPTION =
  'Netzur Cookie Policy — what cookies are, how we use them for functionality and analytics, how to manage cookie preferences in your browser, and how third-party cookies work.';

const H2 = 'text-2xl font-heading font-extrabold tracking-tight text-slate-900 mt-12 mb-4 scroll-mt-24';
const P = 'text-slate-600 leading-relaxed mt-3';
const LI = 'text-slate-600 leading-relaxed ml-5 mt-2 list-disc';

const BROWSERS = [
  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
  {
    name: 'Mozilla Firefox',
    url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences',
  },
  { name: 'Safari', url: 'https://support.apple.com/en-in/guide/safari/sfri11471/mac' },
  {
    name: 'Microsoft Edge',
    url: 'https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies',
  },
];

const COOKIE_TYPES = [
  {
    name: 'Session Cookies',
    detail: 'Deleted when you close your browser.',
  },
  {
    name: 'Persistent Cookies',
    detail: 'Remain on your device until deleted or expired.',
  },
];

const USES = [
  'Ensure basic website functionality (e.g., secure login, navigation).',
  'Analyze website traffic and performance using tools like Google Analytics.',
  'Remember your preferences (e.g., language, login details).',
  'Deliver personalized content and advertisements where applicable.',
];

export default function CookiesPolicy({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('cookies-policy', META_TITLE, META_DESCRIPTION);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white text-slate-900 flex flex-col justify-between pb-10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 pb-10 gap-8 lg:gap-6">
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-slate-900">
              Cookies <span className="text-slate-400">Policy</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4 font-normal">
              This Cookie Policy explains how Netzur Private Limited uses cookies and similar
              technologies when you visit our website https://netzur.com.
            </p>
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed mb-8 border-l-2 border-[#F13B0A] pl-4">
              By using our Website, you agree to the use of cookies in accordance with this policy. If
              you do not agree, you should adjust your browser settings or stop using the Website.
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-slate-400" />
                <span>Transparent by Default</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Revised 14th June 2025</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80"
                alt="Cookies and browser privacy settings"
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                  <p className="text-sm font-bold text-white mb-1">You Control Your Preferences</p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Cookies can be managed or disabled through your browser settings at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50">
        </div>
      </section>

      {/* Cookie types strip */}
      <section className="bg-slate-50 py-10 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COOKIE_TYPES.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#F13B0A] flex items-center justify-center mb-4">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="text-base font-heading font-bold text-slate-900">{c.name}</div>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-4 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="what-are-cookies" className={H2}>
            What Are Cookies?
          </h2>
          <p className={P}>
            Cookies are small text files stored on your device (computer, mobile, tablet) when you
            visit a website. They help websites function properly, remember your preferences, and
            provide insights for performance and analytics.
          </p>
          <p className={P}>Cookies may be:</p>
          <ul className="mt-3 space-y-2">
            {COOKIE_TYPES.map((c) => (
              <li key={c.name} className={LI}>
                <strong className="text-slate-800">{c.name}:</strong> {c.detail}
              </li>
            ))}
          </ul>

          <h2 id="how-we-use-cookies" className={H2}>
            How We Use Cookies
          </h2>
          <p className={P}>We use cookies to:</p>
          <ul className="mt-3 space-y-2">
            {USES.map((u) => (
              <li key={u} className={LI}>
                {u}
              </li>
            ))}
          </ul>

          <h2 id="managing-preferences" className={H2}>
            Managing Your Cookie Preferences
          </h2>
          <p className={P}>
            You can control or disable cookies through your browser settings. However, some features
            of our Website may not function properly if cookies are disabled.
          </p>
          <p className="text-sm font-semibold text-slate-700 mt-5">Manage cookies in common browsers:</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BROWSERS.map((b) => (
              <a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-slate-200 hover:border-[#F13B0A] hover:bg-orange-50 text-slate-700 text-sm font-medium transition-colors"
              >
                <span>{b.name}</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <h2 id="third-party-cookies" className={H2}>
            Third-Party Cookies
          </h2>
          <p className={P}>
            Some cookies may be set by third-party services (such as analytics tools, embedded
            content, or advertising providers). We do not control these cookies. Please refer to their
            respective privacy and cookie policies for more details.
          </p>

          <h2 id="updates" className={H2}>
            Updates to This Cookie Policy
          </h2>
          <p className={P}>
            We may update this Cookie Policy periodically. Changes will be posted on this page with an
            updated “Last updated” date. Please review this page regularly to stay informed.
          </p>

          <h2 id="contact-us" className={H2}>
            Contact Us
          </h2>
          <p className={P}>
            If you have any questions about this Cookie Policy, you may contact us at:
          </p>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
            <div className="flex items-start gap-3 text-slate-700">
              <MapPin className="w-4 h-4 text-[#F13B0A] shrink-0 mt-0.5" />
              <div>
                <div className="font-heading font-bold text-slate-900">Netzur Private Limited</div>
                <div>S-5, Tirupati Complex, Near Bus Station</div>
                <div>Sidhpur, Gujarat 384151, India</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Phone className="w-4 h-4 text-[#F13B0A] shrink-0" />
              <a href="tel:+919408053196" className="hover:text-[#F13B0A] transition-colors">
                +91-9408053196
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail className="w-4 h-4 text-[#F13B0A] shrink-0" />
              <a href="mailto:info@netzur.com" className="hover:text-[#F13B0A] transition-colors">
                info@netzur.com
              </a>
            </div>
          </div>
        </div>
      </section>


      <WhoWeAreFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}