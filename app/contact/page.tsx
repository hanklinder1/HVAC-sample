"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { siteData } from "@/app/lib/siteData";

type FormState = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  serviceType: siteData.contact.form.serviceTypes[0] ?? "Not sure",
  message: "",
};

export default function ContactPage() {
  const phoneHref = useMemo(() => `tel:${siteData.business.phone.tel}`, []);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/request-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error sending your request. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-slate-950">
        <div className="container-pad py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-white">
                {siteData.contact.heading}
              </h1>
              <p className="text-sm leading-6 text-white/85">{siteData.contact.subhead}</p>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-sm">
                <p className="text-sm font-bold text-white">{siteData.ui.labels.callForFastestService}</p>
                <a href={phoneHref} className="mt-2 block text-2xl font-extrabold">
                  {siteData.business.phone.display}
                </a>
                <p className="mt-3 text-sm text-white/80">
                  {siteData.business.hours.detail} <span className="text-white/30">•</span>{" "}
                  {siteData.business.hours.emergencyNote}
                </p>
                <p className="mt-3 text-sm text-white/80">
                  {siteData.business.address.street}
                  <br />
                  {siteData.business.address.cityStateZip}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-slate-100"
                  >
                    {siteData.ui.primaryCtas.callNow}
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700"
                  >
                    {siteData.ui.labels.viewServices}
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-lg font-extrabold text-slate-900">
                    {siteData.contact.form.successHeading}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {siteData.contact.form.successBody}
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={phoneHref}
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-slate-800"
                    >
                      {siteData.ui.primaryCtas.callNow}
                    </a>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm hover:bg-slate-50"
                      onClick={() => {
                        setForm(initialState);
                        setSubmitted(false);
                      }}
                    >
                      {siteData.ui.labels.sendAnotherRequest}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" aria-label="Request service form">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-900">
                      {siteData.contact.form.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-blue-600/30 focus:ring-4"
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-900">
                        {siteData.contact.form.phoneLabel}
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-blue-600/30 focus:ring-4"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-900">
                        {siteData.contact.form.emailLabel}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-blue-600/30 focus:ring-4"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="text-sm font-bold text-slate-900">
                      {siteData.contact.form.serviceTypeLabel}
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={(e) => setForm((s) => ({ ...s, serviceType: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-blue-600/30 focus:ring-4"
                    >
                      {siteData.contact.form.serviceTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-900">
                      {siteData.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-blue-600/30 focus:ring-4"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? siteData.ui.labels.sending : siteData.contact.form.submitLabel}
                  </button>

                  <p className="text-xs text-slate-500">
                    {siteData.ui.labels.consentText}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

