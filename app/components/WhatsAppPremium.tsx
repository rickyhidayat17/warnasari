"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppPremium() {
  const message = encodeURIComponent(
    "Halo Admin Warnasari Camping & Adventure, saya ingin reservasi/booking layanan."
  );

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Inertia offset
  const [offset, setOffset] = useState(0);

  const velocityRef = useRef(0);
  const currentOffsetRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const animatingRef = useRef(false);

  const reduceMotion =
    globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  /** Clamp */
  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  /** ---- LAGOM SMOOTH ENGINE ---- */
  const animate = () => {
    if (reduceMotion) return;

    animatingRef.current = true;

    // Lagom smooth friction (natural, tidak keras)
    const friction = 0.92;

    // update posisi
    currentOffsetRef.current += velocityRef.current;

    // kurangi velocity secara halus
    velocityRef.current *= friction;

    // batasi sedikit saja biar elegan
    currentOffsetRef.current = clamp(currentOffsetRef.current, -10, 10);

    setOffset(currentOffsetRef.current);

    // Stop lebih smooth
    if (Math.abs(velocityRef.current) > 0.08) {
      requestAnimationFrame(animate);
    } else {
      animatingRef.current = false;
      currentOffsetRef.current = 0;
      setOffset(0);
    }
  };

  /** Scroll Listener */
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      const last = lastScrollYRef.current;

      const delta = y - last;
      lastScrollYRef.current = y;

      // Show/hide button
      setVisible(y > 80);

      if (!reduceMotion) {
        // Lagom responsif (tidak kuat)
        velocityRef.current += delta * 0.18;

        if (!animatingRef.current) animate();
      } else {
        setOffset(0);
      }

      ticking = false;
    };

    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [reduceMotion]);

  /** ESC close */
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {/* Floating WA Button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-5 z-50 rounded-full shadow-lg text-white transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={{
          transform: `translateY(${offset}px)`,
          transition: reduceMotion ? "none" : "transform 0ms",
        }}
      >
        <div className="bg-green-600 hover:bg-green-700 w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
          <div className="bg-green-600 hover:bg-green-700 w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="40"
              height="40"
              fill="currentColor"
            >
              <path d="M128 24A104 104 0 0 0 29 167l-13 48a8 8 0 0 0 10 10l48-13A104 104 0 1 0 128 24Zm0 192a88 88 0 0 1-45-12 8 8 0 0 0-5-1l-34 9 9-34a8 8 0 0 0-1-5 88 88 0 1 1 76 43Zm45-61c-6-3-16-8-18-9s-4-1-6 2l-8 10c-2 3-4 3-8 2s-15-6-28-18-17-25-18-29 0-6 2-8l10-8c3-2 3-4 2-6s-6-12-9-18-6-4-8-4h-7c-2 0-6 1-9 4s-12 12-12 28 12 31 14 34 23 36 58 48a95 95 0 0 0 37 7c16 0 25-9 28-13s4-7 4-9v-7c0-2 0-6-4-8Z" />
            </svg>
          </div>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-80 shadow-xl relative animate-modal-pop">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Hubungi Admin</h2>
            <p className="text-gray-600 text-sm mb-6">
              Siap membantu booking atau menjawab pertanyaanmu.
            </p>

            <a
              href={`https://wa.me/62882000998523?text=${message}`}
              target="_blank"
              className="block bg-green-600 text-white py-3 rounded-xl text-center font-medium hover:bg-green-700 transition"
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
