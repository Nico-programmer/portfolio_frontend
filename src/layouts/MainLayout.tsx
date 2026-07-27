import type { ReactNode } from "react"
import Navbar from "../components/layout/Navbar/Navbar";
import ScrollToTop from "../components/UI/ScrollToTop/ScrollToTop";


interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <ScrollToTop />
    </div>
  );
}

export default MainLayout