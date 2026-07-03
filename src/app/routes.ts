import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PracticeInfo from "./pages/PracticeInfo";
import GeneralPractice from "./pages/GeneralPractice";
import SkinCancer from "./pages/SkinCancer";
import Aesthetic from "./pages/Aesthetic";
import Laser from "./pages/Laser";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import BookAppointment from "./pages/BookAppointment";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true,              Component: Home },
      { path: "practice-info",   Component: PracticeInfo },
      { path: "general-practice", Component: GeneralPractice },
      { path: "skin-cancer",     Component: SkinCancer },
      { path: "aesthetic",       Component: Aesthetic },
      { path: "laser",           Component: Laser },
      { path: "store",           Component: Store },
      { path: "store/:slug",     Component: ProductDetail },
      { path: "book",            Component: BookAppointment },
      { path: "blog",            Component: Blog },
      { path: "blog/:slug",      Component: BlogPost },
      { path: "contact",         Component: Contact },
    ],
  },
]);
