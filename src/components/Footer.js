import React from "react";
import { Link } from "@nextui-org/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-background text-text">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-accent2 opacity-20"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-heading font-bold mb-2 text-primary">
              Hackbook
            </h3>
            <p className="text-sm text-accent1">
              Your personal growth companion
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-heading font-semibold mb-2 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Library", "Discover"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-accent1 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-heading font-semibold mb-2 text-primary">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-accent1 hover:text-secondary transition-colors"
              >
                <FiGithub size={24} />
              </Link>
              <Link
                href="#"
                className="text-accent1 hover:text-secondary transition-colors"
              >
                <FiLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent2 border-opacity-20 text-center">
          <p className="text-sm text-accent1">
            &copy; {new Date().getFullYear()} Hackbook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
