import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { ServicesGrid } from "@/app/components/ServicesGrid";
import { siteData } from "@/app/lib/siteData";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="container-pad grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              {siteData.pages.services.heading}
            </h1>
            <p className="text-sm leading-6 text-white/85">{siteData.pages.services.subhead}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteData.business.phone.tel}`}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-slate-100"
              >
                {siteData.ui.primaryCtas.callNow}: {siteData.business.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700"
              >
                {siteData.ui.primaryCtas.requestService}
              </Link>
            </div>
          </div>

          <div className="relative h-60 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm md:h-80">
            <Image
              src={siteData.media.images.tech.src}
              alt={siteData.media.images.tech.alt}
              fill
              className="object-cover opacity-90"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>
      </section>

      <ServicesGrid variant="page" heading={siteData.pages.services.heading} subhead={siteData.pages.services.subhead} />

      <CTASection />
    </>
  );
}

