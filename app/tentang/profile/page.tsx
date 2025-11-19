export const metadata = {
  title: "Profil Perusahaan | Warnasari",
};

export default function ProfilePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#2d3a29]">
        Profile Perusahaan
      </h1>

      {/* Wrapper */}
      <div
        className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-green-100
                   flex flex-col-reverse md:flex-row items-center md:items-start gap-10
                   transition-all duration-300 hover:shadow-xl"
      >
        {/* Paragraf */}
        <div className="text-slate-700 leading-relaxed text-justify flex-1 space-y-4 text-base sm:text-lg">
          <p>
            Warnasari Camping dan Adventure adalah perusahaan yang bergerak di
            bidang penyedia jasa wisata petualangan dengan spesialisasi kegiatan outdoor
            di Pangalengan dan sekitarnya. Kami menawarkan pengalaman liburan yang
            memadukan keindahan alam dengan berbagai aktivitas seru dan menantang.
          </p>

          <p>
            Dengan komitmen untuk memberikan pengalaman tak terlupakan, kami hadir
            untuk memenuhi kebutuhan wisata outdoor seperti camping, glamping, rafting,
            flying fox, ATV, paintball, offroad, dan banyak lagi.
          </p>

          <p>
            Kami telah melayani keluarga, komunitas, hingga perusahaan yang
            membutuhkan kegiatan team building. Fasilitas terbaik dan tim berpengalaman
            menjamin keselamatan serta kenyamanan pelanggan.
          </p>
        </div>

        {/* Gambar */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="/Logo.png"
            alt="Profil Warnasari"
            className="w-40 sm:w-56 md:w-64 rounded-2xl shadow-md object-contain
                       transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
}
