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
        <div className="flex px-[0.75rem] py-2 flex-col cursor-pointer">
            {theme === 'dark' ? (
                <p className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" onClick={handleChangeTheme}>Going Light</p>
            ) : (
                <p className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" onClick={handleChangeTheme}>Going Dark</p>
            )}
        </div>
    );
}

export default ThemeSwitcher;
