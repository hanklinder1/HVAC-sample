import Image from "next/image";
import { siteData } from "@/app/lib/siteData";

export function GalleryStrip() {
  return (
    <section className="bg-white">
      <div className="container-pad py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {siteData.media.images.gallery.map((img) => (
            <div
              key={img.src}
              className="relative h-56 overflow-hidden rounded-2xl border-2 border-slate-200 shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

