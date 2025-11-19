"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Halo Admin Warnasari Camping & Adventure, saya ingin reservasi/booking layanan."
  );

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0); // smooth floating offset

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      setVisible(window.scrollY > 80);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rawOffset = window.scrollY * 0.05;   // 5% efek
          const smoothOffset = Math.min(rawOffset, 20); // max 20px biar tidak terbang
          setOffset(smoothOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating WA Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          transform: `translateY(-${offset}px)`,
        }}
        className={`fixed right-6 z-[9999] rounded-full shadow-xl p-4
        flex items-center justify-center bg-[#25D366] text-white
        transition-all duration-300 ease-[cubic-bezier(.25,.8,.25,1)]
        hover:bg-[#1ebe5d] active:scale-95
        
        ${visible 
          ? "opacity-100 bottom-6" 
          : "opacity-0 bottom-0 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.653.878 5.093 2.355 7.074L4 29l7.184-2.305C13.01 27.572 14.47 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.293 17.293c-.267.75-1.563 1.437-2.206 1.53-.592.086-1.35.122-2.176-.137-.5-.158-1.147-.373-1.986-.829-3.497-1.93-5.77-5.318-5.95-5.566-.179-.248-1.42-1.894-1.42-3.616 0-1.723.9-2.57 1.22-2.92.32-.35.7-.438.94-.438.24 0 .47.003 .676.012.218.01.51-.082.797.607.267.656.906 2.265.986 2.43.08.165.133.36.027.577-.107.218-.16.36-.318.557-.158.197-.334.44-.475.592-.158.165-.322.345-.139.676.182.33.809 1.337 1.739 2.164 1.195 1.067 2.204 1.398 2.535 1.557.33.158.518.133.71-.08.192-.214.82-.95 1.04-1.278.218-.33.457-.27.797-.158.34.107 2.144 1.01 2.51 1.193.37.182.617.277.707.432.09.158.09.907-.176 1.657z"/>
        </svg>
      </button>

      {/* Pop-up Chat Panel */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeInFast"
            onClick={() => setOpen(false)}
          />

          {/* Card */}
          <div className="relative w-full md:w-96 bg-white/90 backdrop-blur-xl border border-white/40 
              rounded-t-3xl md:rounded-3xl shadow-[0_8px_40px_-4px_rgba(0,0,0,0.3)]
              p-6 animate-slideUp md:animate-zoomIn">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-green-600/30">
                WA
              </div>
              <div>
                <h3 className="text-lg font-semibold">Chat Admin</h3>
                <p className="text-sm text-gray-600">Online • Balas cepat</p>
              </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 mb-5 text-sm leading-relaxed">
              Silakan klik tombol di bawah ini untuk memulai percakapan via WhatsApp dengan Admin Warnasari.
            </p>

            {/* CTA */}
            <a
              href={`https://wa.me/62882000998523?text=${message}`}
              target="_blank"
              className="block w-full bg-green-600 text-white text-center py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition-all"
            >
              Mulai Chat WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
