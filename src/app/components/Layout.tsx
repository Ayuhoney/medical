import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FirstVisitExperience from "./FirstVisitExperience";
import { ShopProvider } from "@/app/shop/ShopContext";
import { CartDrawer } from "@/app/shop/CartDrawer";
import { AuthModal } from "@/app/shop/AuthModal";
import { api } from "@/app/api";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Anonymous visit beacon for the admin Traffic dashboard
  useEffect(() => {
    api.track(pathname);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToAnchor = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(scrollToAnchor));
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <ShopProvider>
      <div className="min-h-screen flex flex-col bg-background font-sans antialiased overflow-x-clip">
        <FirstVisitExperience />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <AuthModal />
      </div>
    </ShopProvider>
  );
}
