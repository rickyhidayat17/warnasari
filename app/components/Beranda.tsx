"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Beranda() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background dekoratif */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/hero.jpg"
          alt="Pemandangan alam Warnasari Camping & Adventure"
          fill
          className="object-cover"
        />
      </div>

      {/* Konten utama */}
      <motion.div
        className="relative z-10 container mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Selamat Datang di{" "}
          <span className="text-green-600">Warnasari Camping & Adventure</span>
        </h1>
        <p className="text-gray-700 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
          Nikmati pengalaman berkemah, outbound, dan petualangan alam yang seru dan edukatif bersama kami.
        </p>
        <Link
          href="/layanan"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition duration-300"
        >
          Jelajahi Layanan Kami
        </Link>
      </motion.div>
    </section>
  );
}
