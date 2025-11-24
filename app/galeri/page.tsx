"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Search, X, ChevronLeft, ChevronRight } from "lucide-react";

type GaleriItem =
  | { type: "image"; src: string; title: string; category: string }
  | { type: "video"; thumbnail: string; url?: string; title: string; category: string };

export default function GaleriPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // misal 3 kolom x 3 baris

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);


  // Reset modal & halaman saat search/filter berubah
  useEffect(() => {
  setSelectedItem(null);
  setCurrentPage(1);
}, [search, filter]);


  const galeriItems: GaleriItem[] = [
    { type: "video", thumbnail: "/atv.mp4", title: "ATV Adventure", category: "atv" },
    { type: "video", thumbnail: "/atv2.mp4", title: "ATV Adventure", category: "atv" },
    { type: "video", thumbnail: "/atv3.mp4", title: "ATV Adventure", category: "atv" },
    { type: "video", thumbnail: "/camping2.mp4", title: "Camping Outdoor", category: "camping" },
    { type: "video", thumbnail: "/camping3.mp4", title: "Camping Outdoor", category: "camping" },
    { type: "video", thumbnail: "/camping4.mp4", title: "Camping Outdoor", category: "camping" },
    { type: "video", thumbnail: "/camping5.mp4", title: "Camping Outdoor", category: "camping" },
    { type: "video", thumbnail: "/camping6.mp4", title: "Camping Outdoor", category: "camping" },
    { type: "video", thumbnail: "/campingriverside.mp4", title: "Camping Riverside Pangalengan", category: "camping-riverside" },
    { type: "video", thumbnail: "/flyingfox.mp4", title: "Flying Fox", category: "flyingfox" },
    { type: "video", thumbnail: "/fungames.mp4", title: "Outbound Games", category: "fungames" },
    { type: "video", thumbnail: "/fungames2.mp4", title: "Outbound Games", category: "fungames" },
    { type: "video", thumbnail: "/fungames3.mp4", title: "Outbound Games", category: "fungames" },
    { type: "video", thumbnail: "/fungames4.mp4", title: "Outbound Games", category: "fungames" },
    { type: "video", thumbnail: "/rafting.mp4", title: "Arung Jeram", category: "rafting" },
    { type: "video", thumbnail: "/rafting2.mp4", title: "Arung Jeram", category: "rafting" },
    { type: "video", thumbnail: "/rafting3.mp4", title: "Arung Jeram", category: "rafting" },
    { type: "video", thumbnail: "/offroad.mp4", title: "Offroad Adventure", category: "offroad" },
    { type: "video", thumbnail: "/offroad2.mp4", title: "Offroad Adventure", category: "offroad" },
    { type: "video", thumbnail: "/offroad3.mp4", title: "Offroad Adventure", category: "offroad" },
    { type: "video", thumbnail: "/offroad4.mp4", title: "Offroad Adventure", category: "offroad" },
    { type: "video", thumbnail: "/offroad5.mp4", title: "Offroad Adventure", category: "offroad" },
    { type: "video", thumbnail: "/offroad6.mp4", title: "Offroad Adventure", category: "offroad" },
    { type: "video", thumbnail: "/paintball.mp4", title: "Paintball Pangalengan", category: "paintball" },
    { type: "video", thumbnail: "/travelpackage.mp4", title: "Travel & Package", category: "travel-package" },
    { type: "video", thumbnail: "/travelpackage3.mp4", title: "Travel & Package", category: "travel-package" },
    { type: "video", thumbnail: "/travelpackage4.mp4", title: "Travel & Package", category: "travel-package" },
    { type: "video", thumbnail: "/travelpackage5.mp4", title: "Travel & Package", category: "travel-package" },
    { type: "video", thumbnail: "/glamping.mp4", title: "Glamping Pangalengan", category: "glamping" },
  ];


  const categories = [
    { value: "all", label: "Semua Kategori" },
    { value: "atv", label: "ATV" },
    { value: "camping", label: "Camping" },
    { value: "camping-riverside", label: "Camping Riverside" },
    { value: "flyingfox", label: "Flying Fox" },
    { value: "fungames", label: "Fungames" },
    { value: "glamping", label: "Glamping" },
    { value: "offroad", label: "Offroad" },
    { value: "paintball", label: "Paintball" },
    { value: "rafting", label: "Rafting" },
    { value: "travel-package", label: "Travel & Package" },
  ];


  // Filter items sesuai search & kategori
  // FILTER ITEMS (search + category)
  const filteredItems = galeriItems.filter((item) => {
    const searchableText =
      (item.title +
        " " +
        ("src" in item ? item.src : item.thumbnail)).toLowerCase();

    const matchSearch = searchableText.includes(search.toLowerCase());
    const matchCategory = filter === "all" ? true : item.category === filter;

    return matchSearch && matchCategory;
  });


  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleNext = () => {
    if (!selectedItem) return;
    const idx = filteredItems.findIndex(el => el === selectedItem);
    const next = filteredItems[(idx + 1) % filteredItems.length];
    setSelectedItem(next);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const idx = filteredItems.findIndex(el => el === selectedItem);
    const prev = filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length];
    setSelectedItem(prev);
  };

  const [clickPosition, setClickPosition] = useState<number | null>(null);


  return (
    <section className="pt-24 md:pt-32 pb-20 bg-[#f7f2ea]">
      <div className="container mx-auto px-5">
        {/* TITLE */}
        <div className="text-center pt-10 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d3a29] leading-tight">
            Galeri Kegiatan
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Beberapa kegiatan wisatawan bersama Warnasari Camping & Adventure
          </p>
        </div>

        {/* SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-10">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 text-[#6b7c5a]" size={19} />
            <input
              type="text"
              placeholder="Cari kegiatan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#fff9f1] border border-[#d8cbb8] text-[#3b4a31] focus:ring-2 focus:ring-[#6f8f63] shadow-sm"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2.5 rounded-xl bg-[#fff9f1] border border-[#d8cbb8] text-[#3b4a31] focus:ring-2 focus:ring-[#6f8f63] shadow-sm"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7 md:gap-10">
          {currentItems.map((item, i) => (
            <div
              key={`${item.category}-${item.title}-${i}`}
              onClick={() => setSelectedItem(item)}
              className="group rounded-xl overflow-hidden cursor-pointer shadow-md border border-[#d9ccb9] bg-[#fffaf3] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-center text-sm sm:text-base md:text-lg font-semibold text-[#2c3c26] py-2 sm:py-3 bg-gradient-to-r from-[#d8c6a8] to-[#cbb695] border-b border-[#b9a17f]">
                {item.title}
              </h3>

              {item.type === "image" && (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-b-xl group-hover:scale-105 transition duration-300"
                />
              )}

              {item.type === "video" && (
                <div className="relative">
                  <video
                    src={item.thumbnail}
                    muted autoPlay loop playsInline
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-b-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <Play className="absolute inset-0 m-auto w-12 sm:w-14 h-12 sm:h-14 text-yellow-300 drop-shadow-lg opacity-90 group-hover:scale-125 transition" />
                </div>
              )}
            </div>
          ))}
        </div>


        {/* Pagination Controls */}
        <div className="flex flex-row justify-center items-center mt-8 gap-3 text-center">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`
      flex items-center justify-center gap-2
      px-4 py-2 rounded-lg 
      text-sm font-semibold
      border border-[#cbb695]
      bg-white/80 backdrop-blur-sm shadow-sm
      hover:bg-[#6f8f63] hover:text-white hover:border-[#6f8f63]
      transition-all duration-300
      ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""}
    `}
          >
            <ChevronLeft size={16} /> Prev
          </button>

          {/* PAGE STATUS */}
          <span
            className="
      flex items-center justify-center
      px-4 py-2 rounded-lg 
      bg-white/70 backdrop-blur-sm 
      border border-[#d8cbb8] shadow-sm 
      text-[#2d3a29] font-semibold text-sm
    "
          >
            {currentPage} / {totalPages}
          </span>

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`
      flex items-center justify-center gap-2
      px-4 py-2 rounded-lg 
      text-sm font-semibold
      border border-[#cbb695]
      bg-white/80 backdrop-blur-sm shadow-sm
      hover:bg-[#6f8f63] hover:text-white hover:border-[#6f8f63]
      transition-all duration-300
      ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""}
    `}
          >
            Next <ChevronRight size={16} />
          </button>

        </div>

        {/* FULLSCREEN MODAL */}
        {selectedItem && (
          <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <X size={22} />
            </button>

            {/* LEFT */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full text-white transition"
            >
              <ChevronLeft size={26} />
            </button>

            {/* RIGHT */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full text-white transition"
            >
              <ChevronRight size={26} />
            </button>

            {/* MEDIA */}
            <div className="w-full max-w-5xl aspect-video flex items-center justify-center">
              {selectedItem.type === "image" && (
                <img
                  src={selectedItem.src}
                  className="w-full h-full object-contain rounded-xl"
                  alt={selectedItem.title}
                />
              )}

              {selectedItem.type === "video" && (
                <video
                  src={selectedItem.thumbnail}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-xl"
                />
              )}
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
