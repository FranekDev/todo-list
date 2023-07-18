const Sidebar = () => {
    const body = document.querySelector('body');
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    body.appendChild(sidebar);

    const backgorundText = document.createElement('div');
    backgorundText.classList.add('bg_text');
    const textSpan = document.createElement('span');
    textSpan.textContent = 'ToDo';
    backgorundText.appendChild(textSpan);
    
    const nav = document.createElement('nav');
    nav.classList.add('todo_nav');
    
    const today = document.createElement('a');
    const thisWeek = document.createElement('a');
    
    today.textContent = 'Today';
    thisWeek.textContent = 'This week';
    
    nav.appendChild(today);
    nav.appendChild(thisWeek);
    
    sidebar.appendChild(nav);
    sidebar.appendChild(backgorundText);

}

export default Sidebar;