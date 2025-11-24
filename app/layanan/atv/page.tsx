export default function ATVPage() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="text-center pb-24 md:pt-5 md:pb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#2d3a29]">
            ATV Adventure Pangalengan
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Jelajahi jalur tanah dan hutan dengan sensasi mengendarai ATV yang menantang! 
            Rasakan kombinasi kecepatan, ketangkasan, dan petualangan alam yang penuh adrenalin — 
            cocok untuk pemula maupun pecinta adventure.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-16">
          <img
            src="/atv.jpg"
            alt="ATV Adventure"
            className="rounded-3xl shadow-xl w-full max-w-[900px] h-[450px] object-cover 
                       transition-all duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {/* Fasilitas Card */}
          <div className="bg-white rounded-3xl shadow-md p-10 border border-green-100 transition hover:shadow-lg">
            <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-green-600 rounded-md"></span>
              Fasilitas & Detail Kegiatan
            </h2>

            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
              <li>• ATV 150cc & 200cc</li>
              <li>• Jalur offroad tanah + hutan</li>
              <li>• Pemandu profesional</li>
              <li>• Peralatan safety lengkap</li>
              <li>• Cocok untuk pemula dan expert</li>
              <li>• Spot foto panorama alam</li>
            </ul>
          </div>

          {/* Harga Card */}
          <div className="bg-green-700 text-white rounded-3xl shadow-lg p-10 relative overflow-hidden">
            <div className="absolute -top-12 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

            <h2 className="text-3xl font-bold mb-6">Harga ATV Adventure</h2>

            <div className="space-y-5 text-lg">
              <p className="flex justify-between border-b border-white/20 pb-2">
                <span>ATV 15 Menit</span>
                <span className="font-bold">Rp 60.000 / orang</span>
              </p>
              <p className="flex justify-between border-b border-white/20 pb-2">
                <span>ATV 30 Menit</span>
                <span className="font-bold">Rp 100.000 / orang</span>
              </p>
              <p className="flex justify-between pb-2">
                <span>ATV Explore 1 Jam</span>
                <span className="font-bold">Rp 170.000 / orang</span>
              </p>
            </div>

            <div className="mt-8 p-5 bg-white/20 rounded-2xl text-center">
              <p className="text-sm">Harga mulai dari</p>
              <p className="text-3xl font-extrabold">Rp 60.000</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/62882000998523"
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
