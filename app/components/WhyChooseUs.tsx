import { siteData } from "@/app/lib/siteData";

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50">
      <div className="container-pad py-14">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {siteData.home.sections.whyChooseHeading}
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            {siteData.home.sections.whyChooseSubhead}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.home.whyChooseCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-base font-extrabold text-slate-900">{card.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

