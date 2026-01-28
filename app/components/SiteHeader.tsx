"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { siteData } from "@/app/lib/siteData";

function classNames(...values: Array<string | false | undefined | null>) {
  return values.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const phoneHref = useMemo(() => `tel:${siteData.business.phone.tel}`, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="bg-slate-900 text-white">
        <div className="container-pad flex items-center justify-between gap-3 py-2 text-xs sm:text-sm">
          <p className="line-clamp-1">{siteData.ui.topBarText}</p>
          <a
            href={phoneHref}
            className="hidden shrink-0 rounded-md bg-white/10 px-3 py-1 font-semibold hover:bg-white/15 sm:inline"
          >
            {siteData.business.phone.display}
          </a>
        </div>
      </div>

      <div className="container-pad flex items-center justify-between gap-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-sm">
              RH
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                Riggins
              </span>
              <span className="block text-xs font-semibold text-slate-600 sm:text-sm">
                Heating & Air
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteData.ui.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition",
                  active ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 sm:inline-flex"
          >
            {siteData.ui.primaryCtas.callNow}
          </a>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-blue-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
          >
            {siteData.ui.primaryCtas.requestService}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900 shadow-sm hover:bg-slate-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d={
                  open
                    ? "M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"
                    : "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-pad flex flex-col gap-2 py-4">
            {siteData.ui.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={classNames(
                    "rounded-xl px-4 py-3 text-sm font-semibold",
                    active ? "bg-slate-100 text-slate-900" : "text-slate-800 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={phoneHref}
              className="mt-1 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              {siteData.ui.primaryCtas.callNow}: {siteData.business.phone.display}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

