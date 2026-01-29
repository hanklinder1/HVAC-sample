import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { siteData } from "@/app/lib/siteData";

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="container-pad grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">{siteData.about.heading}</h1>
            <p className="text-sm leading-6 text-white/85">
              {siteData.business.claims.localCompany} <span className="text-white/30">•</span>{" "}
              {siteData.business.claims.licensedInsured} <span className="text-white/30">•</span>{" "}
              {siteData.business.claims.sameDayService}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteData.business.phone.tel}`}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-slate-100"
              >
                {siteData.ui.primaryCtas.callNow}: {siteData.business.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-red-700"
              >
                {siteData.ui.primaryCtas.requestService}
              </Link>
            </div>
          </div>

          <div className="relative h-60 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm md:h-80">
            <Image
              src={siteData.media.images.family.src}
              alt={siteData.media.images.family.alt}
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
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {siteData.ui.labels.ourApproachHeading}
              </h2>
              {siteData.about.storyParagraphs.map((p) => (
                <p key={p} className="text-sm leading-7 text-slate-700">
                  {p}
                </p>
              ))}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-bold text-slate-900">{siteData.ui.labels.whatToExpectHeading}</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  {siteData.ui.labels.whatToExpectBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src={siteData.media.images.family.src}
                alt={siteData.media.images.family.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

