(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const mainMenu = document.querySelector('.section__main-menu-mid');
        const mainMenuContent = document.querySelector('.main-menu__content');
        const menuButton = document.querySelector('.hamburger--menu-top');
        
        if(!mainMenu || !mainMenuContent || !menuButton) {
            console.error('Cannot find main menu, main menu content or menu button node');
            return;
        }

        menuButton.addEventListener('click', showMainMenu);

        mainMenu.addEventListener('click', (e) => {
            if(e.target != mainMenu) {
                return;
            }
            hideMainMenu();
        });

        function showMainMenu() {
            mainMenu.classList.add('active');
        }

        function hideMainMenu() {
            mainMenu.classList.remove('active');
        }

    });
})();