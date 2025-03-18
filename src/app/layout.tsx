import "./globals.css";
import Navbar from "@/app/components/Navbar";
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
      <head>
        <title>Mina de Servicios | Ofrecemos soluciones en minería</title>
        <meta
          name="description"
          content="Descubre los servicios especializados que ofrece nuestra mina, con tecnología de punta y compromiso con el medio ambiente."
        />
      </head>
      <body>
        <Providers>
          <div className="fixed w-full z-50">
            <Navbar />
            <Navegacion />
          </div>
          <div className="relative w-full top-28">
            {children}
          </div>
          <div className="relative top-28 w-full bottom-0 z-50">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
