const Header = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const content = document.createElement('div');
    content.classList.add('content');
    const p = document.createElement('p');
    p.textContent = 'Todo List';
    header.appendChild(p);
    content.appendChild(header);
    body.appendChild(content);
}

export default Header;