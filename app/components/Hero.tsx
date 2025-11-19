"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "/campingfoto.jpeg",
      title: "Warnasari Camping & Adventure",
      description:
        "Nikmati pengalaman camping, outbound, dan petualangan alam yang tak terlupakan.",
    },
    {
      id: 2,
      image: "/landing2.png",
      title: "Petualangan Alam yang Menginspirasi",
      description:
        "Rasakan udara segar dan keindahan alam di setiap langkah perjalananmu.",
    },
    {
      id: 3,
      image: "/landing3.png",
      title: "Serunya Outbound Bersama Teman",
      description:
        "Bangun kekompakan dan semangat tim melalui berbagai aktivitas seru.",
    },
  ];

  return (
    <section id="hero" className="relative h-screen max-h-[90vh] overflow-hidden">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1200}
        parallax={true}
        effect="fade"
        loop
        className="h-full"
      >
        {/* Parallax container */}
        <div slot="container-start" data-swiper-parallax="-20%" className="absolute inset-0">
        </div>

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen max-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">

              {/* Background Parallax Image */}
              <div
                className="absolute inset-0"
                data-swiper-parallax="-30%"
                data-swiper-parallax-scale="1.15"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover object-center"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                data-swiper-parallax="-100"
                className="relative z-10 text-white max-w-2xl mx-auto px-4"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-xl leading-[1.2]">
                  {slide.title}
                </h1>

                <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  {slide.description}
                </p>

                <motion.a
                  href="/galeri"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-6 bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold text-base hover:bg-green-700 transition-colors shadow-lg"
                >
                  Jelajahi Sekarang
                </motion.a>
              </motion.div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
