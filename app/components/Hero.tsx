"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { siteData } from "@/app/lib/siteData";

export function Hero() {
  const [videoOk, setVideoOk] = useState(true);
  const phoneHref = useMemo(() => `tel:${siteData.business.phone.tel}`, []);

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src={siteData.media.images.hero.src}
          alt={siteData.media.images.hero.alt}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        {videoOk ? (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteData.media.images.hero.src}
            onError={() => setVideoOk(false)}
            aria-hidden="true"
          >
            <source src={siteData.media.video.heroSrc} type="video/mp4" />
          </video>
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/95" />
      </div>

      <div className="relative">
        <div className="container-pad grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {siteData.business.claims.sameDayService}
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {siteData.hero.headline}
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-7 text-slate-200">
              {siteData.hero.subhead}
            </p>

            {siteData.hero.quickPoints.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {siteData.hero.quickPoints.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
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

            <p className="text-sm text-slate-300">
              {siteData.business.claims.licensedInsured} <span className="text-slate-500">•</span>{" "}
              {siteData.business.serviceAreaSummary}
            </p>
          </div>

          <div className="relative hidden md:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-200">
                Quick info
              </p>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl bg-slate-950/40 p-4">
                  <p className="text-xs font-bold text-slate-300">Phone</p>
                  <a href={phoneHref} className="mt-1 block text-lg font-extrabold text-white">
                    {siteData.business.phone.display}
                  </a>
                </div>
                <div className="rounded-2xl bg-slate-950/40 p-4">
                  <p className="text-xs font-bold text-slate-300">{siteData.business.hours.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    {siteData.business.hours.detail}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {siteData.business.hours.emergencyNote}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/40 p-4">
                  <p className="text-xs font-bold text-slate-300">Address</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">
                    {siteData.business.address.street}
                    <br />
                    {siteData.business.address.cityStateZip}
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

