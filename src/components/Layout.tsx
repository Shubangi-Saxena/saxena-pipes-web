
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed inset-0 z-[-1] opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/deb0cd20-fba6-4a91-ba26-338c87ba2998.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
