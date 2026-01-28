import Link from "next/link";
import { siteData } from "@/app/lib/siteData";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="container-pad grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-extrabold tracking-tight">{siteData.business.name}</p>
          <p className="text-sm text-slate-300">
            {siteData.business.address.street}
            <br />
            {siteData.business.address.cityStateZip}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Phone:</span>{" "}
            <a className="underline decoration-slate-600 underline-offset-4 hover:decoration-slate-200" href={`tel:${siteData.business.phone.tel}`}>
              {siteData.business.phone.display}
            </a>
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">{siteData.business.hours.label}:</span>{" "}
            {siteData.business.hours.detail} <span className="text-slate-400">•</span>{" "}
            {siteData.business.hours.emergencyNote}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-300">Service Areas</p>
          <p className="text-sm text-slate-300">{siteData.business.serviceAreaSummary}</p>
          <div className="flex flex-wrap gap-2">
            {siteData.business.towns.map((town) => (
              <span
                key={town}
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-200"
              >
                {town}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-300">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {siteData.ui.nav.map((item) => (
              <li key={item.href}>
                <Link className="text-slate-200 underline decoration-slate-700 underline-offset-4 hover:decoration-slate-300" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-xs text-slate-400">{siteData.ui.footerDisclaimer}</p>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="container-pad flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteData.business.name}</p>
          <p>
            {siteData.ui.footerDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

