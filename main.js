
(
    function () {
        const menuToggle = document.querySelector('.main-body');
        const darkToglle = document.querySelector('.toggle-dark');

        darkToglle.addEventListener('click', (e) => {
            e.preventDefault();
            document.documentElement.classList.toggle('dark');
        })
    }
)();