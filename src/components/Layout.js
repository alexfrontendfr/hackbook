import React from "react";
import { motion } from "framer-motion";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const Layout = ({ children, onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-background to-surface flex flex-col"
    >
      <CustomNavbar onNavigate={onNavigate} />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-8 lg:px-16">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
