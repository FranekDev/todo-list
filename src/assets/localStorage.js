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

        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            let projectTitle = localStorage.getItem( localStorage.key( i ) );
            if(JSON.parse(projectTitle).name != 'Today' && JSON.parse(projectTitle).name != 'This week') {
                projects.push(JSON.parse(projectTitle));
            }
        }

        for(const project of projects) {
            let i = 0;
            for(const task of this.getTasks(project)) {
                let currentTask = task;
                currentTask.project = project.name;
                currentTask.taskID = i;
                if(task.dueDate == todaysDate) {
                    tasks.push(currentTask);
                }
                i++;
            }
        }

        return tasks;
    }

    updateTodayTask(task, id, operation = '') {
        const projectToUpdate = JSON.parse(localStorage.getItem(task.project)) || {};
        console.log(projectToUpdate.tasks, id);

        if(operation == 'delete') {
            projectToUpdate.tasks.splice(id, 1);
        }
        else {
            projectToUpdate.tasks[id] = task;
        }

        localStorage.setItem(projectToUpdate.name, JSON.stringify(projectToUpdate));
    }

    getThisWeekTasks() {
        let tasks = [];
        const date = new Date();
        const month = date.getMonth() + 1;
        const todaysDate = date.getDate() + '/' + (month < 10 ? '0' + month : month) + '/' + date.getFullYear();
        let projects = [];

        for ( let i = 0, len = localStorage.length; i < len; ++i ) {
            let projectTitle = localStorage.getItem( localStorage.key( i ) );
            if(JSON.parse(projectTitle).name != 'Today' && JSON.parse(projectTitle).name != 'This week') {
                projects.push(JSON.parse(projectTitle));
            }
        }

        const checkIfInCurrentWeek = (data) => {
            const today = new Date();
            const firstDayOfWeek = new Date(today);
            firstDayOfWeek.setDate(today.getDate() - today.getDay());

            const lastDayOfWeek = new Date(today);
            lastDayOfWeek.setDate(today.getDate() + (7 - today.getDay()));

            const taskDate = new Date(data.dueDate.split('/').reverse().join('-'));

            return (
                taskDate >= firstDayOfWeek &&
                taskDate <= lastDayOfWeek
            );
        };
        
        for(const project of projects) {
            let i = 0;
            for(const task of this.getTasks(project)) {
                let currentTask = task;
                currentTask.project = project.name;
                currentTask.taskID = i;
                tasks.push(currentTask);
                i++;
            }
        }

        return tasks.filter(checkIfInCurrentWeek).flat();
    }

}