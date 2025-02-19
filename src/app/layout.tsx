
import "./globals.css";
import Navbar from "@/app/components/Navbar"
import SubNavbar from "@/app/components/SubNavbar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed w-screen z-10">
        <Navbar />
        <SubNavbar />
        </div>
        <div className="pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
