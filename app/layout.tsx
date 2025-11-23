import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppPremium from "./components/WhatsAppPremium";

export const metadata = {
  title: "Warnasari Camping & Adventure",
  description: "Petualangan alam modern dan edukatif di Warnasari.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white text-gray-900 antialiased">

        {/* Tambahkan wrapper animasi di sini */}
        <div className="page-animate">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>

        {/* WA sekarang akan *benar-benar fixed* */}
        <WhatsAppPremium />
      </body>
    </html>
  );
}


