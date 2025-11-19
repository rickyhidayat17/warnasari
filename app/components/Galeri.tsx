"use client";

import Image from "next/image";
import { Play } from "lucide-react";

type GaleriItem =
  | { type: "image"; src: string; title: string; category: string }
  | { type: "video"; thumbnail: string; url: string; title: string; category: string };

export const galeriItems: GaleriItem[] = [
  { type: "video", thumbnail: "/atv.mp4", url: "https://www.youtube.com/embed/tgbNymZ7vqY", title: "ATV Adventure", category: "atv" },
  { type: "video", thumbnail: "/camping.mp4", url: "https://www.youtube.com/embed/tgbNymZ7vqY", title: "Camping Pangalengan", category: "camping" },
  { type: "video", thumbnail: "/flyingfox.mp4", url: "https://www.youtube.com/embed/ScMzIvxBSi4", title: "Flying Fox", category: "flyingfox" },
];

export default function GaleriHome() {
  const previewItems = galeriItems.slice(0, 3);

  return (
    <section
      className="pt-10 pb-16 bg-[url('/textures/wood-light.jpg')] bg-cover bg-center bg-fixed"
      id="galeri"
    >
      <div className="container mx-auto px-6">
        
        {/* Judul */}
        <h2
          className="
            text-4xl font-bold text-center mb-10 
            text-[#2d3a29]
            "
        >
          Galeri Warnasari Camping & Adventure
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {previewItems.map((item, i) => (
            <div
              key={i}
              className="
                group rounded-xl overflow-hidden 
                shadow-[0_4px_10px_rgba(0,0,0,0.2)]
                border border-[#d4c8b7]
                bg-[#fffaf3]
                hover:shadow-[0_6px_16px_rgba(0,0,0,0.28)]
                transition-all duration-300
                transform hover:-translate-y-1
              "
            >
              {/* Header Title */}
              <h3
                className="
                  text-center text-lg font-semibold text-[#2c3c26] py-3 
                  bg-gradient-to-r from-[#d8c6a8] to-[#cbb695]
                  border-b border-[#b9a17f]
                "
              >
                {item.title}
              </h3>

              {/* Thumbnail */}
              {item.type === "video" && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                >
                  {item.thumbnail.endsWith(".mp4") ? (
                    <video
                      src={item.thumbnail}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={500}
                      height={350}
                      className="w-full h-64 object-cover"
                    />
                  )}

                  {/* Play Icon Premium */}
                  <Play
                    className="
                      absolute inset-0 m-auto 
                      w-16 h-16 text-yellow-300 
                      drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]
                      opacity-80 group-hover:scale-125 
                      transition-transform duration-300
                    "
                  />
                </a>
              )}
            </div>
          ))}

        </div>

        {/* Tombol More */}
        <div className="text-center mt-12">
          <a
            href="/galeri"
            className="
              inline-block bg-green-600 text-white
              px-8 py-3 rounded-2xl text-lg font-bold 
              shadow-lg hover:bg-green-800 transition
              tracking-wide border border-green-600
              transition-all duration-300
              transform hover:-translate-y-1
            "
          >
            Lihat Galeri Lainnya →
          </a>
        </div>

      </div>
    </section>
  );
}
