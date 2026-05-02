import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardBody } from "@/components/ui/Card";
import { ArrowRight, Receipt, BookOpen, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "receipt-tax": <Receipt className="w-6 h-6" />,
  "book-open": <BookOpen className="w-6 h-6" />,
  "trending-up": <TrendingUp className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  "chart-bar": <BarChart3 className="w-6 h-6" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Everything Under One Roof – No Mucking About
          </h2>
          <p className="text-brand-gray-text max-w-2xl mx-auto">
            Unlike accounting firms that only do the bare minimum, GNC Financial covers the whole spectrum of accounting and financial services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link key={service.id} href={service.slug} className="group">
              <Card variant="elevated" className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-gold/15 text-brand-navy flex items-center justify-center mb-4">
                    {ICON_MAP[service.icon]}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardBody className="flex-1">
                  <p className="text-sm leading-relaxed">{service.summary}</p>
                </CardBody>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-blue group-hover:text-brand-gold transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
