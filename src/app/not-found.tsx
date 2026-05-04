import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
        <p className="text-brand-gray-text text-lg mb-8">
          Sorry, we couldn't find that page. It might have moved or been removed.
        </p>
        <Link
          href="/"
          className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
