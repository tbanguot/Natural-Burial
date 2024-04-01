        // //Check localStorage
        // let darkOn = false;
        // if (localStorage.getItem('dark')) {
        //     darkOn = localStorage.getItem('dark');
        // }
        // else {
        //     function setTheme(){
        //     //Save to localStorage
        //     localStorage.setItem("dark", darkOn ? true : false);
        //     if(darkOn){
        //         document.body.setAttribute("theme", "dark");
        //         console.log("dark mode on!");
        //     }
        //     else{
        //         document.body.setAttribute("theme", "light");
        //         console.log("light mode on!");
        //     }

        //     setTheme();
        // }
        // }

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