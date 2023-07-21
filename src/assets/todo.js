import UI from './UI';
import Project from './Project';
import Tasks from './tasks';
import Task from './task';
import LocalStorage from './localStorage';

const TODO = () => {


    const ui = new UI();
    const storage = new LocalStorage();

    let projectToSave = new Project('Main project');
    if(storage.checkIfProjectExists(projectToSave) == null) {
        storage.saveProject(projectToSave);
    }

    let firstProject = storage.getProjects();
    console.log(firstProject);

    Tasks(firstProject[0], storage);
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

    
    const mainTasks = document.querySelector('.task_content');

    const changeDateFormatView = () => {
        const dateLinks = document.querySelectorAll('.date_link');
        
        dateLinks.forEach(dateLink => {
            dateLink.addEventListener('click', () => {
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveDateFormat(dateLink);
            });
        });
    }
    changeDateFormatView();
    const changeProjectView = () => {
        allProjects = document.querySelectorAll('.project');
        firstProject = storage.getProjects();
        let activeProject = '';
        
        allProjects.forEach((project, index) => {
            
            project.addEventListener('click', () => {
                console.log('Project name: ', project.textContent);
                allProjects.forEach(project => ui.resetProject(project));
                ui.resetDateFormats();
                mainTasks.textContent = '';
                ui.setActiveProject(project);
                activeProject = firstProject[index];
                Tasks(activeProject, storage);
            });
        });
    };
    changeProjectView();


    
    const showProjects = () => {
        let localProjects = storage.getProjects();
        projectsList.textContent = '';

        localProjects.forEach((project, index) => {
            const projectLink = document.createElement('a');
            projectLink.classList.add('project', 'project_name');
            (index === 0) ? projectLink.classList.add('active_project') : '';
            projectLink.textContent = project.name;
            
            projectsList.appendChild(projectLink);
        });

        allProjects = document.querySelectorAll('.project');
    };

    showProjects();

    const projectHighlight = () => {
        const projectsToHighlight = document.querySelectorAll('.project_name');
        projectsToHighlight.forEach(project => {
            project.addEventListener('click', () => {
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveProject(project);
            });
        });
    }


 
    newProject.addEventListener('click', () => {

        let addedTask = false;
        newProjectInput.style.display = 'block';
        newProject.textContent = 'add';

        if(newProjectInput.value.trim().length > 0) {
            storage.saveProject(new Project(newProjectInput.value));
            newProjectInput.value = '';
            addedTask = true;
        }

        hideAddTask(addedTask);
        showProjects();
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
    projectHighlight();

}

export default TODO;