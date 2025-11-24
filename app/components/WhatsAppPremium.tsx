"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppPremium() {
  const message = encodeURIComponent(
    "Halo Admin Warnasari Camping & Adventure, saya ingin reservasi/booking layanan."
  );

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  // ===== LOGIC kamu tetap utuh seperti sebelumnya =====
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleScroll = () => {
      if (window.scrollY > 80) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ======================================================

  return (
    <>
      {/* Floating WA Button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={{
          transform: `translateY(${offset}px)`,
          transition: reduceMotion ? "none" : "transform 0ms",
        }}
      >
        <div
  className="
    w-14 h-14 rounded-full flex items-center justify-center
    shadow-xl bg-white
    hover:scale-110 active:scale-95
    transition-all duration-300
  "
  dangerouslySetInnerHTML={{
    __html: `
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 258"
        width="46"
        height="46"
      >
        <path fill="#25D366" d="M128.1 0C57.3 0 0 57.3 0 128.1c0 22.6 6 44.7 17.4 64.2L.2 256l65.5-17.1c18.8 10.3 40.1 15.8 61.9 15.8h.5c70.8 0 128-57.3 128-128.1C256 57.3 198.8 0 128.1 0Zm74.5 182.6c-3.1 8.8-18.2 17-25 18-6.4 1-14.6 1.4-23.8-1.5-5.5-1.7-12.5-4.1-21.7-8.1-38.2-16.4-63-54.4-65-56.9-1.9-2.6-15.5-20.6-15.5-39.3s9.8-27.9 13.3-31.7c3.5-3.9 7.6-4.9 10.2-4.9 2.6 0 5.2.02 7.4.14 2.4.12 5.6-.91 8.8 6.7 3.1 7.6 10.5 26 11.4 27.9.9 1.9 1.5 4.3.3 6.9-1.2 2.6-1.8 4.3-3.5 6.6-1.8 2.2-3.7 4-1.5 7.7 2.2 3.7 9.6 15.9 20.6 25.8 14.1 12.5 25.8 16.5 30 18.3 4.3 1.8 6.7 1.5 9.2-.9 2.6-2.4 11-12.9 14-17.3 2.9-4.3 5.9-3.6 9.8-2.2 4 .14 25.1 11.8 29.4 14 4.3 2.2 7.1 3.3 8.2 5.2 1.1 1.9 1.1 9.9-2 18.7Z"/>
      </svg>
    `,
  }}
/>


      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fade-in">
          <div
            className="
              bg-white rounded-3xl p-7 w-[330px]
              shadow-2xl relative animate-modal-pop
              border border-gray-200
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-4 right-4 text-gray-500 
                hover:text-black transition
              "
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Hubungi Admin
            </h2>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Siap membantu booking atau menjawab pertanyaanmu.
            </p>

            <a
              href={`https://wa.me/62882000998523?text=${message}`}
              target="_blank"
              onClick={() => setOpen(false)}
              className="
                block w-full py-3 rounded-xl text-center font-semibold text-white
                bg-gradient-to-br from-green-500 to-green-600
                shadow-lg hover:shadow-xl 
                active:scale-95 transition-all
              "
            >
              Buka WhatsApp
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in .25s ease-out;
        }

        @keyframes modal-pop {
          from { opacity: 0; transform: scale(.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-pop {
          animation: modal-pop .25s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}
