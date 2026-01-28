import Image from "next/image";
import { siteData } from "@/app/lib/siteData";

export function GalleryStrip() {
  return (
    <section className="bg-slate-950">
      <div className="container-pad py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {siteData.media.images.gallery.map((img) => (
            <div
              key={img.src}
              className="relative h-44 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover opacity-85"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

