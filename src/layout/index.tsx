import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ScrollTop from "../components/ScrollTop";
import type { ReactNode } from "react";
import { LayoutConfig } from "./LayoutConfig";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // Chỉ hiển thị Banner cho top
  const shouldShowBanner = location.pathname === '/top';

  return (
    <div className={`h-screen flex flex-col text-light`}>
      <Header />
      <main ref={mainRef} className="flex-1 overflow-y-auto relative">
        {shouldShowBanner && <Banner />}
        <div
          className={`w-full mx-auto`}
          style={{ maxWidth: `${LayoutConfig.contentMaxWidth}px`, backgroundColor: LayoutConfig.contentBg }}
        >
          {children}
        </div>
        <ScrollTop targetElement={mainRef.current} />
      </main>
      <Footer />
    </div>
  );
}
