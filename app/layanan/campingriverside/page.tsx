import Image from "next/image";
import Link from "next/link";

export default function CampingRiversidePage() {
  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Title */}
        <div className="text-center pb-24 md:pt-5 md:pb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#2d3a29]">
            Camping Riverside Pangalengan
          </h1>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Nikmati pengalaman menginap mewah bernuansa alam, 
            lengkap dengan fasilitas modern, nyaman, dan private.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-14">
          <img
            src="/cabin.jpg"
            alt="Camping Riverside Pangalengan"
            className="rounded-3xl shadow-xl w-full max-w-[900px] h-[450px] object-cover 
                       transition-all duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* Facilities */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-700 mb-5">
              Fasilitas Camping Riverside
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Kasur empuk + selimut hangat</li>
              <li>• Toilet dalam</li>
              <li>• Pemandangan danau / perkebunan</li>
              <li>• BBQ area</li>
              <li>• Lampu & listrik</li>
              <li>• Sarapan pagi</li>
              <li>• Menyediakan Cabin Villa Cottage Barak</li>
            </ul>
          </div>

          {/* Price */}
          <div className="bg-green-700 text-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-5">Harga Camping Riverside</h2>

            <div className="space-y-4 text-lg">
              <p className="flex justify-between">
                <span>Camping Riverside Standard</span>
                <span className="font-bold">Rp 450.000 / malam</span>
              </p>
              <p className="flex justify-between">
                <span>Camping Riverside Family</span>
                <span className="font-bold">Rp 550.000 / malam</span>
              </p>
              <p className="flex justify-between">
                <span>Cabin Villa Cottage Barak</span>
                <span className="font-bold">Rp 750.000 / malam</span>
              </p>
            </div>

            <div className="mt-6 p-4 bg-white/25 rounded-xl text-center">
              <p className="text-sm">Harga mulai dari</p>
              <p className="text-3xl font-extrabold">Rp 450.000</p>
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <div className="text-center">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="inline-block px-10 py-4 rounded-2xl text-white font-semibold text-xl 
                       shadow-lg bg-green-600 hover:bg-green-700 transition-all hover:scale-105"
          >
            📩 Booking / Reservasi Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}
