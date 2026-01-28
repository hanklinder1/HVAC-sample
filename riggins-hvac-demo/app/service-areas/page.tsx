import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { siteData } from "@/app/lib/siteData";

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="container-pad grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              {siteData.pages.serviceAreas.heading}
            </h1>
            <p className="text-sm leading-6 text-white/85">{siteData.pages.serviceAreas.subhead}</p>
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
              src={siteData.media.images.van.src}
              alt={siteData.media.images.van.alt}
              fill
              className="object-cover opacity-90"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad py-14">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {siteData.ui.labels.townsWeServeHeading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {siteData.ui.labels.townsWeServeSubhead}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {siteData.business.towns.map((town) => (
              <span
                key={town}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-800"
              >
                {town}
              </span>
            ))}
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-800">
              {siteData.ui.labels.surroundingAreasLabel}
            </span>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6">
              <p className="text-sm font-bold text-slate-900">{siteData.ui.labels.officeLocationLabel}</p>
              <p className="mt-1 text-sm text-slate-600">{siteData.business.address.full}</p>
            </div>
            <iframe
              title={siteData.map.title}
              src={siteData.map.embedSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

