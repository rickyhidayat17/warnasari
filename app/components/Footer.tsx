import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* BAGIAN ATAS */}
      <div className="bg-gradient-to-br from-green-700 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-10 text-center md:text-left">
          
          {/* LOGO */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/logo.png"
              alt="Warnasari Camping & Adventure"
              width={130}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Tentang Kami */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base text-white uppercase tracking-wide">
              Tentang Kami
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link href="/tentang/profile" className="hover:text-green-200 transition">Profile Perusahaan</Link></li>
              <li><Link href="/tentang/visi-misi" className="hover:text-green-200 transition">Visi & Misi</Link></li>
              <li><Link href="/tentang/struktur" className="hover:text-green-200 transition">Struktur Organisasi</Link></li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base text-white uppercase tracking-wide">
              Informasi
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link href="/galeri" className="hover:text-green-200 transition">Galeri Kami</Link></li>
              <li><Link href="/kontak" className="hover:text-green-200 transition">Kontak Kami</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base text-white uppercase tracking-wide">
              FAQ
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link href="/faq/terms" className="hover:text-green-200 transition">Terms & Conditions</Link></li>
              <li><Link href="/faq/privacy" className="hover:text-green-200 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Media Sosial */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-sm md:text-base text-white uppercase tracking-wide">
              Media Sosial
            </h4>

            <div className="flex space-x-3 mt-5">
              <a
                href="https://www.facebook.com/nenden.hildafsuziah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-700 hover:bg-gray-200 transition shadow-md"
              >
                <FaFacebookF className="text-[18px]" />
              </a>

              <a
                href="https://www.instagram.com/warnasaricamping_ground"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-700 hover:bg-gray-200 transition shadow-md"
              >
                <FaInstagram className="text-[18px]" />
              </a>

              <a
                href="https://www.tiktok.com/@warnasaricamping_ground"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-700 hover:bg-gray-200 transition shadow-md"
              >
                <FaTiktok className="text-[18px]" />
              </a>

              <a
                href="https://wa.me/62882000998523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-700 hover:bg-gray-200 transition shadow-md"
              >
                <FaWhatsapp className="text-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH */}
      <div className="bg-[#0b1f44] text-center text-xs sm:text-sm py-5 border-t border-white/10">
        © 2025 Warnasari Camping & Adventure. All Rights Reserved.
      </div>
    </footer>
  );
}
