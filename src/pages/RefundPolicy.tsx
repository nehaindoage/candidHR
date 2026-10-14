import React from 'react';
import { RotateCcw, Clock, BadgeCheck, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { WhoWeAreFooterCta } from '../components/company/WhoWeAreSections';

const META_TITLE = 'Refund & Cancellation Policy | Netzur';
const META_DESCRIPTION =
  'Netzur Refund & Cancellation Policy — full money-back guarantee on all purchases and subscriptions, eligible within 14 calendar days, processed within 7–10 business days.';

const H2 = 'text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-slate-900 mt-12 mb-4 scroll-mt-24';
const P = 'text-slate-600 leading-relaxed mt-3';

const HIGHLIGHTS = [
  {
    icon: Clock,
    value: '14 days',
    label: 'Money-back window',
    detail: 'Full reimbursement within 14 calendar days of your purchase.',
  },
  {
    icon: BadgeCheck,
    value: '7–10 days',
    label: 'Refund processing',
    detail: 'All eligible refunds are processed within 7–10 business days.',
  },
  {
    icon: RotateCcw,
    value: 'Original method',
    label: 'Refund destination',
    detail: 'Credited back to the original payment method used at checkout.',
  },
];

export default function RefundPolicy({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('refund-policy', META_TITLE, META_DESCRIPTION);

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
              Refund &amp; <span className="text-slate-400">Cancellation</span> Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4 font-normal">
              Thanks for purchasing our products (or subscribing to our services) at{' '}
              <a
                href="https://billing.netzur.com"
                className="text-[#F13B0A] hover:underline font-medium"
              >
                billing.netzur.com
              </a>{' '}
              operated by Netzur Networks Private Limited.
            </p>
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed mb-8 border-l-2 border-[#F13B0A] pl-4">
              We offer a full money-back guarantee for all purchases/subscriptions made on our
              website. If any issues with the product that you have purchased/subscribed from us, you
              can get your money back no questions asked.
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-slate-400" />
                <span>14-Day Guarantee</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-slate-400" />
                <span>No Questions Asked</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                alt="Refund and money-back guarantee"
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                  <p className="text-sm font-bold text-white mb-1">14-Day Money-Back Guarantee</p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Try the platform for the first two weeks to ensure it fits your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50">
        </div>
      </section>

      {/* Key terms */}
      <section className="bg-slate-50 py-12 sm:py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#F13B0A] flex items-center justify-center mb-4">
                  <h.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-heading font-extrabold tracking-tight text-slate-900">
                  {h.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">{h.label}</div>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={H2}>Eligibility</h2>
          <p className={P}>
            You are eligible for a full reimbursement within 14 calendar days of your purchase. All
            eligible refunds will be processed within 7–10 business days and credited to the original
            payment method.
          </p>

          <h2 className={H2}>After the Refund Window</h2>
          <p className={P}>
            After the 14-day period you will no longer be eligible and won’t be able to receive a
            refund. We encourage our customers to try the product (or service) in the first two weeks
            after their purchase to ensure it fits your needs.
          </p>

          <h2 className={H2}>Requesting a Refund</h2>
          <p className={P}>
            If you have any additional questions or would like to request a refund, feel free to
            contact us.
          </p>
          <a
            href="mailto:info@netzur.com"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F13B0A] hover:bg-[#d8350a] text-white font-semibold text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@netzur.com</span>
          </a>
        </div>
      </section>

      <WhoWeAreFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}