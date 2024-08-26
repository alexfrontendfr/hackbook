import React from "react";

const Typography = ({ variant, children, className, ...props }) => {
  const baseStyles = "text-gray-900 dark:text-gray-100";
  const variantStyles = {
    h1: "text-4xl font-bold mb-4",
    h2: "text-3xl font-semibold mb-3",
    h3: "text-2xl font-semibold mb-2",
    body1: "text-base mb-2",
    body2: "text-sm",
  };

  const Element = variant.startsWith("h") ? variant : "p";

  return (
    <Element
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Typography;
