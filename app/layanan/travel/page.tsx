export default function TravelPage() {
  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Title & Deskripsi */}
        <div className="text-center pb-24 md:pt-5 md:pb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#2d3a29]">
            Travel & Package Pangalengan
          </h1>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Nikmati pengalaman wisata lengkap di Pangalengan dengan pemandangan alam yang
            mempesona, udara segar, dan aktivitas outdoor yang seru. Paket ini cocok untuk
            keluarga, rombongan, komunitas, hingga corporate gathering.
          </p>
        </div>

        {/* Gambar */}
        <div className="flex justify-center mb-14">
          <img
            src="/nimo.png"
            alt="Travel & Package Pangalengan"
            className="rounded-3xl shadow-xl w-full max-w-[900px] h-[450px] object-cover
                       transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Dua Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* Fasilitas */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-700 mb-5">
              Fasilitas & Destinasi Pangalengan
            </h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Transportasi PP (Hiace/Elf/Bus)</li>
              <li>• Guide lokal berpengalaman</li>
              <li>• Kunjungan ke spot wisata terbaik</li>
              <li>• Dokumentasi foto</li>
              <li>• Air mineral selama perjalanan</li>
              <li>• Tiket masuk wisata lengkap</li>
            </ul>
          </div>

          {/* Price List */}
          <div className="bg-green-700 text-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-5">Harga Travel & Tour</h2>

            <div className="space-y-4 text-lg">
              <p className="flex justify-between">
                <span>Paket 1 — Half Day Tour</span>
                <span className="font-bold">Rp 150.000 / orang</span>
              </p>
              <p className="flex justify-between">
                <span>Paket 2 — Full Day Tour</span>
                <span className="font-bold">Rp 250.000 / orang</span>
              </p>
              <p className="flex justify-between">
                <span>Paket 3 — Premium Tour</span>
                <span className="font-bold">Rp 350.000 / orang</span>
              </p>
            </div>

            <div className="mt-6 p-4 bg-white/25 rounded-xl text-center">
              <p className="text-sm">Harga mulai dari</p>
              <p className="text-3xl font-extrabold">Rp 150.000</p>
            </div>
          </div>
        </div>

        {/* CTA Booking */}
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
