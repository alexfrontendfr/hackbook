const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA",
        },
        secondary: {
          light: "#EC4899",
          dark: "#F472B6",
        },
        background: {
          light: "#F3F4F6",
          dark: "#111827",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1F2937",
        },
        text: {
          light: {
            primary: "#111827",
            secondary: "#4B5563",
          },
          dark: {
            primary: "#F9FAFB",
            secondary: "#D1D5DB",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
