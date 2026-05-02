import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer – GNC Financial",
  description: "Legal disclaimer for GNC Financial services and website content.",
  path: "/disclaimer",
  noIndex: true,
});

export default function DisclaimerPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Disclaimer</h1>

        <p>
          The information contained on this website is general in nature and does not take into
          account your personal financial situation, needs, or objectives. It should not be relied
          upon as financial, taxation, legal, or other professional advice.
        </p>

        <h2>General Information Only</h2>
        <p>
          The content on this website is provided for general information purposes only. While
          GNC Financial endeavours to keep the information up to date and correct, we make no
          representations or warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability with respect to the website or the
          information, products, services, or related graphics contained on the website for any purpose.
        </p>
        <p>
          Any reliance you place on such information is strictly at your own risk. Before making
          any financial, tax, or business decisions, you should seek personalised advice from a
          qualified professional who can take your specific circumstances into account.
        </p>

        <h2>Not a Substitute for Professional Advice</h2>
        <p>
          The information on this website does not constitute financial advice, taxation advice,
          legal advice, or any other form of professional advice. Tax laws and regulations change
          regularly, and what is stated on this website may not reflect the most current position.
          GNC Financial recommends that you seek professional advice tailored to your individual
          circumstances before acting on any information contained on this website.
        </p>

        <h2>Registered Tax Agent</h2>
        <p>
          GNC Financial is a registered tax agent. Tax advice provided by GNC Financial to clients
          is provided under the Tax Agent Services Act 2009 (TASA) and is subject to the Code of
          Professional Conduct. General information on this website is not tax advice under TASA.
        </p>

        <h2>External Links</h2>
        <p>
          This website may contain links to external websites that are not maintained by or
          affiliated with GNC Financial. GNC Financial has no control over the content of those
          sites and accepts no responsibility for them or for any loss or damage that may arise
          from your use of them.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, GNC Financial excludes all liability
          for any loss or damage of any kind (including special, indirect, or consequential loss
          and including loss of business profits) arising out of or in connection with the use of
          this website or any information on it.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, please contact us at{" "}
          <a href={SITE.emailHref}>{SITE.email}</a> or call{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>

        <p className="text-sm text-gray-500 mt-8">Last updated: 2026</p>
      </div>
    </section>
  );
}
