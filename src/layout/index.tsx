import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";
import { LayoutConfig } from "./LayoutConfig";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col text-light`}>
      <Header />
      <main className="flex-1">
        <div
          className={`w-full mx-auto px-4`}
          style={{ maxWidth: `${LayoutConfig.contentMaxWidth}px`, backgroundColor: LayoutConfig.contentBg }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}


