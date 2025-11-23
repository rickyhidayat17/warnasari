"use client";

import {
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Desktop states
  const [tentangOpen, setTentangOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);

  // Mobile states
  const [tentangMobile, setTentangMobile] = useState(false);
  const [layananMobile, setLayananMobile] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const tentangRef = useRef<HTMLDivElement>(null);
  const layananRef = useRef<HTMLDivElement>(null);

  // Navbar shrink on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tentangRef.current && !tentangRef.current.contains(e.target as Node)) {
        setTentangOpen(false);
      }
      if (layananRef.current && !layananRef.current.contains(e.target as Node)) {
        setLayananOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close all menus (desktop + mobile)
  const closeAllMenus = () => {
    setOpen(false);

    // Desktop
    setTentangOpen(false);
    setLayananOpen(false);

    // Mobile
    setTentangMobile(false);
    setLayananMobile(false);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 shadow-sm border-b border-slate-200 transition-all",
        scrolled ? "bg-white/95 backdrop-blur" : "bg-white"
      )}
    >
      {/* TOP BAR PREMIUM */}
<div className="bg-[#0b1f44] text-white text-[13px]">
  <div
    className="
      max-w-7xl mx-auto 
      px-4 py-2 
      flex flex-wrap md:flex-nowrap 
      items-center justify-between 
      gap-3
    "
  >
    {/* SOCIAL ICONS */}
    <div className="flex items-center gap-3">
      <Link href="https://www.facebook.com/nenden.hildafsuziah" target="_blank"
        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition">
        <FaFacebook size={14} />
      </Link>

      <Link href="https://www.tiktok.com/@warnasaricamping_ground" target="_blank"
        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition">
        <FaTiktok size={14} />
      </Link>

      <Link href="https://www.instagram.com/warnasaricamping_ground" target="_blank"
        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition">
        <FaInstagram size={14} />
      </Link>
    </div>

    {/* CONTACT INFO */}
    <div className="flex items-center flex-wrap gap-4 text-white/90">

      {/* PHONE */}
      <Link
        href="https://wa.me/62882000998523"
        target="_blank"
        className="flex items-center gap-1 hover:text-white transition"
      >
        <Phone size={14} className="opacity-80" />
        <span className="hidden sm:inline">+62882000998523</span>
      </Link>

      {/* EMAIL */}
      <Link
        href="mailto:warnasari.adventure@gmail.com"
        className="flex items-center gap-1 hover:text-white transition"
      >
        <Mail size={14} className="opacity-80" />
        <span className="hidden sm:inline">Gmail</span>
      </Link>

      {/* WHATSAPP */}
      <Link
        href="https://wa.me/62882000998523?text=Halo%20admin,%20saya%20ingin%20bertanya."
        target="_blank"
        className="flex items-center gap-1 hover:text-white transition"
      >
        <MessageCircle size={14} className="opacity-80" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Link>
    </div>
  </div>
