"use client";

import { Mail, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Kontak() {
  return (
    <section
      id="kontak"
      className="pt-32 pb-20 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center pb-16 md:pt-10 md:pb-10">
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight text-[#1f2e1f] drop-shadow-sm">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Tertarik camping & adventure di Pangalengan? Hubungi kami untuk konsultasi
            dan pemesanan kegiatan outbound.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mb-16">
          <a
            href="https://wa.me/62882000998523?text=Halo%20Warnasari%20Adventure,%20saya%20tertarik%20untuk%20reservasi."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
          >
            <FaWhatsapp className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
            Chat via WhatsApp
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Column */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-green-200/50 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-green-800 mb-6 text-center">
              Informasi Kontak
            </h3>

            <div className="space-y-4 text-gray-700 text-base">
              <p className="flex items-center gap-3">
                <Mail className="text-green-700 w-5 h-5" />
                <span>info@warnasariadventure.com</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-green-700 w-5 h-5" />
                <span>Pangalengan, Kabupaten Bandung, Jawa Barat</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="text-green-700 w-5 h-5" />
                <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
              </p>
            </div>

            {/* Google Maps */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.702482601121!2d107.56540197499643!3d-7.040796292936597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ebd8b6d7c2c3%3A0xb5f5f7f24cf49b1!2sWarnasari%20Camping%20%26%20Adventure!5e0!3m2!1sid!2sid!4v1731305010000!5m2!1sid!2sid"
                width="100%"
                height="260"
                allowFullScreen
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>

            <div className="mt-5 text-center">
              <a
                href="https://maps.app.goo.gl/KTphLuCwhRbbyEZz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 text-white font-medium px-5 py-2 rounded-full hover:bg-green-800 shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-green-200/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Media Sosial
            </h3>
            <p className="text-gray-600 mb-6 text-center text-base leading-relaxed">
              Ikuti kami di media sosial untuk update terbaru & promo menarik.
            </p>

            <div className="flex justify-center gap-10 text-4xl text-green-700">
              <Link href="https://www.instagram.com/warnasaricamping_ground" target="_blank">
                <FaInstagram className="hover:text-pink-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/nenden.hildafsuziah" target="_blank">
                <FaFacebook className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
              </Link>
              <Link href="https://www.tiktok.com/@warnasaricamping_ground" target="_blank">
                <FaTiktok className="hover:text-black transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
