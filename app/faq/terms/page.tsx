import Image from "next/image";

export const metadata = {
  title: "Terms & Conditions | Warnasari",
};

export default function Terms() {
  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">

      {/* Hero Section */}
      <div className="relative w-full h-[260px] md:h-[360px] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-xl">
        
        {/* Background Image */}
        <Image
          src="/terms.jpeg"
          alt="Latar belakang pegunungan hijau"
          fill
          priority
          className="object-cover object-center brightness-[0.8] scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-2xl tracking-wide">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm md:text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            Syarat dan Ketentuan Penggunaan Layanan Warnasari Camping & Adventure
          </p>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-5 md:px-12 py-14 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl border border-green-100 space-y-10 leading-relaxed">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              1. Ketentuan Umum
            </h2>
            <p>
              Dengan mengakses situs <strong>Warnasari Camping & Adventure</strong>, Anda setuju
              untuk mematuhi seluruh syarat dan ketentuan yang berlaku. Jika Anda tidak
              menyetujui salah satu bagian dari ketentuan ini, mohon untuk tidak menggunakan
              layanan kami.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              2. Pemesanan dan Pembayaran
            </h2>
            <p>
              Semua pemesanan harus dilakukan melalui saluran resmi kami. Pembayaran yang sudah
              dilakukan tidak dapat dikembalikan kecuali terdapat pembatalan dari pihak
              penyelenggara.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              3. Penggunaan Konten
            </h2>
            <p>
              Semua gambar, logo, dan konten pada situs ini adalah milik
              <strong> Warnasari Camping & Adventure</strong>. Dilarang menggunakan, menyalin,
              atau menyebarkan konten tanpa izin tertulis dari pihak manajemen.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              4. Perubahan Ketentuan
            </h2>
            <p>
              Kami berhak mengubah atau memperbarui ketentuan ini kapan saja tanpa pemberitahuan
              terlebih dahulu. Versi terbaru akan selalu dipublikasikan di situs resmi kami.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
