import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy – GNC Financial",
  description: "GNC Financial privacy policy — how we collect, use, store, and protect your personal information under the Australian Privacy Act 1988.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Privacy Policy</h1>

        <p>
          GNC Financial (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your personal
          information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian
          Privacy Principles (APPs).
        </p>
        <p>
          By using our website or engaging our services, you consent to the practices described
          in this policy.
        </p>

        <h2>What Personal Information We Collect</h2>
        <p>
          We may collect and hold the following types of personal information:
        </p>
        <ul>
          <li>Name, address, date of birth, and contact details (phone, email)</li>
          <li>Tax file number (TFN) and Australian Business Number (ABN)</li>
          <li>Financial information including income, expenses, assets, and liabilities</li>
          <li>Employment details and business information</li>
          <li>Superannuation details</li>
          <li>Information about your family and dependants where relevant</li>
          <li>Information submitted through our website contact forms</li>
        </ul>
        <p>
          We only collect information that is reasonably necessary to provide our accounting
          and financial advisory services.
        </p>

        <h2>How We Collect Your Information</h2>
        <p>
          We collect personal information in the following ways:
        </p>
        <ul>
          <li>Directly from you when you engage our services or contact us</li>
          <li>Through our website contact and enquiry forms</li>
          <li>From the Australian Taxation Office (ATO), ASIC, or other government agencies
            where authorised</li>
          <li>From third parties with your consent (e.g. your employer, financial institutions,
            or previous accountant)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use your personal information to:
        </p>
        <ul>
          <li>Provide accounting, taxation, and financial advisory services to you</li>
          <li>Prepare and lodge tax returns, BAS, and other ATO documents on your behalf</li>
          <li>Comply with our legal obligations as a registered tax agent</li>
          <li>Communicate with you about our services and your account</li>
          <li>Send you relevant information about tax law changes, deadlines, and opportunities
            (you can opt out at any time)</li>
          <li>Improve our services and website</li>
        </ul>
        <p>
          We will not use your personal information for any purpose that you have not consented
          to or that is not directly related to the provision of our services.
        </p>

        <h2>Disclosure of Your Information</h2>
        <p>
          We may disclose your personal information to:
        </p>
        <ul>
          <li>The Australian Taxation Office (ATO) as required for lodgment purposes</li>
          <li>ASIC, state revenue offices, or other government agencies where required or
            authorised by law</li>
          <li>SMSF auditors and other third-party professionals engaged in providing services
            to you (with your consent)</li>
          <li>Our software providers (e.g. Xero, MYOB) as necessary to deliver our services</li>
        </ul>
        <p>
          We will not sell, trade, or rent your personal information to third parties. We will
          not disclose your information to any other party without your consent, unless required
          by law.
        </p>

        <h2>How We Store and Protect Your Information</h2>
        <p>
          We take reasonable steps to protect your personal information from misuse, interference,
          loss, and unauthorised access. This includes:
        </p>
        <ul>
          <li>Secure storage of physical documents</li>
          <li>Password-protected and encrypted electronic systems</li>
          <li>Restricted access to client information on a need-to-know basis</li>
          <li>Use of reputable, security-compliant cloud software providers</li>
        </ul>
        <p>
          When your information is no longer needed for the purpose it was collected, we will
          take reasonable steps to securely destroy or de-identify it, unless we are required
          by law to retain it.
        </p>

        <h2>Tax File Numbers</h2>
        <p>
          GNC Financial collects and uses Tax File Numbers (TFNs) only as authorised under the
          <em> Privacy Act 1988</em> and the <em>Income Tax Assessment Act 1997</em>. We handle
          TFNs in accordance with the Tax File Number Guidelines issued by the Australian
          Information Commissioner.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate, incomplete, or out-of-date information</li>
          <li>Complain about how we have handled your personal information</li>
        </ul>
        <p>
          To make a request or complaint, contact us using the details below. We will respond
          within a reasonable time.
        </p>

        <h2>Complaints</h2>
        <p>
          If you believe we have not handled your personal information appropriately, please
          contact us in the first instance. If you are not satisfied with our response, you
          may lodge a complaint with the Office of the Australian Information Commissioner (OAIC)
          at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.
        </p>

        <h2>Website Cookies</h2>
        <p>
          Our website may use cookies to improve your browsing experience. Cookies are small
          files stored on your device that help us understand how visitors use our site. You
          can disable cookies in your browser settings, though this may affect the functionality
          of the site.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The most current version will
          always be available on this page. We encourage you to review this policy periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any privacy-related queries or requests, please contact GNC Financial at:
        </p>
        <ul>
          <li>Email: <a href={SITE.emailHref}>{SITE.email}</a></li>
          <li>Phone: <a href={SITE.phoneHref}>{SITE.phone}</a></li>
          <li>Address: {SITE.address.full}</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">Last updated: 2026</p>
      </div>
    </section>
  );
}
