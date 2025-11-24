export const metadata = {
  title: "Visi & Misi | Warnasari",
};

export default function VisiMisiPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#2d3a29]">
        Visi & Misi
      </h1>

      <section className="space-y-8 md:space-y-10">
        {/* Card Visi */}
        <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 border border-green-100 transition hover:shadow-xl hover:-translate-y-1 duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700 flex items-center gap-3 mb-4">
            <span className="w-2 h-6 bg-green-600 rounded-md"></span>
            Visi
          </h2>
          <p className="text-slate-700 leading-relaxed text-base md:text-lg">
            Menjadi pilihan utama penyedia layanan wisata petualangan yang
            mengutamakan keselamatan, kenyamanan, dan pengalaman tak
            terlupakan di alam terbuka.
          </p>
        </div>

        {/* Card Misi */}
        <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 border border-green-100 transition hover:shadow-xl hover:-translate-y-1 duration-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700 flex items-center gap-3 mb-4">
            <span className="w-2 h-6 bg-green-600 rounded-md"></span>
            Misi
          </h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-3 leading-relaxed text-base md:text-lg">
            <li>
              Menyediakan berbagai paket wisata outdoor yang lengkap dan
              berkualitas dengan harga yang terjangkau.
            </li>
            <li>
              Memberikan pelayanan terbaik dengan menjaga kualitas fasilitas dan
              perlengkapan untuk setiap aktivitas.
            </li>
            <li>
              Membangun hubungan jangka panjang dengan pelanggan melalui
              kepercayaan dan kepuasan yang tinggi.
            </li>
            <li>
              Berperan aktif dalam pelestarian alam dan lingkungan sekitar.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}