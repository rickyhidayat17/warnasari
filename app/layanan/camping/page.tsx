import Image from "next/image";
import Link from "next/link";

export default function CampingPage() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="text-center pb-24 md:pt-5 md:pb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#2d3a29]">
            Camping Seru di Alam Terbuka
          </h1>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Nikmati suasana alam Pangalengan dengan udara sejuk, bintang malam yang terang,
            dan pemandangan alam yang memukau. Cocok untuk keluarga, komunitas, kantor, 
            hingga kegiatan sekolah.
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-16">
          <Image
            src="/campingfoto.jpeg"
            alt="Camping"
            width={900}
            height={450}
            className="rounded-3xl shadow-xl w-full max-w-[900px] h-[450px] object-cover 
                       transition-all duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {/* Deskripsi */}
          <div className="bg-white rounded-3xl shadow-md p-10 border border-green-100 
                          transition hover:shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-green-600 rounded-md"></span>
              Tentang Paket Camping
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
              <li>• Lokasi camping eksklusif dengan view alam terbaik</li>
              <li>• Tenda dome kapasitas 2–4 orang</li>
              <li>• Matras + Sleeping bag</li>
              <li>• Api unggun malam</li>
              <li>• Free spot foto premium</li>
              <li>• Toilet & fasilitas umum</li>
              <li>• Area aman & nyaman untuk keluarga</li>
            </ul>
          </div>

          {/* Harga */}
          <div className="bg-green-700 text-white rounded-3xl shadow-lg p-10 relative overflow-hidden">
            <div className="absolute -top-12 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

            <h2 className="text-3xl font-bold mb-6">
              Harga Paket Camping
            </h2>

            <div className="space-y-5 text-lg">
              <p className="flex justify-between border-b border-white/20 pb-2">
                <span>Paket Camping Standar</span>
                <span className="font-bold">Rp 85.000 / orang</span>
              </p>
              <p className="flex justify-between border-b border-white/20 pb-2">
                <span>Paket Camping + Api Unggun</span>
                <span className="font-bold">Rp 95.000 / orang</span>
              </p>
              <p className="flex justify-between pb-2">
                <span>Paket Camping Premium (tenda besar)</span>
                <span className="font-bold">Rp 150.000 / orang</span>
              </p>
            </div>

            <div className="mt-8 p-5 bg-white/20 rounded-2xl text-center">
              <p className="text-sm">Harga mulai dari</p>
              <p className="text-3xl font-extrabold">Rp 85.000</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://wa.me/62882000998523"
            className="inline-block px-10 py-4 rounded-2xl text-white font-semibold text-xl 
                       shadow-lg bg-green-600 hover:bg-green-700 transition-all hover:scale-105"
          >
            📩 Booking / Reservasi Sekarang
          </Link>
        </div>

      </div>
    </section>
  );
}
