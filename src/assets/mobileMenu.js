const MobileMenu = () => {
    const body = document.querySelector('body');
    
    const burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burger_menu');

    const topLine = document.createElement('div');
    topLine.classList.add('top_line');

    const middleLine = document.createElement('div');
    middleLine.classList.add('middle_line');

    const bottomLine = document.createElement('div');
    bottomLine.classList.add('bottom_line');


    burgerMenu.appendChild(topLine);
    burgerMenu.appendChild(middleLine);
    burgerMenu.appendChild(bottomLine);
    
    body.appendChild(burgerMenu);

    let showMenu = false;
    burgerMenu.addEventListener('click', () => {
        
        if(!showMenu) {
            topLine.classList.remove('deactivate');
            middleLine.classList.remove('deactivate');
            bottomLine.classList.remove('deactivate');
            topLine.style.position = 'absolute';
            middleLine.style.position = 'absolute';
            bottomLine.style.position = 'absolute';
            topLine.classList.add('active');
            middleLine.classList.add('active');
            bottomLine.classList.add('active');
            showMenu = true;
        }
        else {
            topLine.classList.remove('active');
            middleLine.classList.remove('active');
            bottomLine.classList.remove('active');
            topLine.classList.add('deactivate');
            middleLine.classList.add('deactivate');
            bottomLine.classList.add('deactivate');

            setTimeout(() => {
            topLine.style.position = 'static';
            middleLine.style.position = 'static';
            bottomLine.style.position = 'static';
            }, 400);

            showMenu = false;
        }
    });
};

export default MobileMenu;