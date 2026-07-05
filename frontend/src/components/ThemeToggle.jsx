import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeContext";
import './ThemeToggle.css'

function ThemeToggle() {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light"
                ? <Moon size={20}/>
                : <Sun size={20}/>
            }
        </button>
    );
};

export default ThemeToggle;