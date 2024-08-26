import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            auto
            icon={<FiArrowUp size={24} />}
            onClick={scrollToTop}
            className="bg-primary text-background rounded-full w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors shadow-lg"
            aria-label="Scroll to top"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
