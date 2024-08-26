import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed top-20 right-4 z-50">
      <Switch
        checked={theme === "dark"}
        size="lg"
        color="secondary"
        startContent={<FiSun className="text-yellow-400" />}
        endContent={<FiMoon className="text-blue-400" />}
        onChange={toggleTheme}
        className="bg-background-light dark:bg-background-dark p-1 rounded-full shadow-lg"
      />
    </div>
  );
};

export default DarkModeToggle;
