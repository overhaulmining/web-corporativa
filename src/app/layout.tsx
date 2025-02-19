
import "./globals.css";
import Navbar from "@/app/components/Navbar"
import Navegacion from "./components/Navegacion";
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div >
            <Navbar />
            <Navegacion />
          </div>
          <div className="">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
