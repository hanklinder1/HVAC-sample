import Link from "next/link";
import { siteData } from "@/app/lib/siteData";

export function CTASection() {
  return (
    <section className="bg-blue-700">
      <div className="container-pad py-14">
        <div className="rounded-3xl bg-white/10 p-8 text-white shadow-sm ring-1 ring-white/15 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight">
                {siteData.home.sections.finalCtaHeading}
              </h2>
              <p className="text-sm leading-6 text-white/85">{siteData.home.sections.finalCtaSubhead}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href={`tel:${siteData.business.phone.tel}`}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-slate-100"
              >
                {siteData.ui.primaryCtas.callNow}: {siteData.business.phone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-slate-900"
              >
                {siteData.ui.primaryCtas.requestService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

