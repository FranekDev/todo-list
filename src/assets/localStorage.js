export default class LocalStorage {

    constructor() {
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
    }

    getProject(project) {
        localStorage.getItem(project.name);
    }

    getProjectName(project) {
        return localStorage.getItem(project);
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

        tasks = projectData.tasks;

        return tasks;
    }

    addTask(taskToAdd, project) {
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};

        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }

        projectData.tasks.push(taskToAdd);
        localStorage.setItem(projectData.name, JSON.stringify(projectData));
    }

    updateTasks(tasks, project) {
        // console.log('Tasks:', tasks);
        // console.log('Project:', project);
        let projectData = JSON.parse(localStorage.getItem(project.name)) || {};
        
        if(!projectData.hasOwnProperty('tasks')) {
            projectData.tasks = [];
        }
        projectData.tasks = tasks;

        localStorage.setItem(projectData.name, JSON.stringify(projectData));
    }

    removeProject(project) {
        localStorage.removeItem(project.name);
    }

    getTodayTasks() {
        let tasks = [];
        const date = new Date();
        const month = date.getMonth() + 1;
        const todaysDate = date.getDate() + '/' + (month < 10 ? '0' + month : month) + '/' + date.getFullYear();
        let projects = [];

        // dodac info z jakiego projektu pochodzi task
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            let projectTitle = localStorage.getItem( localStorage.key( i ) );
            if(JSON.parse(projectTitle).name != 'Today' && JSON.parse(projectTitle).name != 'This week') {
                projects.push(JSON.parse(projectTitle));
            }
        }

        for(const project of projects) {
            // console.log(project);
            let i = 0;
            for(const task of this.getTasks(project)) {
                let currentTask = task;
                currentTask.project = project.name;
                currentTask.taskID = i;
                // console.log(currentTask);
                if(task.dueDate == todaysDate) {
                    tasks.push(currentTask);
                }
                i++;
            }
        }

        return tasks;
    }

    updateTodayTask(task, id) {
        // console.log(task, id);
        const projectToUpdate = JSON.parse(localStorage.getItem(task.project)) || {};
        projectToUpdate.tasks[id] = task;
        // console.log('ls', projectToUpdate);
        // console.log('task to update', projectToUpdate.tasks[id]);
        localStorage.setItem(projectToUpdate.name, JSON.stringify(projectToUpdate));
        // this.updateTasks(projectToUpdate.tasks, task.project);
    }

}