export default function RaftingPage() {
  return (
    <section className="pt-28 pb-24 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Title */}
        <div className="text-center pb-24 md:pt-5 md:pb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#2d3a29]">
            Rafting Pangalengan
          </h1>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
            Tantang adrenalinmu dengan arung jeram di Sungai Palayangan! 
            Aktivitas seru yang cocok untuk keluarga, komunitas, dan corporate outing.
          </p>
        </div>

        {/* Image Hero */}
        <div className="flex justify-center mb-16">
          <img
            src="/raftingfoto.jpg"
            alt="Rafting"
            className="rounded-3xl shadow-2xl w-full max-w-[1000px] h-[450px] object-cover 
            transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* 2 Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

          {/* Facilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-200/40 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-green-700 mb-5">Fasilitas & Rute Rafting</h2>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Perahu karet kapasitas 6–8 orang</li>
              <li>• Helm & pelampung standar rescue</li>
              <li>• Guide profesional bersertifikat</li>
              <li>• Rute rafting ± 5–6 km</li>
              <li>• Jeram kelas II – III (aman untuk pemula)</li>
              <li>• Gratis dokumentasi foto & video</li>
            </ul>
          </div>

          {/* Price List */}
          <div className="bg-green-700 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-5">Harga Rafting</h2>

              <div className="space-y-4 text-lg">
                <p className="flex justify-between">
                  <span>Paket Reguler</span>
                  <span className="font-bold">Rp 150.000 / orang</span>
                </p>
                <p className="flex justify-between">
                  <span>Paket Komplit</span>
                  <span className="font-bold">Rp 185.000 / orang</span>
                </p>
                <p className="flex justify-between">
                  <span>Paket Group (min. 10 orang)</span>
                  <span className="font-bold">Rp 140.000 / orang</span>
                </p>
              </div>
            </div>

            <div className="mt-8 p-5 bg-white/20 rounded-xl text-center">
              <p className="text-sm opacity-80">Mulai dari</p>
              <p className="text-4xl font-extrabold tracking-wide">Rp 140.000</p>
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <div className="text-center">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="inline-block px-12 py-4 rounded-2xl text-white font-semibold text-xl 
            shadow-xl bg-green-600 hover:bg-green-700 transition-all hover:scale-110 active:scale-95"
          >
            📩 Booking / Reservasi Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}
