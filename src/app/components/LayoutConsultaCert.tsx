import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1>Mi Aplicación</h1>
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mi Aplicación</p>
      </footer>
    </div>
  );
}
