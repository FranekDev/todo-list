import UI from './UI';
import Project from './Project';
import Tasks from './tasks';
import Task from './task';

const TODO = () => {

    let ui = new UI();

    let projectsArray = [new Project('Main project')];
    let activeProject = projectsArray[0];
    activeProject.addTask({id: 0, param: new Task('Testowy task', '18/07/2023')});
    Tasks(activeProject);
    const projects = document.querySelector('.projects');

    const newProjects = document.createElement('div');
    newProjects.classList.add('new_projects');

    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjects.appendChild(newProjectInput);

    const newProject = document.createElement('button');
    newProject.textContent = 'new';

    const projectsList = document.createElement('div');
    projectsList.classList.add('projects_list');

    
    let allProjects = document.querySelectorAll('.project');

    const tasksContent = document.querySelector('.main_tasks');
    
    const mainTasks = document.querySelector('.task_content');
    
    const changeProjectView = () => {
        // console.log('Projects: ' + allProjects.length);
        allProjects.forEach((project, index) => {
            project.addEventListener('click', () => {
                // zrobic zeby renderowalo Tasks() z argumentem jako obiekt Projectu
                mainTasks.textContent = '';
                Tasks(projectsArray[index]);
            });
        });
    };
    changeProjectView();

    const showProjects = () => {
        projectsList.textContent = '';
        projectsArray.forEach((project) => {
            const projectLink = document.createElement('a');
            projectLink.classList.add('project');
            projectLink.textContent = project.getName();
            
            projectsList.appendChild(projectLink);
        });
        allProjects = document.querySelectorAll('.project');
    };
    showProjects();


    newProject.addEventListener('click', () => {
        let addedTask = false;
        newProjectInput.style.display = 'block';
        newProject.textContent = 'add';
        if(newProjectInput.value.trim().length > 0) {
            projectsArray.push(new Project(newProjectInput.value));
            newProjectInput.value = '';
            addedTask = true;
        }
        hideAddTask(addedTask);
        showProjects();0
        changeProjectView();
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
 
    changeProjectView();
}

export default TODO;