"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa itu Warnasari Camping & Adventure?",
      answer:
        "Warnasari Camping & Adventure adalah tempat wisata alam dan edukasi yang menyediakan berbagai kegiatan outbound, camping, dan petualangan seru di alam terbuka dengan fasilitas modern.",
    },
    {
      question: "Apa saja kegiatan yang tersedia di Warnasari?",
      answer:
        "Kami menyediakan kegiatan seperti arung jeram, flying fox, paintball, fun games, edukasi alam, team building, dan paket camping keluarga atau sekolah.",
    },
    {
      question: "Apakah bisa reservasi untuk rombongan?",
      answer:
        "Tentu! Kami melayani pemesanan untuk rombongan sekolah, kantor, maupun komunitas. Hubungi kami melalui halaman kontak atau WhatsApp untuk informasi lebih lanjut.",
    },
    {
      question: "Di mana lokasi Warnasari Camping & Adventure?",
      answer:
        "Kami berlokasi di kawasan wisata alam yang mudah diakses, dengan pemandangan pegunungan dan udara sejuk. Detail alamat dapat dilihat di halaman Kontak.",
    },
    {
      question: "Apakah ada paket khusus untuk anak-anak?",
      answer:
        "Ya, kami memiliki program edukasi alam dan outbound yang dirancang khusus untuk anak-anak agar belajar sambil berpetualang dengan aman dan menyenangkan.",
    },
  ];

  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">

      {/* HEADER / HERO */}
      <div className="relative w-full h-[260px] md:h-[380px] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-xl">

        <Image
          src="/faq2.png"
          alt="Latar belakang pegunungan hijau"
          fill
          priority
          className="object-cover scale-[1.08] brightness-[0.82]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="mt-3 text-base md:text-lg text-green-100 max-w-2xl mx-auto">
            Temukan jawaban seputar kegiatan & layanan di Warnasari Camping & Adventure
          </p>
        </div>
      </div>

      {/* BAGIAN FAQ */}
      <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-green-900"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-green-600" : "text-green-700"
                  }`}
                />
              </button>

              <div
                className={`px-5 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
