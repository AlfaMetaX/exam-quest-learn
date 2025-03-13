
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  isAuthenticated?: boolean;
  withFooter?: boolean;
}

export default function Layout({ 
  children, 
  isAuthenticated = false,
  withFooter = true,
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="flex-1 pt-20">
        {children}
      </main>
      {withFooter && <Footer />}
    </div>
  );
}
