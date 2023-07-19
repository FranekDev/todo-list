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

    const projects = document.createElement('div');
    projects.classList.add('projects');

    const projectsDescription = document.createElement('span');
    projectsDescription.textContent = 'Projects';

    projects.appendChild(projectsDescription);

    const projectsList = document.createElement('div');
    projectsList.classList.add('projects_list');

    const mainProject = document.createElement('a');
    mainProject.textContent = 'Main Project';
    
    projectsList.appendChild(mainProject);

    const newProjects = document.createElement('div');
    newProjects.classList.add('new_projects');

    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjects.appendChild(newProjectInput);

    const newProject = document.createElement('button');
    newProject.textContent = 'new';

    
    newProject.addEventListener('click', () => {
        let addedTask = false;
        newProjectInput.style.display = 'block';
        newProject.textContent = 'add';
        if(newProjectInput.value.trim().length > 0) {
            const projectToAdd = document.createElement('a');
            projectToAdd.textContent = newProjectInput.value;
            projectsList.appendChild(projectToAdd);
            newProjectInput.value = '';
            addedTask = true;
        }
        hideAddTask(addedTask);
    });

    const hideAddTask = (addedTask) => {
        if(addedTask) {
            addedTask = false;
            newProject.textContent = 'new';
            newProjectInput.style.display = 'none';
        }
    };
    
    newProjects.appendChild(newProject);

    projects.appendChild(projectsList);
    projects.appendChild(newProjects);

    nav.appendChild(today);
    nav.appendChild(thisWeek);
    nav.appendChild(projects);
    
    sidebar.appendChild(nav);
    sidebar.appendChild(backgorundText);

}

export default Sidebar;