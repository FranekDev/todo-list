const Sidebar = () => {
    const body = document.querySelector('body');
    const sidebar = document.createElement('aside');
    sidebar.classList.add('sidebar');
    body.appendChild(sidebar);

    const sidebarBackground = document.createElement('div');
    sidebarBackground.classList.add('sidebar_bg');

    const backgorundText = document.createElement('div');
    backgorundText.classList.add('bg_text');
    const textSpan = document.createElement('span');
    textSpan.textContent = 'ToDo';
    backgorundText.appendChild(textSpan);
    
    const nav = document.createElement('nav');
    nav.classList.add('todo_nav');

    const projects = document.createElement('div');
    projects.classList.add('projects');

    nav.appendChild(projects);
    
    sidebarBackground.appendChild(nav);
    sidebarBackground.appendChild(backgorundText);

    sidebar.appendChild(sidebarBackground);

}

export default Sidebar;