export default class LocalStorage {

    constructor() {
        // this.project = '';
        // localStorage.clear();
    }

    checkIfProjectExists(project) {
        return localStorage.getItem(project.name);
    }

    saveProject(projectToSave) {
        if(this.checkIfProjectExists(projectToSave) == null) {
        localStorage.setItem(projectToSave.name, JSON.stringify(projectToSave));
        }
        else {
            alert('projekt ' + projectToSave.name + ' juz istanieje');
        }
        // this.project = projectToSave;
    }

    // updateProject(projectToUpdate) {
    //     this.project = projectToUpdate;
    // }

    getProject(project) {
        localStorage.getItem(project.name);
    }

    getProjects() {
        let projects = [];
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            let projectTitle = JSON.parse(localStorage.getItem( localStorage.key( i ) ) || {});
            projects.push(projectTitle);
          }
          return projects;
    }

    getTasks(project) {
        let tasks = [];
        let projectData = JSON.parse(localStorage.getItem(project.name));
        // console.log('Project: ', projectData);
        tasks = projectData.tasks;
        // console.log('Tasks: ', tasks);
        return tasks;
    }

    addTask(taskToAdd, project) {
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};
        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }
        projectData.tasks.push(taskToAdd);
        localStorage.setItem(projectData.name, JSON.stringify(projectData));
        console.log(localStorage.getItem(projectData.name));
    }

    updateTasks(tasks, project) {
        // console.log('Tasks to udpate', tasks);
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};
        // console.log(projectData);
        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }
        projectData.tasks = tasks;
        localStorage.setItem(projectData.name, JSON.stringify(projectData));
    }

    removeProject(project) {
        localStorage.removeItem(project.name);
    }


}