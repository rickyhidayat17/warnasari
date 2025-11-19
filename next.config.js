/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // penting untuk static export
  images: {
    unoptimized: true, // agar next/image tetap berfungsi
  },
  trailingSlash: true, // agar semua URL berakhiran /
  distDir: 'out', // hasil export disimpan di /out
  eslint: {
    ignoreDuringBuilds: true, // mencegah error eslint di build Hostinger
  },
};

module.exports = nextConfig;
