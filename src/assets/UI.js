export default class UI {
    showTask = (tasks, id, status, taskTitle, dueDate) => {
        const task = document.createElement('div');
        task.classList.add('task');
        (status === false) ? task.classList.add('not_finished') : task.classList.add('finished');
        task.setAttribute('data-id', id);
        const title = document.createElement('p');
        title.classList.add('task_title');

        title.textContent = taskTitle;

        const read = document.createElement('input');
        read.type = 'checkbox';

        read.checked = (status === true) ? true : false;

        const mainInfo = document.createElement('div');
        mainInfo.classList.add('info');
        mainInfo.appendChild(read);
        mainInfo.appendChild(title);

        const secondaryInfo = document.createElement('div');
        secondaryInfo.classList.add('info');

        const date = document.createElement('p');
        date.classList.add('date');

        const pickDate = document.createElement('input');
        pickDate.type = 'date';
        pickDate.classList.add('input_date');

        if(dueDate != '') {
            // this.showCalendarIcon(date);
            date.textContent = dueDate;
            pickDate.style.display = 'none';
        }
        // else {
        //     date.textContent = dueDate;
        // }

        // pickDate.style.display = 'none';

        const remove = document.createElement('div');
        remove.classList.add('delete_task');
        // remove.textContent = 'Del';
        this.showTrashIcon(remove);

        date.appendChild(pickDate);
        secondaryInfo.appendChild(date);
        secondaryInfo.appendChild(remove);

        task.appendChild(mainInfo);
        task.appendChild(secondaryInfo);

        tasks.appendChild(task);
        // return task;
    }

    showProject = (projectsArray) => {
        const projectsList = document.querySelector('.projects_list');
        projectsList.textContent = '';
        projectsArray.forEach((project) => {
            const projectLink = document.createElement('a');
            projectLink.classList.add('project');
            projectLink.textContent = project.getName();
            
            projectsList.appendChild(projectLink);
        });
    }

    setActiveProject(project) {
        if(!project.classList.contains('active_project')) {
            project.classList.add('active_project');
        }
        else {
            project.classList.remove('active_project');
        }
    }

    resetProject(project) {
        if(project.classList.contains('active_project')) {
            project.classList.remove('active_project');
        }
    }

    resetAllProjects() {
        const allProjects = document.querySelectorAll('.project');

        allProjects.forEach(project => {
            if(project.classList.contains('active_project')) {
                project.classList.remove('active_project');
            }
        });
    }

    setActiveDateFormat(dateLink) {
        if(!dateLink.classList.contains('active_project')) {
            dateLink.classList.add('active_project');
        }
        else if(dateLink.classList.contains('active_project')) {
            dateLink.classList.remove('active_project');
        }
    }

    resetDateFormats() {
        const dateLinks = document.querySelectorAll('.date_link');
        dateLinks.forEach(dateLink => {
            if(dateLink.classList.contains('active_project')) {
                dateLink.classList.remove('active_project');
            }
        });
    }

    showTrashIcon(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        iconSvg.setAttribute('fill', '#676767');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('stroke', '');
        iconSvg.classList.add('trash_icon');

        iconPath.setAttribute(
            'd',
            'M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z' 
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '0');

        iconSvg.appendChild(iconPath);
        // console.log(iconSvg);

        return node.appendChild(iconSvg);
    }

    showCalendarIcon(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        iconSvg.setAttribute('fill', '#676767');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('stroke', '');
        iconSvg.classList.add('calendar_icon');

        iconPath.setAttribute(
            'd',
            'M12 12h5v5h-5v-5m7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5h14M5 19V9h14v10H5Z' 
        );
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '0');

        iconSvg.appendChild(iconPath);
        // console.log(iconSvg);

        return node.appendChild(iconSvg);
    }

    showX(node) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        iconSvg.setAttribute('fill', '#676767');
        iconSvg.setAttribute('viewBox', '0 0 256 256');
        iconSvg.setAttribute('stroke', '');
        iconSvg.classList.add('x_icon');

        iconPath.setAttribute(
            'd',
            'M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z' 
        );

        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('stroke-width', '0');

        iconSvg.appendChild(iconPath);
        // console.log(iconSvg);

        return node.appendChild(iconSvg);
    }

    formatDate(date) {
        date = date.split('-');
        return date.reverse().join('/');
    }
}