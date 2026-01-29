import Link from "next/link";
import { SiteService, siteData } from "@/app/lib/siteData";

function ServiceIcon({ iconKey }: { iconKey: SiteService["iconKey"] }) {
  const common = "h-5 w-5";
  switch (iconKey) {
    case "snowflake":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M11 2h2v4.1l2.9-1.7 1 1.7L13 8.4v2.1l1.8-1 1 1.7L13 12l2.8 1.6-1 1.7-1.8-1v2.1l3.9 2.3-1 1.7L13 17.9V22h-2v-4.1l-2.9 1.7-1-1.7L11 15.6v-2.1l-1.8 1-1-1.7L11 12 8.2 10.4l1-1.7 1.8 1V7.6L7.1 5.3l1-1.7L11 6.1z"
          />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2s2 3 2 6c0 1.2-.3 2.3-1 3.2 2-.6 4-2.4 4-5.2 3 3 4 6.3 4 9 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-3.3 1.7-6.6 5-10 .2 2.3.8 4.4 2 6 1-1.2 1-2.4 1-3.8 0-2.1-1-5.2-1-5.2z"
          />
        </svg>
      );
    case "heatPump":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4a8 8 0 1 1-8 8h2a6 6 0 1 0 6-6V4zm1 5h-2v5.6l4.2 2.4 1-1.7-3.2-1.8V9z"
          />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M22 19.6 14.4 12c.4-1 .5-2.1.2-3.2l-2.2 2.2-2.2-2.2 2.2-2.2C11.3 6.3 10.2 6.4 9.2 6.8L4.4 2 2 4.4l4.8 4.8c-.4 1-.5 2.1-.2 3.2L2 19.6 4.4 22 12 14.4 19.6 22 22 19.6z"
          />
        </svg>
      );
    case "droplet":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2s7 7 7 13a7 7 0 1 1-14 0c0-6 7-13 7-13zm0 18a5 5 0 0 0 5-5c0-2.9-2.6-6.9-5-9.7-2.4 2.8-5 6.8-5 9.7a5 5 0 0 0 5 5z"
          />
        </svg>
      );
    case "duct":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v8h16V8H4zm3 1h2v6H7V9zm4 0h2v6h-2V9zm4 0h2v6h-2V9z"
          />
        </svg>
      );
    case "air":
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 8h10a3 3 0 1 0-3-3h2a1 1 0 1 1 1 1H3V4h10a3 3 0 1 0 0-6H3v2h10a1 1 0 0 1 0 2H3v2zM3 14h14a3 3 0 1 1-3 3h2a1 1 0 1 0 1-1H3v-2zm0-4h18v2H3v-2z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ServicesGrid({
  variant = "home",
  heading,
  subhead,
}: {
  variant?: "home" | "page";
  heading?: string;
  subhead?: string;
}) {
  return (
    <section className="bg-white">
      <div className="container-pad py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {heading ?? siteData.home.sections.servicesHeading}
            </h2>
            <p className="max-w-2xl text-sm text-slate-600">
              {subhead ?? siteData.home.sections.servicesSubhead}
            </p>
          </div>
          {variant === "home" ? (
            <Link
              href="/services"
              className="inline-flex w-fit rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              {siteData.ui.labels.viewAllServices}
            </Link>
          ) : null}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-red-600 to-blue-600 text-white shadow-sm">
                  <ServiceIcon iconKey={s.iconKey} />
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900">{s.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${siteData.business.phone.tel}`}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-slate-800"
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
    </section>
  );
}

