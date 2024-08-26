import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";

const CustomNavbar = ({ onNavigate }) => {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-background"
      aria-label="Main navigation"
    >
      <NavbarBrand>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-heading font-bold text-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text"
        >
          Hackbook
        </motion.div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {["Home", "Library", "Discover"].map((item) => (
          <NavbarItem key={item}>
            <Link
              color="foreground"
              href="#"
              onClick={() => onNavigate(item.toLowerCase())}
              className="text-text-secondary hover:text-primary-500 transition-colors relative group"
              aria-label={`Navigate to ${item}`}
            >
              {item}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <GradientButton
            auto
            onPress={() => onNavigate("get-started")}
            aria-label="Get Started"
          >
            Get Started
          </GradientButton>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
