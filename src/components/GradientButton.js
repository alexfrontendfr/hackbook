import React from "react";
import { Button } from "@nextui-org/react";

const GradientButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className="bg-gradient-to-r from-primary-500 to-secondary-500 text-text-primary font-semibold hover:opacity-90 transition-opacity"
    >
      {children}
    </Button>
  );
};

export default GradientButton;
