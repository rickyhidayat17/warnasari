"use client";

import { Mountain, Tent, Compass } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Tent, title: "Camping Edukatif", desc: "Pengalaman camping seru dengan nilai edukatif dan kebersamaan." },
  { icon: Mountain, title: "Outbound", desc: "Kegiatan outbound untuk tim, sekolah, dan keluarga dengan berbagai permainan menarik." },
  { icon: Compass, title: "Wisata Alam", desc: "Jelajahi keindahan alam dengan pemandu berpengalaman." },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-[#f2eee3]">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-[#2d3a29] mb-14">
          Pilihan Layanan Warnasari Camping & Adventure
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-3xl p-10 shadow-xl border border-[#d8c8a7] bg-[url('/wood-texture.jpg')] bg-cover bg-center bg-no-repeat"
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-gradient-to-br from-green-700 to-green-500 text-white shadow-lg border border-green-900/30">
                <s.icon className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-bold text-[#1e281f] mb-3">
                {s.title}
              </h3>
              <p className="text-[#463f32] leading-relaxed font-medium">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
