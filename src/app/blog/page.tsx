import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Blog – Accounting & Finance Tips",
  description:
    "Stay up to date with accounting, tax, and finance tips from the GNC Financial team in Baulkham Hills.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-white/80 text-xl">Accounting, tax & finance tips from the GNC team</p>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phase 1 TODO: port blog posts from live site, or connect to CMS/MDX */}
          <p className="text-brand-gray-text text-center">
            Blog posts coming — port from live site in Phase 1 content build.
          </p>
        </div>
      </section>
    </>
  );
}
