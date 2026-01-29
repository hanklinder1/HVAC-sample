import { siteData } from "@/app/lib/siteData";

export function TrustBadges() {
  return (
    <section aria-label="Trust signals" className="border-b border-slate-200 bg-white">
      <div className="container-pad py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {siteData.home.trustBadges.map((label) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-red-600 to-blue-600 text-white shadow-sm"
                aria-hidden="true"
              >
                ✓
              </span>
              <p className="text-sm font-bold text-slate-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

