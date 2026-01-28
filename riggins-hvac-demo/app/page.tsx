import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { GalleryStrip } from "@/app/components/GalleryStrip";
import { Hero } from "@/app/components/Hero";
import { ServicesGrid } from "@/app/components/ServicesGrid";
import { Testimonials } from "@/app/components/Testimonials";
import { TrustBadges } from "@/app/components/TrustBadges";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { siteData } from "@/app/lib/siteData";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <GalleryStrip />
      <ServicesGrid variant="home" />
      <WhyChooseUs />

      <section className="bg-white">
        <div className="container-pad py-14">
          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:grid-cols-2 md:items-center md:p-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {siteData.home.sections.maintenanceHeading}
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                {siteData.home.sections.maintenanceSubhead}
              </p>
              <ul className="mt-4 grid gap-2">
                {siteData.home.sections.maintenanceBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-800">
                    <span
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-xs font-extrabold text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-bold text-slate-900">
                {siteData.home.sections.maintenanceCardTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {siteData.home.sections.maintenanceCardBody}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${siteData.business.phone.tel}`}
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-slate-800"
                >
                  {siteData.ui.primaryCtas.callNow}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700"
                >
                  {siteData.ui.primaryCtas.requestService}
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                {siteData.home.sections.maintenanceCardNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="container-pad py-10">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h2 className="text-xl font-extrabold">{siteData.home.sections.financingHeading}</h2>
              <p className="text-sm text-white/80">{siteData.home.sections.financingSubhead}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteData.business.phone.tel}`}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-slate-100"
              >
                {siteData.ui.primaryCtas.callNow}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700"
              >
                {siteData.ui.primaryCtas.requestService}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-slate-50">
        <div className="container-pad py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {siteData.home.sections.serviceAreaHeading}
              </h2>
              <p className="max-w-2xl text-sm text-slate-600">{siteData.business.serviceAreaSummary}</p>
            </div>
            <Link
              href="/service-areas"
              className="inline-flex w-fit rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              {siteData.ui.labels.viewServiceAreas}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {siteData.business.towns.map((town) => (
              <span
                key={town}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-800 shadow-sm"
              >
                {town}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-slate-900">
              {siteData.home.sections.serviceAreaCardTitle}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              {siteData.business.address.full} <span className="text-slate-400">•</span>{" "}
              {siteData.business.hours.detail}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
