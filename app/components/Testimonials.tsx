import { siteData } from "@/app/lib/siteData";

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="container-pad py-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {siteData.home.sections.testimonialsHeading}
            </h2>
            <p className="text-sm text-slate-600">{siteData.ui.reviewsDisclaimer}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {siteData.testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-6 text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-slate-900">
                {t.name} <span className="font-semibold text-slate-500">• {t.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

