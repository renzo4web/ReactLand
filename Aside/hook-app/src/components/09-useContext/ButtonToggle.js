import React from "react";
import { useStateApp } from "./UserContext";

const ButtonToggle = () => {
  const [theme, setTheme] = useStateApp();

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      Change theme to {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ButtonToggle;
