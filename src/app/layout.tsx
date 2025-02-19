
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
        <Navbar />
        <SubNavbar />
        {children}
      </body>
    </html>
  );
}
