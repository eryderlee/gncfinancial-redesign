import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy – GNC Financial",
  description: "Privacy policy for GNC Financial — how we collect, use, and protect your information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Privacy Policy</h1>
        {/* Phase 1 TODO: port privacy policy from live site */}
        <p>[Privacy policy content — port from live site in Phase 1]</p>
      </div>
    </section>
  );
}
