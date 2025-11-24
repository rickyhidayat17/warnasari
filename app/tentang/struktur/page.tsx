import Image from "next/image";

export const metadata = {
  title: "Struktur Organisasi | Warnasari",
};

export default function StrukturOrganisasi() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="w-full md:transform md:scale-100 origin-top transition-all">

        {/* Judul */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[#2d3a29]">
          Struktur Organisasi
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-[#2d3a29]">
          Warnasari Camping & Adventure
        </h1>
        {/* Subjudul */}
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto text-base md:text-lg mb-2">
        Pangalengan, Kabupaten Bandung, Jawa Barat
        </p>
        {/* Hero Image */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative w-full max-w-[900px] px-2 md:px-0">
            <Image
              src="/organigram.png"
              alt="Struktur Organisasi Warnasari"
              width={1000}
              height={700}
              priority
              className="
                rounded-2xl md:rounded-3xl
                shadow-xl md:shadow-2xl
                object-contain
                transition-all
                duration-500
                hover:scale-[1.02]
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]
              "
            />
          </div>
        </div>

      </div>
    </main>
  );
}
