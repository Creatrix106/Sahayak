
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            <span className="icon">
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </span>
        </button>
    );
}

export default ThemeToggle;