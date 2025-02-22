
import "./globals.css";
import Navbar from "@/app/components/Navbar"
import Navegacion from "./components/Navegacion";
import { Providers } from "./providers";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="fixed w-full z-50">
            <Navbar />
            <Navegacion />
          </div>
          <div className="relative w-full top-28">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
