import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <main className="flex min-h-svh flex-col">
      <Navbar />
      <section className="flex-grow  container p-4">
        <Toaster position="top-center" richColors expand={true} />
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
