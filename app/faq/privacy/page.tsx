import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Warnasari",
};

export default function Privacy() {
  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800">

      {/* Hero Section */}
      <div className="relative w-full h-[260px] md:h-[350px] flex items-center justify-center overflow-hidden rounded-b-3xl shadow-lg">
        <Image
          src="/privacy2.png"
          alt="Latar belakang hutan hijau"
          fill
          className="object-cover scale-105 brightness-[0.75]"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-xl tracking-wide">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm md:text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            Kebijakan Privasi Warnasari Camping & Adventure
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 md:px-12 py-14 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl border border-green-100 space-y-10 leading-relaxed">

          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              1. Pengumpulan Data
            </h2>
            <p>
              Kami mengumpulkan informasi pribadi seperti nama, nomor telepon, dan alamat email
              ketika Anda melakukan pemesanan, mengisi formulir kontak, atau menggunakan layanan
              tertentu di situs kami. Selain itu, data non-pribadi seperti jenis perangkat, browser,
              dan aktivitas halaman dapat dikumpulkan secara otomatis untuk meningkatkan pengalaman
              pengguna.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              2. Penggunaan Data
            </h2>
            <p>
              Informasi yang kami kumpulkan digunakan untuk mengelola pemesanan, menjawab
              pertanyaan, menyediakan layanan, mengirimkan informasi promosi (jika Anda menyetujuinya),
              serta menganalisis performa website guna meningkatkan kualitas layanan. Kami tidak menjual
              atau menyewakan data pribadi kepada pihak mana pun.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              3. Keamanan & Penyimpanan Data
            </h2>
            <p>
              Kami menerapkan standar keamanan yang sesuai untuk menjaga data dari akses tidak sah,
              kehilangan, atau penyalahgunaan. Data pribadi hanya dapat diakses oleh pihak internal
              yang memiliki izin dan kebutuhan operasional.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              4. Cookie & Teknologi Serupa
            </h2>
            <p>
              Situs ini menggunakan cookie untuk mengingat preferensi pengguna, meningkatkan pengalaman
              browsing, dan mengumpulkan data statistik non-pribadi. Anda dapat menonaktifkan cookie
              melalui pengaturan browser, namun beberapa fitur mungkin tidak berfungsi optimal.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              5. Akses, Pembaruan, & Penghapusan Data
            </h2>
            <p>
              Anda memiliki hak untuk meminta salinan data pribadi, memperbarui informasi yang tidak
              akurat, atau meminta penghapusan data dari sistem kami. Permintaan dapat diajukan melalui
              halaman kontak yang tersedia.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              6. Berbagi Data dengan Pihak Ketiga
            </h2>
            <p>
              Kami tidak membagikan data pribadi Anda kepada pihak ketiga kecuali diperlukan untuk
              layanan tertentu (seperti sistem pembayaran), diwajibkan oleh hukum, atau telah Anda
              setujui. Kami memastikan pihak ketiga menjaga privasi sesuai standar yang berlaku.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
              7. Perubahan Kebijakan
            </h2>
            <p>
              Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan penting akan diumumkan melalui
              halaman ini beserta tanggal pembaruannya.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
