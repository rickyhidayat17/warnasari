"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { motion } from "framer-motion";

type GaleriItem = { type: "video"; thumbnail: string; title: string; category: string };

export default function GaleriPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const galeriItems: GaleriItem[] = [
    { type: "video", thumbnail: "/atv.mp4", title: "ATV Adventure", category: "atv" },
    { type: "video", thumbnail: "/camping2.mp4", title: "Camping Outdoor", category: "camping" },
    { type: "video", thumbnail: "/campingriverside.mp4", title: "Camping Riverside", category: "camping-riverside" },
    { type: "video", thumbnail: "/rafting.mp4", title: "Arung Jeram", category: "rafting" },
  ];

  const selectedItem = selectedIndex !== null ? galeriItems[selectedIndex] : null;

  return (
    <section id="layanan" className="py-24 bg-[#f2eee3]">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-[#2d3a29] mb-14">
          Galeri Warnasari Camping & Adventure
        </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 md:gap-10">
      {galeriItems.map((item, i) => (
        <div
          key={`${item.category}-${item.title}-${i}`}
          onClick={() => setSelectedIndex(i)}
          className="group rounded-xl overflow-hidden cursor-pointer shadow-md border border-[#d9ccb9] bg-[#fffaf3] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-center text-sm sm:text-base md:text-lg font-semibold text-[#2c3c26] py-2 sm:py-3 bg-gradient-to-r from-[#d8c6a8] to-[#cbb695] border-b border-[#b9a17f]">
            {item.title}
          </h3>

          <div className="relative">
            <video
              src={item.thumbnail}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-b-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <Play className="absolute inset-0 m-auto w-12 sm:w-14 h-12 sm:h-14 text-yellow-300 drop-shadow-lg opacity-90 group-hover:scale-125 transition" />
          </div>
        </div>
      ))}
    </div>

    {/* BUTTON LIHAT GALERI LAINNYA */}
    <div className="flex justify-center mt-10">
      <motion.a
        href="/galeri"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block mt-6 bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold text-base hover:bg-green-700 transition-colors shadow-lg"
      >
        Lihat Galeri Lainnya
      </motion.a>
    </div>

    {/* FULLSCREEN MODAL */}
    {selectedItem && (
      <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
        >
          <X size={22} />
        </button>

        <div className="w-full max-w-5xl aspect-video flex items-center justify-center">
          <video
            src={selectedItem.thumbnail}
            controls
            autoPlay
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        <p className="absolute bottom-6 text-white text-lg md:text-xl font-semibold text-center px-4">
          {selectedItem.title}
        </p>
      </div>
    )}
  </div>
  </section>
  );
}