</div>


      {/* MAIN NAV */}
      <div className={clsx("transition-all px-4 md:px-8", scrolled ? "py-2" : "py-3")}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={closeAllMenus}>
            <Image
              src="/logo.png"
              alt="Warnasari Camping & Adventure"
              width={90}
              height={20}
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
              <h1 className="font-semibold text-lg text-gray-900">WARNASARI</h1>
              <p className="text-xs text-slate-600">Camping & Adventure</p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            <Link href="/" className="hover:text-green-600">BERANDA</Link>

            {/* Desktop Dropdown: Tentang Kami */}
            <div className="relative" ref={tentangRef}>
              <button
                onClick={() => {
                  setTentangOpen(!tentangOpen);
                  setLayananOpen(false);
                }}
                className={clsx(
                  "flex items-center gap-1 px-2 py-1 rounded transition-colors",
                  tentangOpen ? "bg-green-100 text-green-700" : "hover:text-green-600"
                )}
              >
                TENTANG KAMI
                <ChevronDown
                  size={16}
                  className={clsx("transition-transform", tentangOpen && "rotate-180")}
                />
              </button>

              {tentangOpen && (
                <div className="absolute bg-white border shadow-md w-48 mt-2 rounded-md py-2 z-50">
                  {[
                    { href: "/tentang/profile", label: "Profile Perusahaan" },
                    { href: "/tentang/visi-misi", label: "Visi & Misi" },
                    { href: "/tentang/struktur", label: "Struktur Perusahaan" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllMenus}
                      className="block px-4 py-2 hover:bg-green-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Dropdown: Layanan */}
            <div className="relative" ref={layananRef}>
              <button
                onClick={() => {
                  setLayananOpen(!layananOpen);
                  setTentangOpen(false);
                }}
                className={clsx(
                  "flex items-center gap-1 px-2 py-1 rounded transition-colors",
                  layananOpen ? "bg-green-100 text-green-700" : "hover:text-green-600"
                )}
              >
                LAYANAN
                <ChevronDown
                  size={16}
                  className={clsx("transition-transform", layananOpen && "rotate-180")}
                />
              </button>

              {layananOpen && (
                <div className="absolute bg-white border shadow-md w-56 mt-2 rounded-md py-2 z-50">
                  {[
                    { href: "/layanan/travel", label: "Travel Package Pangalengan" },
                    { href: "/layanan/camping", label: "Camping" },
                    { href: "/layanan/campingriverside", label: "Camping Riverside" },
                    { href: "/layanan/glamping", label: "Glamping" },
                    { href: "/layanan/rafting", label: "Rafting" },
                    { href: "/layanan/atv", label: "ATV (All-Terrain Vehicle)" },
                    { href: "/layanan/flyingfox", label: "Flying Fox" },
                    { href: "/layanan/paintball", label: "Paintball" },
                    { href: "/layanan/offroad", label: "Offroad" },
                    { href: "/layanan/fungames", label: "Fun Games" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllMenus}
                      className="block px-4 py-2 hover:bg-green-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/galeri" className="hover:text-green-600">GALERI</Link>
            <Link href="/kontak" className="hover:text-green-600">KONTAK</Link>
            <Link href="/faq" className="hover:text-green-600">FAQ</Link>
          </nav>

         {/* MOBILE BUTTON */}
<button
  onClick={() => setOpen(!open)}
  className="md:hidden p-2 rounded-lg border border-slate-300 shadow-sm 
             active:scale-95 transition-all bg-white"
>
  {open ? (
    <span className="text-xl font-bold text-slate-700">×</span>
  ) : (
    <span className="text-xl text-slate-700">☰</span>
  )}
</button>
</div>

       {/* MOBILE NAV */}
<div
  className={clsx(
    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
    open ? "max-h-screen" : "max-h-0"
  )}
>
  <nav className="flex flex-col p-4 gap-3 text-[15px] font-medium">

    <Link
      href="/"
      onClick={closeAllMenus}
      className="py-3 px-3 rounded-xl bg-white shadow-sm border border-slate-200 
                 active:bg-slate-50 transition"
    >
      Beranda
    </Link>

    {/* Mobile Tentang Kami */}
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => setTentangMobile(!tentangMobile)}
        className="w-full flex justify-between items-center py-3 px-4"
      >
        <span>Tentang Kami</span>
        <ChevronDown
          size={18}
          className={clsx(
            "transition-transform",
            tentangMobile && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "flex flex-col overflow-hidden bg-slate-50 transition-all duration-300",
          tentangMobile ? "max-h-96 py-2" : "max-h-0"
        )}
      >
        <Link href="/tentang/profile" onClick={closeAllMenus} className="py-2 px-6 hover:bg-white rounded-lg">Profile Perusahaan</Link>
        <Link href="/tentang/visi-misi" onClick={closeAllMenus} className="py-2 px-6 hover:bg-white rounded-lg">Visi & Misi</Link>
        <Link href="/tentang/struktur" onClick={closeAllMenus} className="py-2 px-6 hover:bg-white rounded-lg">Struktur Perusahaan</Link>
      </div>
    </div>

    {/* Mobile Layanan */}
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => setLayananMobile(!layananMobile)}
        className="w-full flex justify-between items-center py-3 px-4"
      >
        <span>Layanan</span>
        <ChevronDown
          size={18}
          className={clsx(
            "transition-transform",
            layananMobile && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "flex flex-col overflow-hidden bg-slate-50 transition-all duration-300",
          layananMobile ? "max-h-screen py-2" : "max-h-0"
        )}
      >
        {[
          { href: "/layanan/travel", label: "Travel Package Pangalengan" },
          { href: "/layanan/camping", label: "Camping" },
          { href: "/layanan/glamping", label: "Glamping" },
          { href: "/layanan/rafting", label: "Rafting" },
          { href: "/layanan/atv", label: "ATV" },
          { href: "/layanan/flyingfox", label: "Flying Fox" },
          { href: "/layanan/paintball", label: "Paintball" },
          { href: "/layanan/offroad", label: "Offroad" },
          { href: "/layanan/fungames", label: "Fun Games" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeAllMenus}
            className="py-2 px-6 hover:bg-white rounded-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>

    <Link
      href="/galeri"
      onClick={closeAllMenus}
      className="py-3 px-3 rounded-xl bg-white shadow-sm border border-slate-200 
                 active:bg-slate-50 transition"
    >
      Galeri
    </Link>

    <Link
      href="/kontak"
      onClick={closeAllMenus}
      className="py-3 px-3 rounded-xl bg-white shadow-sm border border-slate-200 
                 active:bg-slate-50 transition"
    >
      Kontak
    </Link>

    <Link
      href="/faq"
      onClick={closeAllMenus}
      className="py-3 px-3 rounded-xl bg-white shadow-sm border border-slate-200 
                 active:bg-slate-50 transition"
    >
      FAQ
    </Link>
  </nav>
</div>
    </div>
    </header>
  );
}
