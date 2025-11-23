"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Ulasan() {
  const reviews = [
    {
      name: "Aulia Rahma",
      review:
        "Pengalaman yang sangat menyenangkan! Tempatnya bersih, pemandangan indah, staff ramah.",
      rating: 5,
    },
    {
      name: "Dimas Pratama",
      review:
        "Camping nyaman, fasilitas lengkap, udara sejuk. Cocok liburan keluarga!",
      rating: 5,
    },
    {
      name: "Siti Nurjanah",
      review:
        "ATV dan flying fox seru banget! Anak-anak suka, aman dan fun!",
      rating: 5,
    },
    {
      name: "Intan",
      review:
        "Service sangat ramah dan harga terjangkau untuk paketan gathering.",
      rating: 5,
    },
    {
      name: "Eko Prasetyo",
      review:
        "Rekomen banget untuk event gathering, harga terjangkau, fasilitas dan pelayanan sangat bagus",
      rating: 5,
    },
  ];

  const duplicated = [...reviews, ...reviews];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#f1ecd8] via-[#fffdf8] to-[#f1ecd8]">
      <div className="container mx-auto max-w-5xl text-center">

        {/* Title Natural */}
        <h2 className="text-4xl font-bold text-[#2d3a29] mb-3">
          Apa Kata Mereka?
        </h2>

        <p className="text-[#6b5a43] mb-10">
          Testimoni asli dari pelanggan yang sudah mencoba jasa wisata Warnasari Camping & Adventure.
        </p>

        {/* Wrapper */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicated.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[300px] md:min-w-[380px]
                  rounded-2xl p-6 shadow-xl relative overflow-hidden
                  border border-[#c9b89c] 
                  bg-[url('/wood-texture.jpg')] bg-cover bg-center
                  before:absolute before:inset-0
                  before:bg-[#f7f3e8]/70
                  before:backdrop-blur-sm
                  before:z-0
                "
              >
                <div className="relative z-10">
                  {/* Nama */}
                  <h3 className="text-xl font-semibold text-[#3b2e1e] mb-1">
                    {item.name}
                  </h3>

                  {/* Rating Bintang */}
                  <div className="flex gap-1 justify-center mb-3">
                    {[...Array(item.rating)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                      >
                        <FaStar className="text-[#f0c250] drop-shadow-md" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-[#5b4a32] text-sm italic leading-relaxed">
                    "{item.review}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
