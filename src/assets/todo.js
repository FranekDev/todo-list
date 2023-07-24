import UI from './UI';
import Project from './Project';
import Tasks from './tasks';
import LocalStorage from './localStorage';

const TODO = () => {


    const ui = new UI();
    const storage = new LocalStorage();

    let projectToSave = new Project('Main project');

    if(storage.checkIfProjectExists(projectToSave) == null) {
        projectToSave.addDate = new Date(0);
        storage.saveProject(projectToSave);
    }

    let firstProject = storage.getProjects().sort((p1, p2) => { 
        return new Date(p1.addDate) - new Date(p2.addDate);
    })[0];

    Tasks(firstProject, storage);

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
    
    let allProjects = document.querySelectorAll('.project_name_container');
    
    const mainTasks = document.querySelector('.task_content');

    const changeDateFormatView = () => {
        const dateLinks = document.querySelectorAll('.date_link');
        // projectsList = document.querySelector('.projects_list');
        // const userProjects = document.querySelector('.user_projects');
        
        dateLinks.forEach(dateLink => {
            dateLink.addEventListener('click', () => {
                console.log(dateLink.textContent);
                ui.resetAllProjects();
                ui.resetDateFormats();
                ui.setActiveDateFormat(dateLink);
                mainTasks.textContent = '';
                // userProjects.textContent = '';
                // TODO(dateLink.textContent, storage);
            });
        });
    }
    changeDateFormatView();

    const changeProjectView = () => {
        allProjects = document.querySelectorAll('.project_name_container');

        firstProject = storage.getProjects().sort((p1, p2) => { 
            return new Date(p1.addDate) - new Date(p2.addDate);
        });
        let activeProject = '';
        
        allProjects.forEach((project, index) => {
            let p = project.querySelector('.project');
            p.addEventListener('click', () => {
                ui.resetAllProjects();
                allProjects.forEach(p => ui.resetProject(p));
                ui.resetDateFormats();
                mainTasks.textContent = '';
                ui.setActiveProject(p);
                activeProject = ((firstProject[index] == null) ? firstProject[0] : firstProject[index]);
                Tasks(activeProject, storage);
            });

            let remove = project.querySelector('.x_icon');
            remove.addEventListener('click', () => {

                let projects = storage.getProjects().sort((p1, p2) => { 
                    return new Date(p1.addDate) - new Date(p2.addDate);
                });

                if(activeProject.name != projects[index]) {
                    storage.removeProject(projects[index]);
                    ui.resetAllProjects();
                }
                showProjects();
                changeProjectView();
            });
        });
    };
    // changeProjectView();

    
    const showProjects = () => {
        let localProjects = storage.getProjects();
        
        localProjects.sort((p1, p2) => { 
            return new Date(p1.addDate) - new Date(p2.addDate);
        });

        projectsList.textContent = '';

        // const userProjects = document.createElement('div');
        // userProjects.classList.add('user_projects');

        localProjects.forEach((project, index) => {
            const projectNameContainer = document.createElement('div');
            projectNameContainer.classList.add('project_name_container');

            const projectLink = document.createElement('a');
            projectLink.classList.add('project', 'project_name');

            (index === 0) ? projectLink.classList.add('active_project') : '';

            projectLink.textContent = project.name;
            projectNameContainer.appendChild(projectLink);
            ui.showX(projectNameContainer);
            
            projectsList.appendChild(projectNameContainer);
            // userProjects.appendChild(projectNameContainer);
        });
        // projectsList.appendChild(userProjects);

        allProjects = document.querySelectorAll('.project_name_container');
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

        const projects = document.querySelectorAll('.project_name_container');
        projects.forEach(project => { ui.resetProject(project); });

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

};

export default TODO;