const setTheme = document.querySelector('.toggleBtn');

        setTheme.addEventListener('click', () => {
            if (
                localStorage.theme === "dark" || 
                (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
                ) 
            {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }

        });