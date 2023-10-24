import { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

function ThemeSwitcher() {
    // Initialize the theme from localStorage or based on user preference
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    // Update the HTML element class when the theme changes
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Store the current theme in localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle between light and dark themes
    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="ml-2">
            {theme === 'dark' ? (
                <BsSun className="text-white" onClick={handleChangeTheme} />
            ) : (
                <BsMoon onClick={handleChangeTheme} />
            )}
        </div>
    );
}

export default ThemeSwitcher;
