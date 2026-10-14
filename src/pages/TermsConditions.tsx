import React from 'react';
import { FileText, Mail, Phone, MapPin, Printer, Scale, AlertTriangle, Ban } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { WhoWeAreFooterCta } from '../components/company/WhoWeAreSections';

const META_TITLE = 'Terms and Conditions | Netzur User Agreement & Usage Policy';
const META_DESCRIPTION =
  'Netzur Terms and Conditions — the legally binding agreement covering our services, intellectual property, user accounts, subscriptions, cancellations, acceptable use and liability.';

const H2 = 'text-2xl font-heading font-extrabold tracking-tight text-slate-900 mt-12 mb-4 scroll-mt-24';
const H3 = 'text-base font-heading font-bold text-slate-900 mt-6 mb-2';
const P = 'text-slate-600 leading-relaxed mt-3';
const LI = 'text-slate-600 leading-relaxed ml-5 mt-2 list-disc';

interface Section {
  id: string;
  title: string;
  body: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: 'our-services',
    title: 'Our Services',
    body: (
      <p className={P}>
        The information provided when using the Services is not intended for distribution to or use
        by any person or entity in any jurisdiction or country where such distribution or use would be
        contrary to law or regulation or which would subject us to any registration requirement
        within such jurisdiction or country. Accordingly, those persons who choose to access the
        Services from other locations do so on their own initiative and are solely responsible for
        compliance with local laws, if and to the extent local laws are applicable.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Rights',
    body: (
      <>
        <h3 className={H3}>Our intellectual property</h3>
        <p className={P}>
          We are the owner or the licensee of all intellectual property rights in our Services,
          including all source code, databases, functionality, software, website designs, audio,
          video, text, photographs, and graphics in the Services (collectively, the “Content”), as
          well as the trademarks, service marks, and logos contained therein (the “Marks”).
        </p>
        <p className={P}>
          Our Content and Marks are protected by copyright and trademark laws (and various other
          intellectual property rights and unfair competition laws) and treaties in the United States
          and around the world. The Content and Marks are provided in or through the Services “AS IS”
          for your internal business purpose only.
        </p>

        <h3 className={H3}>Your use of our Services</h3>
        <p className={P}>
          Subject to your compliance with these Legal Terms, including the “PROHIBITED ACTIVITIES”
          section below, we grant you a non-exclusive, non-transferable, revocable license to: access
          the Services; and download or print a copy of any portion of the Content to which you have
          properly gained access, solely for your internal business purpose.
        </p>
        <p className={P}>
          Except as set out in this section or elsewhere in our Legal Terms, no part of the Services
          and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded,
          posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed,
          or otherwise exploited for any commercial purpose whatsoever, without our express prior
          written permission.
        </p>
        <p className={P}>
          If you wish to make any use of the Services, Content, or Marks other than as set out in this
          section, please address your request to: info@netzur.com. If we ever grant you the
          permission to post, reproduce, or publicly display any part of our Services or Content, you
          must identify us as the owners or licensors of the Services, Content, or Marks and ensure
          that any copyright or proprietary notice appears or is visible on posting, reproducing, or
          displaying our Content.
        </p>
        <p className={P}>
          We reserve all rights not expressly granted to you in and to the Services, Content, and
          Marks. Any breach of these Intellectual Property Rights will constitute a material breach
          of our Legal Terms and your right to use our Services will terminate immediately.
        </p>

        <h3 className={H3}>Your submissions</h3>
        <p className={P}>
          Please review this section and the “PROHIBITED ACTIVITIES” section carefully prior to using
          our Services to understand the (a) rights you give us and (b) obligations you have when you
          post or upload any content through the Services.
        </p>
        <p className={P}>
          <strong className="text-slate-800">Submissions:</strong> By directly sending us any
          question, comment, suggestion, idea, feedback, or other information about the Services
          (“Submissions”), you agree to assign to us all intellectual property rights in such
          Submission. You agree that we shall own this Submission and be entitled to its
          unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without
          acknowledgment or compensation to you.
        </p>
        <p className={P}>
          <strong className="text-slate-800">You are responsible for what you post or upload:</strong> By
          sending us Submissions through any part of the Services you: confirm that you have read and
          agree with our “PROHIBITED ACTIVITIES” and will not post, send, publish, upload, or transmit
          through the Services any Submission that is illegal, harassing, hateful, harmful,
          defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group,
          sexually explicit, false, inaccurate, deceitful, or misleading; to the extent permissible by
          applicable law, waive any and all moral rights to any such Submission; warrant that any such
          Submission are original to you or that you have the necessary rights and licenses to submit
          such Submissions and that you have full authority to grant us the above-mentioned rights in
          relation to your Submissions; and warrant and represent that your Submissions do not
          constitute confidential information. You are solely responsible for your Submissions and you
          expressly agree to reimburse us for any and all losses that we may suffer because of your
          breach of (a) this section, (b) any third party’s intellectual property rights, or (c)
          applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'user-representations',
    title: 'User Representations',
    body: (
      <p className={P}>
        By using the Services, you represent and warrant that: (1) all registration information you
        submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of
        such information and promptly update such registration information as necessary; (3) you have
        the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in
        the jurisdiction in which you reside, or if a minor, you have received parental permission to
        use the Services; (5) you will not access the Services through automated or non-human means,
        whether through a bot, script or otherwise; (6) you will not use the Services for any illegal
        or unauthorized purpose; and (7) your use of the Services will not violate any applicable law
        or regulation.
      </p>
    ),
  },
  {
    id: 'user-registration',
    title: 'User Registration',
    body: (
      <p className={P}>
        You may be required to register to use the Services. You agree to keep your password
        confidential and will be responsible for all use of your account and password. We reserve the
        right to remove, reclaim, or change a username you select if we determine, in our sole
        discretion, that such username is inappropriate, obscene, or otherwise objectionable.
      </p>
    ),
  },
  {
    id: 'purchases-and-payment',
    title: 'Purchases and Payment',
    body: (
      <>
        <p className={P}>We accept the following forms of payment:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Visa', 'Mastercard', 'American Express', 'Discover', 'PayPal'].map((m) => (
            <span
              key={m}
              className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700"
            >
              {m}
            </span>
          ))}
        </div>
        <p className={P}>
          You agree to provide current, complete, and accurate purchase and account information for all
          purchases made via the Services. You further agree to promptly update account and payment
          information, including email address, payment method, and payment card expiration date, so
          that we can complete your transactions and contact you as needed. Sales tax will be added to
          the price of purchases as deemed required by us. We may change prices at any time. All
          payments shall be in INR.
        </p>
        <p className={P}>
          You agree to pay all charges at the prices then in effect for your purchases and any
          applicable shipping fees, and you authorize us to charge your chosen payment provider for
          any such amounts upon placing your order. If your order is subject to recurring charges,
          then you consent to our charging your payment method on a recurring basis without requiring
          your prior approval for each recurring charge, until such time as you cancel the applicable
          order. We reserve the right to correct any errors or mistakes in pricing, even if we have
          already requested or received payment.
        </p>
        <p className={P}>
          We reserve the right to refuse any order placed through the Services. We may, in our sole
          discretion, limit or cancel quantities purchased per person, per household, or per order.
          These restrictions may include orders placed by or under the same customer account, the
          same payment method, and/or orders that use the same billing or shipping address. We reserve
          the right to limit or prohibit orders that, in our sole judgment, appear to be placed by
          dealers, resellers, or distributors.
        </p>
      </>
    ),
  },
  {
    id: 'free-trial',
    title: 'Free Trial',
    body: (
      <p className={P}>
        We offer a 15-day free trial to new users who register with the Services. The account will not
        be charged and the subscription will be suspended until upgraded to a paid version at the end
        of the free trial.
      </p>
    ),
  },
  {
    id: 'subscription-renewal',
    title: 'Subscription Renewal and Grace Period Policy',
    body: (
      <>
        <p className={P}>
          The subscription for Natzur IMBS licenses is fully automated and follows a prepaid billing
          cycle. Upon the expiration of your current subscription, you will be granted a 7-day grace
          period to complete your next subscription payment.
        </p>
        <p className={P}>
          <strong className="text-slate-800">Renewal Alerts:</strong> Between the 3rd and 7th day of
          each month, you will see a renewal alert bar inside your Netzur IMBS software interface
          prompting you to renew your subscription.
        </p>
        <p className={P}>
          <strong className="text-slate-800">Failure to Renew:</strong> If the subscription is not
          renewed by the 7th day of the grace period, your license will automatically expire.
        </p>
        <p className={P}>
          <strong className="text-slate-800">License Expiry Consequence:</strong> Upon expiration, you
          will no longer have access to your dashboard or system features. Instead, you will see an
          “Expired License” notice upon login.
        </p>
        <p className={P}>
          <strong className="text-slate-800">Subscription Portal:</strong> From the expired license
          page, you will be redirected to our official subscription billing portal{' '}
          <a
            href="https://billing.netzur.com"
            className="text-[#F13B0A] hover:underline font-medium"
          >
            billing.netzur.com
          </a>{' '}
          where you can complete your renewal.
        </p>
        <p className={P}>
          Please note that it is your responsibility to ensure timely renewal to avoid service
          interruptions.
        </p>
      </>
    ),
  },
  {
    id: 'cancellation',
    title: 'Cancellation',
    body: (
      <p className={P}>
        With contacting us over email Your cancellation will take effect at the end of the current paid
        term.
      </p>
    ),
  },
  {
    id: 'prohibited-activities',
    title: 'Prohibited Activities',
    body: (
      <>
        <p className={P}>
          You may not access or use the Services for any purpose other than that for which we make the
          Services available. The Services may not be used in connection with any commercial endeavors
          except those that are specifically endorsed or approved by us.
        </p>
        <p className={P}>As a user of the Services, you agree not to:</p>
        <ul className="mt-3 space-y-2">
          {[
            'Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
            'Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.',
            'Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.',
            'Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.',
            'Use any information obtained from the Services in order to harass, abuse, or harm another person.',
            'Make improper use of our support services or submit false reports of abuse or misconduct.',
            'Use the Services in a manner inconsistent with any applicable laws or regulations.',
            'Engage in unauthorized framing of or linking to the Services.',
            'Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.',
            'Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
            'Delete the copyright or other proprietary rights notice from any Content.',
            'Attempt to impersonate another user or person or use the username of another user.',
            'Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).',
            'Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.',
            'Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.',
            'Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.',
            'Copy or adapt the Services’ software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.',
            'Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.',
            'Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.',
            'Use a buying agent or purchasing agent to make purchases on the Services.',
            'Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.',
            'Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.',
            'Use the Services to advertise or offer to sell goods and services.',
            'Sell or otherwise transfer your profile.',
          ].map((item) => (
            <li key={item} className={LI}>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'user-generated-contributions',
    title: 'User Generated Contributions',
    body: (
      <>
        <p className={P}>
          The Services does not offer users to submit or post content. We may provide you with the
          opportunity to create, submit, post, display, transmit, perform, publish, distribute, or
          broadcast content and materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions, or personal
          information or other material (collectively, “Contributions”). Contributions may be
          viewable by other users of the Services and through third-party websites. As such, any
          Contributions you transmit may be treated in accordance with the Services’ Privacy Policy.
          When you create or make available any Contributions, you thereby represent and warrant that:
        </p>
        <ul className="mt-3 space-y-2">
          {[
            'The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.',
            'You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.',
            'You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.',
            'Your Contributions are not false, inaccurate, or misleading.',
            'Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.',
            'Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).',
            'Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.',
            'Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.',
            'Your Contributions do not violate any applicable law, regulation, or rule.',
            'Your Contributions do not violate the privacy or publicity rights of any third party.',
            'Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.',
            'Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.',
            'Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.',
          ].map((item) => (
            <li key={item} className={LI}>
              {item}
            </li>
          ))}
        </ul>
        <p className={P}>
          Any use of the Services in violation of the foregoing violates these Legal Terms and may
          result in, among other things, termination or suspension of your rights to use the Services.
        </p>
      </>
    ),
  },
  {
    id: 'contribution-license',
    title: 'Contribution License',
    body: (
      <>
        <p className={P}>
          You and Services agree that we may access, store, process, and use any information and
          personal data that you provide following the terms of the Privacy Policy and your choices
          (including settings).
        </p>
        <p className={P}>
          By submitting suggestions or other feedback regarding the Services, you agree that we can
          use and share such feedback for any purpose without compensation to you.
        </p>
        <p className={P}>
          We do not assert any ownership over your Contributions. You retain full ownership of all of
          your Contributions and any intellectual property rights or other proprietary rights
          associated with your Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You are solely
          responsible for your Contributions to the Services and you expressly agree to exonerate us
          from any and all responsibility and to refrain from any legal action against us regarding
          your Contributions.
        </p>
      </>
    ),
  },
  {
    id: 'services-management',
    title: 'Services Management',
    body: (
      <p className={P}>
        We reserve the right, but not the obligation, to: (1) monitor the Services for violations of
        these Legal Terms; (2) take appropriate legal action against anyone who, in our sole
        discretion, violates the law or these Legal Terms, including without limitation, reporting
        such user to law enforcement authorities; (3) in our sole discretion and without limitation,
        refuse, restrict access to, limit the availability of, or disable (to the extent
        technologically feasible) any of your Contributions or any portion thereof; (4) in our sole
        discretion and without limitation, notice, or liability, to remove from the Services or
        otherwise disable all files and content that are excessive in size or are in any way burdensome
        to our systems; and (5) otherwise manage the Services in a manner designed to protect our
        rights and property and to facilitate the proper functioning of the Services.
      </p>
    ),
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    body: (
      <p className={P}>
        We care about data privacy and security. Please review our{' '}
        <a href="/privacy-policy" className="text-[#F13B0A] hover:underline font-medium">
          Privacy Policy
        </a>
        . By using the Services, you agree to be bound by our Privacy Policy, which is incorporated
        into these Legal Terms. Please be advised the Services are hosted in India. If you access the
        Services from any other region of the world with laws or other requirements governing
        personal data collection, use, or disclosure that differ from applicable laws in India, then
        through your continued use of the Services, you are transferring your data to India, and you
        expressly consent to have your data transferred to and processed in India.
      </p>
    ),
  },
  {
    id: 'term-and-termination',
    title: 'Term and Termination',
    body: (
      <>
        <p className={P}>
          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT
          LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
          DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES
          (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON,
          INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
          CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
          USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION
          THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </p>
        <p className={P}>
          If we terminate or suspend your account for any reason, you are prohibited from registering
          and creating a new account under your name, a fake or borrowed name, or the name of any
          third party, even if you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take appropriate legal
          action, including without limitation pursuing civil, criminal, and injunctive redress.
        </p>
      </>
    ),
  },
  {
    id: 'modifications',
    title: 'Modifications and Interruptions',
    body: (
      <>
        <p className={P}>
          We reserve the right to change, modify, or remove the contents of the Services at any time
          or for any reason at our sole discretion without notice. However, we have no obligation to
          update any information on our Services. We will not be liable to you or any third party for
          any modification, price change, suspension, or discontinuance of the Services.
        </p>
        <p className={P}>
          We cannot guarantee the Services will be available at all times. We may experience
          hardware, software, or other problems or need to perform maintenance related to the
          Services, resulting in interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services at any time or for
          any reason without notice to you. You agree that we have no liability whatsoever for any
          loss, damage, or inconvenience caused by your inability to access or use the Services
          during any downtime or discontinuance of the Services.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    body: (
      <p className={P}>
        These Legal Terms shall be governed by and defined following the laws of India. NETZUR
        NETWORKS PRIVATE LIMITED and yourself irrevocably consent that the courts of India shall have
        exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal
        Terms.
      </p>
    ),
  },
  {
    id: 'dispute-resolution',
    title: 'Dispute Resolution',
    body: (
      <>
        <h3 className={H3}>Informal Negotiations</h3>
        <p className={P}>
          To expedite resolution and control the cost of any dispute, controversy, or claim related to
          these Legal Terms (each a “Dispute” and collectively, the “Disputes”) brought by either you
          or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first
          attempt to negotiate any Dispute (except those Disputes expressly provided below)
          informally before initiating arbitration. Such informal negotiations commence upon written
          notice from one Party to the other Party.
        </p>

        <h3 className={H3}>Binding Arbitration</h3>
        <p className={P}>
          Any dispute arising out of or in connection with these Legal Terms, including any question
          regarding its existence, validity, or termination, shall be referred to and finally resolved
          by the International Commercial Arbitration Court under the European Arbitration Chamber
          (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC. The seat, or
          legal place, of arbitration shall be India. The governing law of these Legal Terms shall be
          substantive law of India.
        </p>

        <h3 className={H3}>Restrictions</h3>
        <p className={P}>
          The Parties agree that any arbitration shall be limited to the Dispute between the Parties
          individually. To the full extent permitted by law, (a) no arbitration shall be joined with
          any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated
          on a class-action basis or to utilize class action procedures; and (c) there is no right or
          authority for any Dispute to be brought in a purported representative capacity on behalf of
          the general public or any other persons.
        </p>

        <h3 className={H3}>Exceptions to Informal Negotiations and Arbitration</h3>
        <p className={P}>
          The Parties agree that the following Disputes are not subject to the above provisions
          concerning informal negotiations or binding arbitration: (a) any Disputes seeking to enforce
          or protect, or concerning the validity of, any of the intellectual property rights of a
          Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion
          of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision
          is found to be illegal or unenforceable, then neither Party will elect to arbitrate any
          Dispute falling within that portion of this provision found to be illegal or unenforceable
          and such Dispute shall be decided by a court of competent jurisdiction within the courts
          listed for jurisdiction above.
        </p>
      </>
    ),
  },
  {
    id: 'corrections',
    title: 'Corrections',
    body: (
      <p className={P}>
        There may be information on the Services that contains typographical errors, inaccuracies, or
        omissions, including descriptions, pricing, availability, and various other information. We
        reserve the right to correct any errors, inaccuracies, or omissions and to change or update
        the information on the Services at any time, without prior notice.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    body: (
      <p className={`${P} uppercase leading-relaxed`}>
        The Services are provided on an as-is and as-available basis. You agree that your use of the
        Services will be at your sole risk. To the fullest extent permitted by law, we disclaim all
        warranties, express or implied, in connection with the Services and your use thereof,
        including, without limitation, the implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We make no warranties or representations about the
        accuracy or completeness of the Services’ content or the content of any websites or mobile
        applications linked to the Services and we will assume no liability or responsibility for any
        (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or
        property damage, of any nature whatsoever, resulting from your access to and use of the
        Services, (3) any unauthorized access to or use of our secure servers and/or any and all
        personal information and/or financial information stored therein, (4) any interruption or
        cessation of transmission to or from the Services, (5) any bugs, viruses, Trojan horses, or
        the like which may be transmitted to or through the Services by any third party, and/or (6)
        any errors or omissions in any content and materials or for any loss or damage of any kind
        incurred as a result of the use of any content posted, transmitted, or otherwise made
        available via the Services.
      </p>
    ),
  },
  {
    id: 'limitations-of-liability',
    title: 'Limitations of Liability',
    body: (
      <p className={`${P} uppercase leading-relaxed`}>
        In no event will we or our directors, employees, or agents be liable to you or any third
        party for any direct, indirect, consequential, exemplary, incidental, special, or punitive
        damages, including lost profit, lost revenue, loss of data, or other damages arising from your
        use of the Services, even if we have been advised of the possibility of such damages.
      </p>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: (
      <p className={P}>
        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates,
        and all of our respective officers, agents, partners, and employees, from and against any
        loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses,
        made by any third party due to or arising out of: (1) use of the Services; (2) breach of these
        Legal Terms; (3) any breach of your representations and warranties set forth in these Legal
        Terms; (4) your violation of the rights of a third party, including but not limited to
        intellectual property rights; or (5) any overt harmful act toward any other user of the
        Services with whom you connected via the Services.
      </p>
    ),
  },
  {
    id: 'user-data',
    title: 'User Data',
    body: (
      <p className={P}>
        We will maintain certain data that you transmit to the Services for the purpose of managing
        the performance of the Services, as well as data relating to your use of the Services. Although
        we perform regular routine backups of data, you are solely responsible for all data that you
        transmit or that relates to any activity you have undertaken using the Services. You agree that
        we shall have no liability to you for any loss or corruption of any such data, and you hereby
        waive any right of action against us arising from any such loss or corruption of such data.
      </p>
    ),
  },
  {
    id: 'electronic-communications',
    title: 'Electronic Communications, Transactions, and Signatures',
    body: (
      <p className={`${P} uppercase leading-relaxed`}>
        Visiting the Services, sending us emails, and completing online forms constitute electronic
        communications. You consent to receive electronic communications, and you agree that all
        agreements, notices, disclosures, and other communications we provide to you electronically,
        via email and on the Services, satisfy any legal requirement that such communication be in
        writing. You hereby agree to the use of electronic signatures, contracts, orders, and other
        records, and to electronic delivery of notices, policies, and records of transactions initiated
        or completed by us or via the Services. You hereby waive any rights or requirements under any
        statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an
        original signature or delivery or retention of non-electronic records, or to payments or the
        granting of credits by any means other than electronic means.
      </p>
    ),
  },
  {
    id: 'international-sales',
    title: 'International Sales & Payment',
    body: (
      <>
        <p className={P}>
          NETZUR NETWORKS PRIVATE LIMITED provides software products, subscription-based SaaS
          services, software licensing, implementation, training, and related technical support to
          customers in India and international markets.
        </p>
        <p className={P}>
          For customers located outside India, prices and invoices may be issued in supported foreign
          currencies, including USD, subject to applicable laws and payment provider availability.
          International customers may make payments through approved online payment gateways, bank
          transfers, or other payment methods made available by us.
        </p>
        <p className={P}>
          All international transactions are for legitimate business software and related services
          provided by NETZUR NETWORKS PRIVATE LIMITED. Applicable taxes, foreign exchange charges,
          payment processing fees, or other statutory charges may apply depending on the customer’s
          country and payment method.
        </p>
      </>
    ),
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous',
    body: (
      <p className={P}>
        These Legal Terms and any policies or operating rules posted by us on the Services or in
        respect of the Services constitute the entire agreement and understanding between you and us.
        Our failure to exercise or enforce any right or provision of these Legal Terms shall not
        operate as a waiver of such right or provision. These Legal Terms operate to the fullest
        extent permissible by law. We may assign any or all of our rights and obligations to others at
        any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act
        caused by any cause beyond our reasonable control. If any provision or part of a provision of
        these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or
        part of the provision is deemed severable from these Legal Terms and does not affect the
        validity and enforceability of any remaining provisions.
      </p>
    ),
  },
];

export default function TermsConditions({ onOpenDemo }: { onOpenDemo: () => void }) {
  usePageMeta('terms-condition', META_TITLE, META_DESCRIPTION);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white text-slate-900 flex flex-col justify-between">
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
              Terms &amp; <span className="text-slate-400">Conditions</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-4 font-normal">
              These Legal Terms constitute a legally binding agreement made between you and NETZUR
              NETWORKS PRIVATE LIMITED concerning your access to and use of the Services.
            </p>
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed mb-8 border-l-2 border-[#F13B0A] pl-4">
              We operate the website https://netzur.com (the “Site”), as well as any other related
              products and services that refer or link to these legal terms (collectively, the
              “Services”).
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Last Revised: 14th June 2025</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-slate-400" />
                <span>Governed by India</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative hidden md:flex justify-center items-center z-10">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                alt="Legal agreement and signed documents"
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-md">
                  <p className="text-sm font-bold text-white mb-1">Acceptance of Terms</p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    By accessing the Services you agree to be bound by all of these Legal Terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-bottom-12 absolute z-12 w-full pb-8 pt-6 border-t border-slate-100 bg-slate-50">
        </div>
      </section>

      {/* Body with sticky sidebar nav */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
            {/* Sidebar nav */}
            <nav className="lg:sticky lg:top-24 lg:self-start mb-10 lg:mb-0">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-slate-900 mb-4">
                  Table of Contents
                </p>
                <ul className="space-y-0.5 max-h-[calc(100vh-14rem)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-2 px-2.5 py-1.5 rounded-lg text-[13px] text-slate-600 hover:bg-white hover:text-[#F13B0A] transition-colors"
                      >
                        <span className="text-slate-400 tabular-nums shrink-0">{i + 1}.</span>
                        <span className="leading-snug">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Content */}
            <div>
          {/* Agreement */}
          <h2 className={H2}>Agreement to Our Legal Terms</h2>
          <p className={P}>
            We are NETZUR NETWORKS PRIVATE LIMITED (“Company,” “we,” “us,” “our”), a company
            registered in India at S-5, Tirupati Complex, Near Bus Station, Sidhpur, Gujarat 384151.
          </p>
          <p className={P}>
            You can contact us by phone at 9408053196, email at info@netzur.com, or by mail to S-5,
            Tirupati Complex, Near Bus Station, Sidhpur, Gujarat 384151, India.
          </p>
          <div className="mt-5 p-4 rounded-xl bg-orange-50 border-l-2 border-[#F13B0A]">
            <p className="text-slate-700 leading-relaxed text-sm flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#F13B0A] shrink-0 mt-0.5" />
              <span>
                You agree that by accessing the Services, you have read, understood, and agreed to be
                bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
              </span>
            </p>
          </div>
          <p className={P}>
            Supplemental terms and conditions or documents that may be posted on the Services from
            time to time are hereby expressly incorporated herein by reference. We reserve the right,
            in our sole discretion, to make changes or modifications to these Legal Terms at any time
            and for any reason. You are subject to, and will be deemed to have been made aware of and
            to have accepted, the changes in any revised Legal Terms by your continued use of the
            Services after the date such revised Legal Terms are posted.
          </p>
          <p className={P}>
            All users who are minors in the jurisdiction in which they reside (generally under the age
            of 18) must have the permission of, and be directly supervised by, their parent or guardian
            to use the Services.
          </p>
          <p className={P}>
            We recommend that you print a copy of these Legal Terms for your records.
          </p>

          {/* Sections */}
          {SECTIONS.map((s, i) => (
            <div key={s.id}>
              <h2 id={s.id} className={H2}>
                <span className="text-[#F13B0A]">{i + 1}.</span> {s.title}
              </h2>
              {s.body}
            </div>
          ))}

          {/* Contact */}
          <h2 id="contact-us" className={H2}>
            Contact Us
          </h2>
          <p className={P}>
            In order to resolve a complaint regarding the Services or to receive further information
            regarding use of the Services, please contact us at:
          </p>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
            <div className="flex items-start gap-3 text-slate-700">
              <MapPin className="w-4 h-4 text-[#F13B0A] shrink-0 mt-0.5" />
              <div>
                <div className="font-heading font-bold text-slate-900">NETZUR NETWORKS PRIVATE LIMITED</div>
                <div>S-5, Tirupati Complex, Near Bus Station</div>
                <div>Sidhpur, Gujarat 384151, India</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Phone className="w-4 h-4 text-[#F13B0A] shrink-0" />
              <a href="tel:+919408053196" className="hover:text-[#F13B0A] transition-colors">
                9408053196
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Mail className="w-4 h-4 text-[#F13B0A] shrink-0" />
              <a href="mailto:info@netzur.com" className="hover:text-[#F13B0A] transition-colors">
                info@netzur.com
              </a>
            </div>
          </div>

          {/* Print */}
          {/* <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print this page</span>
            </button>
            <span className="inline-flex items-center gap-2">
              <Ban className="w-4 h-4 text-slate-300" />
              <span>Last revised 14th June 2025</span>
            </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>


      <WhoWeAreFooterCta onOpenDemo={onOpenDemo} />
    </>
  );
}