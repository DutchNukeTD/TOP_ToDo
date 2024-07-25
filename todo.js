

const Project = (function() {
    
    // Private variables
    let projects = ['Default'];
    let projectDescription = [''];
    let projectDate = [''];
    let projectPrio = ['low'];
    let currentProject = 'Default';
    let projectsTodoList = [[""]];
    let projectsTodoListChecked = [[""]];
    let projectsTodoListDisable = [[""]];
    let projectsTodoListPrio = [["low"]];
    // Public methods (getters and setters)
    return {
        getAll: function() {
            return [projects, projectDescription, projectDate, projectPrio, currentProject, projectsTodoList, projectsTodoListChecked, projectsTodoListDisable, projectsTodoListPrio];
        },
        getProject: function(item) {
            return projects[item];
        },
        getProjects: function() {
            return projects;
        },
        setProject: function(item, newProjects) {
            projects[item] = newProjects;
        },
        setProjects: function(localProjects) {
            projects = localProjects;
        },
        removeProject: function(itemIndex){
            projects.splice(itemIndex, 1);
            return projects;
        },
        getProjectDescription: function(project) {
            if (projectDescription[project] == undefined) {
                return '';
            } else {
                return projectDescription[project];
            }
        },
        setProjectDescriptionAll: function(LocalDescription) {
            projectDescription = LocalDescription;
        },
        setProjectDescription: function(item, newDescription) {
            projectDescription[item] = newDescription;
        },
        removeProjectDescription: function(itemIndex){
            projectDescription.splice(itemIndex, 1);
            return projectDescription;
        },
        getProjectsDates: function() {
            return projectDate;
        },
        getProjectDate: function(project) {
            return projectDate[project];
        },
        setProjectDateAll: function(localDate) {
            projectDate = localDate;
        },
        setProjectDate: function(item, newDate) {
            projectDate[item] = newDate;
        },
        removeProjectDate: function(itemIndex){
            projectDate.splice(itemIndex, 1);
            return projectDate;
        },
        getProjectPrio: function(item) {
            return projectPrio[item];
        },
        getProjectPrioAll: function() {
            return projectPrio;
        },
        setProjectPrio: function(item, newPrio) {
            projectPrio[item] = newPrio;
        },
        setProjectPrioAll: function(localProjects) {
            projectPrio = localProjects;
        },
        removeProjectPrio: function(itemIndex){
            projectPrio.splice(itemIndex, 1);
            return projectPrio;
        },
        getCurrentProject: function() {
            return currentProject;
        },
        setCurrentProject: function(newCurrentProject) {
            currentProject = newCurrentProject;
        },
        getProjectsTodoListAll: function() {
            return projectsTodoList;
        },
        getProjectsTodoListProject: function(project) {
            return projectsTodoList[project];
        },
        getProjectsTodoListItem: function(index, item) {
            return projectsTodoList[index][item];    
        },
        addProjectsTodoList: function(item, newTodoList) {
            projectsTodoList.push([""]);
        },
        setProjectsTodos: function(localTodos) {
            projectsTodoList = localTodos;
        },
        setProjectsTodoList: function(project, newTodoList='') {
            projectsTodoList[project] = newTodoList;
        },
        setProjectsTodoListItem: function(index, item, value='') {
            projectsTodoList[index][item] = value;
        },
        removeProjectsTodoListProject: function(project){
            projectsTodoList.splice(project, 1);
            return projectsTodoList;
        },
        removeProjectsTodoListItem: function(project, itemIndex){
            projectsTodoList[project].splice(itemIndex, 1);
            return projectsTodoList;
        },
        getProjectsTodoListChecked: function() {
            return projectsTodoListChecked; 
        },
        getProjectsTodoListCheckedItem: function(project, item) {
            if (projectsTodoListChecked[project][item] == undefined){
                return false;
            } else if (projectsTodoListChecked[project][item] == ''){
                return false;
            } else{
                return projectsTodoListChecked[project][item];
            }
        },
        setProjectsTodoChecks: function(localChecks) {
            projectsTodoListChecked = localChecks;
        },
        setProjectsTodoListCheckedItem: function(project, item, newTodoListChecked) {
            projectsTodoListChecked[project][item] = newTodoListChecked;
        },
        addProjectsTodoListChecked: function() {
            projectsTodoListChecked.push([false]);
        },
        removeProjectsTodoListCheckedProject: function(project){
            projectsTodoListChecked.splice(project, 1);
            return projectsTodoListChecked;
        },
        removeProjectsTodoListCheckedItem: function(project, itemIndex){
            projectsTodoListChecked[project].splice(itemIndex, 1);
            return projectsTodoListChecked;
        },
        getProjectsTodoListDisable: function() {
            return projectsTodoListDisable;
        },
        getProjectsTodoListDisableItem: function(project, item) {
            if (projectsTodoListDisable[project]  && projectsTodoListDisable[project][item] !== undefined) {
                return projectsTodoListDisable[project][item];
            } else {
                return false;
            }
        },
        setProjectsTodoDisables: function(localDisable) {
            projectsTodoListDisable = localDisable;
        },
        setProjectsTodoListDisableItem: function(project, item='None', newTodoListDisable) {
            if (!projectsTodoListDisable[project]) {
                projectsTodoListDisable[project] = [];
            }
            if (item == 'None'){
                projectsTodoListDisable[project] = [newTodoListDisable];
            } else {
                projectsTodoListDisable[project][item] = newTodoListDisable;
            }
        },
        addProjectsTodoListDisableItem: function(){
            projectsTodoListDisable.push([false]);
        },
        removeProjectsTodoListDisableProject: function(project){
            projectsTodoListDisable.splice(project, 1);
            return projectsTodoListDisable;
        },
        removeProjectsTodoListDisableItem: function(project, itemIndex){
            projectsTodoListDisable[project].splice(itemIndex, 1);
            return projectsTodoListDisable;
        },
        getProjectsTodoListPrio: function() {
            return projectsTodoListPrio;
        },
        getProjectsTodoListPrioItem: function(project, index) {
            return projectsTodoListPrio[project][index];
        },
        setProjectsTodoPrios: function(localPrios) {
            projectsTodoListPrio = localPrios;
        },
        setProjectsTodoListPrioItem: function(project, item='None', newTodoListPrio) {
            if (item == 'None'){
                projectsTodoListPrio[project] = newTodoListPrio;
            } else {
                projectsTodoListPrio[project][item] = newTodoListPrio;
            }
        },
        addProjectsTodoListPrioItem: function(){
            projectsTodoListPrio.push(["low"]);
        },
        removeProjectsTodoListPrioProject: function(itemIndex){
            projectsTodoListPrio.splice(itemIndex, 1);
            return projectsTodoListPrio;
        },
        removeProjectsTodoListPrioItem: function(project, itemIndex){
            projectsTodoListPrio[project].splice(itemIndex, 1);
            return projectsTodoListPrio;
        },
        

    addProject: function(title) {
        // Project.projects.push(title);
        newProjectIndex = Project.getProjects().length;
        itemIndex = 0;
        Project.setProject(newProjectIndex, title);
        // Project.projectDescription.push('');
        Project.setProjectDescription(newProjectIndex, '');
        // Project.projectDate.push('');
        Project.setProjectDate(newProjectIndex, '');
        // Project.projectPrio.push('low');
        Project.setProjectPrio(newProjectIndex, 'low');
        // Project.projectsTodoList.push([""]),
        Project.addProjectsTodoList(newProjectIndex, [""]);
        // Project.projectsTodoListChecked.push([""]),
        Project.addProjectsTodoListChecked();
        // Project.projectsTodoListDisable.push([""]),
        Project.addProjectsTodoListDisableItem();
        // Project.projectsTodoListPrio.push(["low"]),
        Project.addProjectsTodoListPrioItem();
        addProjectHTML(Project.getProjects());
        return title;
    },
    deleteProject: function(itemIndex){
        itemParent = project.closest('.ContainerBtnProject'); 
        itemProject = itemParent.querySelector('.CreatedProject');
        itemName = itemProject.innerHTML;
        itemIndex = getClassnameProjectIndex(project);

        Project.removeProject(itemIndex);
        Project.removeProjectDescription(itemIndex);
        Project.removeProjectDate(itemIndex);
        Project.removeProjectPrio(itemIndex);
        Project.removeProjectsTodoListProject(itemIndex);
        Project.removeProjectsTodoListCheckedProject(itemIndex);
        Project.removeProjectsTodoListDisableProject(itemIndex);
        Project.removeProjectsTodoListPrioProject(itemIndex);
    }
    }
})();

// ####################################################################################################################
// ####################################################################################################################
// ####################################################################################################################
// ####################################################################################################################
  
function getProjectIndex() {
    projectIndex = Project.getProjects().indexOf(Project.getCurrentProject());
    return projectIndex;
}
  
function addProjectTodo(projectsTodoList, btnCreateTodo) {
    projectIndex = Number(btnCreateTodo.split('_')[1]);
    projectTodoListLenght = Project.getProjectsTodoListProject(projectIndex).length;
    // If array index doesn't exist yet create new one. 
    if (Project.getProjectsTodoListProject(projectIndex) === undefined) {
        Project.addProjectsTodoList(projectIndex, [""]);
        Project.addProjectsTodoListChecked(projectIndex, [false]);
        Project.setProjectsTodoListDisableItem(projectIndex, projectTodoListLenght, [false]);
        Project.addProjectsTodoListPrioItem();
    }
    else {
        Project.setProjectsTodoListItem(projectIndex, projectTodoListLenght, ""); // text value
        Project.setProjectsTodoListCheckedItem(projectIndex, projectTodoListLenght, false); // checked value
        Project.setProjectsTodoListDisableItem(projectIndex, projectTodoListLenght, false); // checked value
        Project.setProjectsTodoListPrioItem(projectIndex, projectTodoListLenght, "low"); // checked value
    }
};
  
function deleteProjects() {
    const projectCards = document.querySelectorAll('.ProjectCard');
    projectCards.forEach((item) => {
        item.remove();
    })
}
  
function createProjectHTML() {
    const projectsArea = document.querySelector('.ProjectsArea');
    projectIndex = getProjectIndex();
    projectIndexString = projectIndex.toString().padStart(2, '0');
  
    let projectCard = document.createElement('div');
    projectCard.className = 'ProjectCard' + " _" + projectIndexString;
    let projectTitle = document.createElement('div');
    projectTitle.className = 'ProjectTitle';
    let projectTitleText = document.createElement('input');
    projectTitleText.className = 'ProjectTitleText' + ' ' + '_' + projectIndexString; // ProjectTitleText _01
    projectTitleText.value = "test"; // Hier moet nieuwe project title komen. 
  
    projectsArea.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectTitle.appendChild(projectTitleText);
  
    let projectDescription = document.createElement('div');
    projectDescription.className = 'ProjectDescription';
    let discription = document.createElement('div');
    discription.innerHTML = '<strong>Description</strong>';
    let discriptionText = document.createElement('textarea');
    discriptionText.name = 'DescriptionText';
    discriptionText.className = 'DescriptionText' + ' ' + '_' + projectIndexString; // DescriptionText _01
    discriptionText.rows = '8';
    discriptionText.cols = '65';
  
    projectCard.appendChild(projectDescription);
    projectDescription.appendChild(discription);
    projectDescription.appendChild(discriptionText);
  
    let projectInfo = document.createElement('div');
    projectInfo.className = 'ProjectInfo';
    let projectDueDate = document.createElement('div');
    projectDueDate.className = 'ProjectDueDate';
    let dueDateText = document.createElement('div');
    dueDateText.innerHTML = 'Due date: ';
    let dueDateDiv = document.createElement('div');
    let dueDateDate = document.createElement('input');
    dueDateDate.type = 'date';
    dueDateDate.className = 'Date' + ' ' + '_' + projectIndexString; // Date _01
  
    projectCard.appendChild(projectInfo);
    projectInfo.appendChild(projectDueDate);
    projectDueDate.appendChild(dueDateText);
    projectDueDate.appendChild(dueDateDiv);
    dueDateDiv.appendChild(dueDateDate);
  
    let projectPriority = document.createElement('div');
    projectPriority.className = 'ProjectPriority';
    let priorityText = document.createElement('div');
    priorityText.innerHTML = 'Priority: ';
    let prioritySelect = document.createElement('select');
    prioritySelect.className = 'PriorityValue' + ' ' + '_' + projectIndexString; // PriorityValue _01;
    let projectSelectOptionLow = document.createElement('option');
    projectSelectOptionLow.value = "low";
    projectSelectOptionLow.innerHTML = "low";
    let projectSelectOptionMid = document.createElement('option');
    projectSelectOptionMid.value = "mid";
    projectSelectOptionMid.innerHTML = "mid";
    let projectSelectOptionhigh = document.createElement('option');
    projectSelectOptionhigh.value = "high";
    projectSelectOptionhigh.innerHTML = "high";
  
    projectInfo.appendChild(projectPriority);
    projectPriority.appendChild(priorityText);
    projectPriority.appendChild(prioritySelect);
    prioritySelect.appendChild(projectSelectOptionLow);
    prioritySelect.appendChild(projectSelectOptionMid);
    prioritySelect.appendChild(projectSelectOptionhigh);
  
    let projectToDos = document.createElement('div');
    projectToDos.className = 'ToDos' + " _" +  projectIndexString;
    let projectTodoContainer = document.createElement('div');
    projectTodoContainer.className = 'TodoContainer' + ' _' + projectIndexString;
  
    projectCard.appendChild(projectToDos);
    projectToDos.appendChild(projectTodoContainer);
  
    let projectTodoAdd = document.createElement('div');
    projectTodoAdd.className = 'TodoAdd';
    let btnCreateTodo = document.createElement('button');
    btnCreateTodo.className = 'BtnCreateTodo' + ' _' + projectIndexString;    ;
    btnCreateTodo.innerHTML = '+';
  
    projectToDos.appendChild(projectTodoAdd);
    projectTodoAdd.appendChild(btnCreateTodo);
  
}
  
// Add new project HTML --> sideBar
function addProjectHTML(projects) {
  
    const projectTitles = document.querySelector('.ContainerProjects');
  
    // Remove all titles
    while (projectTitles.hasChildNodes()) {
        projectTitles.removeChild(projectTitles.firstChild);
    }
    // Add all titles 
    for (let i = 0; i < Project.getProjects().length; i++) {
        projectIndexString = i.toString().padStart(2, '0');
        let projectTitleSideBar = document.createElement('div');
        projectTitleSideBar.className = 'ContainerBtnProject ContainerCreatedProject' + ' _' + projectIndexString;
        let projectTitleBtn = document.createElement('button');
        projectTitleBtn.className = "BtnProject" + " " + "CreatedProject" + " _" + projectIndexString;
        projectTitleBtn.innerHTML = Project.getProject(i);
        let projectDeleteBtn = document.createElement('button')
        projectDeleteBtn.className = "BtnDeleteProject" + " _" + projectIndexString;
        projectDeleteBtn.innerHTML = 'X';
  
        projectTitles.appendChild(projectTitleSideBar);
        projectTitleSideBar.appendChild(projectTitleBtn);
        projectTitleSideBar.appendChild(projectDeleteBtn);
  
    }
};
  
// Add extra row Todo Item HTML
// Needs to know what project it's on. --> need to create project todos array. 
// function addProjectTodoItemHTML(projects, projectsTodoList, todoCounter=Project.projectsTodoList[projectIndex].length-1, index="none") {
function addProjectTodoItemHTML(projects, projectsTodoList, index = "none", todoCounter = Project.getProjectsTodoListProject(projectIndex).length-1) {
  
    if (index == "none"){
        projectIndex = getProjectIndex();
    } else {
        projectIndex = Number(index.split('_')[1]);
    }
  
    projectIndexString = projectIndex.toString().padStart(2, '0');
    let projectTodo = document.querySelector('.ToDos._' + projectIndexString);
    
    let todoContainerClassName = '.TodoContainer._'+ projectIndexString;
    let todoContainer = document.querySelector(todoContainerClassName);
    
    let todoCheckboxRow = document.createElement('div');
    todoCounterString = todoCounter.toString().padStart(3, '0');
    todoCheckboxRow.className = "TodoCheckbox" + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .TodoCheckbox ._00 ._001
    let todoInputCheckbox = document.createElement('input');
    todoInputCheckbox.type = "checkbox";
    todoInputCheckbox.className = "Checkbox" + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .Checkbox ._00 ._001
    let todoInputText = document.createElement('input');
    todoInputText.type = "text";
    todoInputText.size = "45";
    todoInputText.className = "TodoCheckboxText" + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .TodoCheckboxText ._00 ._001
    let todoPriority = document.createElement('div');
    todoPriority.innerHTML = "priority: ";
    let todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.className = 'TodoPriorityValue' + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .PriorityValue ._00 ._001;
    let todoSelectOptionLow = document.createElement('option');
    todoSelectOptionLow.value = "low";
    todoSelectOptionLow.innerHTML = "low";
    let todoSelectOptionMid = document.createElement('option');
    todoSelectOptionMid.value = "mid";
    todoSelectOptionMid.innerHTML = "mid";
    let todoSelectOptionhigh = document.createElement('option');
    todoSelectOptionhigh.value = "high";
    todoSelectOptionhigh.innerHTML = "high";
    let todoDelete = document.createElement('button');
    todoDelete.innerHTML = 'X';
    todoDelete.className = "BtnTodoDelete" + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .BtnTodoDelete ._00 ._001
  
  
    // projectTodo.appendChild(todoContainer);
    todoContainer.appendChild(todoCheckboxRow);
    todoCheckboxRow.appendChild(todoInputCheckbox);
    todoCheckboxRow.appendChild(todoInputText);
    todoCheckboxRow.appendChild(todoPriority);
    todoPrioritySelect.appendChild(todoSelectOptionLow);
    todoPrioritySelect.appendChild(todoSelectOptionMid);
    todoPrioritySelect.appendChild(todoSelectOptionhigh);
    todoCheckboxRow.appendChild(todoPrioritySelect);
    todoCheckboxRow.appendChild(todoDelete);
  
};
  
function resetTodoCount() {
    
    let allTodoRows = document.querySelectorAll('.TodoCheckbox'); // _' + projectIndex
    let allTodoText = document.querySelectorAll('.TodoCheckboxText');
    let allTodoCheckbox = document.querySelectorAll('.Checkbox');
    let allTodoPrio = document.querySelectorAll('.TodoPriorityValue');
    let allTodoDelete = document.querySelectorAll('.BtnTodoDelete');
  
    for (let p = 0; p < Project.getProjects().length; p++) {
        try {
            index = allTodoRows[p].className.split('_')[1]; // 00 
            for (let i = 0; i < Project.getProjectsTodoListProject(p).length; i++) {
                if (p == index) {
                    // allTodosRows
                    splitRow = allTodoRows[i].className.split('_'); // split TodoRow name --> Must 
                    splitRow[1] = index.toString().padStart(2, '0'); //_00
                    splitRow[2] = i.toString().padStart(3, '0'); //_000
                    allTodoRows[i].className = splitRow[0] + "_" + splitRow[1] + ' _' + splitRow[2];  // ._00._000 //
                    // allTodoText
                    splitText = allTodoText[i].className.split('_'); // split TodoText name --> Must 
                    splitText[1] = index.toString().padStart(2, '0'); //_00
                    splitText[2] = i.toString().padStart(3, '0'); //_000
                    allTodoText[i].className = splitText[0] + "_" + splitText[1] + ' _' + splitText[2];  // ._00._000
                    // allTodoCheckbox
                    splitCheckbox = allTodoCheckbox[i].className.split('_'); // split TodoCheckbox name --> Must 
                    splitCheckbox[1] = index.toString().padStart(2, '0'); //_00
                    splitCheckbox[2] = i.toString().padStart(3, '0'); //_000 
                    allTodoCheckbox[i].className = splitCheckbox[0] + "_" + splitCheckbox[1] + ' _' + splitCheckbox[2];  // ._00._000
                    // allTodoPrio
                    splitPrio = allTodoPrio[i].className.split('_'); // split TodoCheckbox name --> Must 
                    splitPrio[2] = index.toString().padStart(2, '0'); //_00
                    splitPrio[3] = i.toString().padStart(3, '0'); //_000
                    allTodoPrio[i].className = splitPrio[0] + " " + splitPrio[2] + " " + "_" + splitPrio[2] + ' _' + splitPrio[3];  //PriorityValue TodoPriorityValue _00 _000
                    // allTodo
                    splitDelete = allTodoDelete[i].className.split('_'); // split TodoCheckbox name --> Must 
                    splitDelete[1] = index.toString().padStart(2, '0'); //_00
                    splitDelete[2] = i.toString().padStart(3, '0'); //_000
                    allTodoDelete[i].className = splitDelete[0] + "_" + splitDelete[1] + ' _' + splitDelete[2];  // ._00._000
                }
            }
        }
        catch (err) {
            console.log('last one of list was deleted! - do nothing');
        }
    }
};
  
function getClassnameProjectIndex(todoItem) {
    projectIndex = todoItem.className.split('_')[1];
    return Number(projectIndex);
}
  
function getClassnameCountIndex(todoItem) {
    countIndex = todoItem.className.split('_');
    countIndex = countIndex[countIndex.length - 1];
    return Number(countIndex);
}
  
  
function createProjectTodos() {
    index = getProjectIndex();
    for (let i = 0; i < Project.getProjectsTodoListProject(index).length; i++) {
        addProjectTodoItemHTML(Project.getProjects(), Project.getProjectsTodoListAll(), "none", i); // ,i) --> needed but gives error, because it's on 3th place.
    }
};
  
function setTodoValues() {
    index = getProjectIndex();
    projectIndex = '_' + index.toString().padStart(2, '0'); //_00
  
    let todoCount = Project.getProjectsTodoListProject(index).length;
    for (let i = 0; i < todoCount; i++) {
        iString = '._' + i.toString().padStart(3, '0'); //_000
        let vclassName = '.TodoCheckboxText' + '.' + projectIndex + iString;
        let todoText = document.querySelector(vclassName);
        // text input
        todoText.value = Project.getProjectsTodoListItem(index, i);
        // checkbox
        todoText.disabled = Project.getProjectsTodoListDisableItem(index, i);
        let vCheckbox = '.Checkbox' + '.' + projectIndex + iString;
        let checkboxChecked = document.querySelector(vCheckbox);
        checkboxChecked.checked = Project.getProjectsTodoListCheckedItem(index, i);
        // Prio
        let vPrio = '.TodoPriorityValue' + '.' + projectIndex + iString;
        let prioItem = document.querySelector(vPrio);
        prioItem.value = Project.getProjectsTodoListPrioItem(index, i);
        switch (Project.getProjectsTodoListPrioItem(index, i)) {
            case 'low':
                prioItem.style.backgroundColor = '#f3f363'; // yellow
                break;
            case 'mid':
                prioItem.style.backgroundColor = '#f3be63'; // orange
                break;
            case 'high':
                prioItem.style.backgroundColor = '#f93434'; // red
                break;
            default:
                prioItem.style.backgroundColor = '#f3f363';
        }
    }
    // localStorage.setItem('projectObj', JSON.stringify(Project.getAll())); 
};
  
function resetSideBarProjects() {
    let allDivCreatedProjects = document.querySelectorAll('.ContainerCreatedProject');
    let allCreatedProjects = document.querySelectorAll('.CreatedProject');
    let allCreatedDelete = document.querySelectorAll('.BtnDeleteProject');
  
  
    index = getProjectIndex();
    for (let i = 0; i < allDivCreatedProjects.length; i++) {
        // allDivCreatedProjects
        splitDiv = allDivCreatedProjects[i].className.split('_'); // split ContainerBtnProject ContainerCreatedProject _00 
        splitDiv[1] = i.toString().padStart(2, '0'); //_00
        allDivCreatedProjects[i].className = splitDiv[0] + "_" + splitDiv[1]; //ContainerBtnProject ContainerCreatedProject _00 //
        // allCreatedProjects
        splitCreated = allCreatedProjects[i].className.split('_'); // split BtnProject CreatedProject _00
        splitCreated[1] = i.toString().padStart(2, '0'); //_00
        allCreatedProjects[i].className = splitCreated[0] + "_" + splitCreated[1]; // BtnProject CreatedProject _00
        // allCreatedDelete
        splitDelete = allCreatedDelete[i].className.split('_'); // split BtnDeleteProject _00
        splitDelete[1] = i.toString().padStart(2, '0'); //_00
        allCreatedDelete[i].className = splitDelete[0] + "_" + splitDelete[1]; // BtnDeleteProject _00
    }
};
  
  
function removeProjectSideBar(project) { // --> delete project
    item = project.closest('.ContainerBtnProject');
    item.remove();
    resetSideBarProjects(); // recount sidebar created projects
}
  
function removeProjectVars(project) {
    itemParent = project.closest('.ContainerBtnProject'); 
    itemProject = itemParent.querySelector('.CreatedProject');
    itemName = itemProject.innerHTML;
    itemIndex = getClassnameProjectIndex(project);
    Project.removeProject(itemIndex);
    Project.removeProjectDescription(itemIndex);
    Project.removeProjectPrio(itemIndex);
    Project.removeProjectDate(itemIndex);
    Project.removeProjectsTodoListProject(itemIndex);
    Project.removeProjectsTodoListCheckedProject(itemIndex);
    Project.removeProjectsTodoListDisableProject(itemIndex);
    Project.removeProjectsTodoListPrioProject(itemIndex);
}
  
function createProjectFunctions() {
    // Create new project 
    createProjectHTML();
    // Create todo item(s)
    createProjectTodos();
    // place values
    setTodoValues();
  
    index = getProjectIndex();
    projectIndex = '_' + index.toString().padStart(2, '0'); //_00
  
    // set project Title 
    let titleClass = '.ProjectTitleText.' + projectIndex;
    let projectTitle = document.querySelector(titleClass);
    projectName = Project.getProject(index);
    projectTitle.value = projectName;
    // set project Description 
    let descriptionValue = '.DescriptionText.' + projectIndex;
    let projectDescriptionValue = document.querySelector(descriptionValue);
    projectDescriptionValue.value = Project.getProjectDescription(index);
    // set project Date 
    let dateValue = '.Date.' + projectIndex;
    let projectDateValue = document.querySelector(dateValue);
    projectDateValue.value = Project.getProjectDate(index);
    // set project prio 
    let prioValue = '.PriorityValue.' + projectIndex;
    let projectPrioValue = document.querySelector(prioValue);
    projectPrioValue.value = Project.getProjectPrio(index);
    // set project prio color
    projectPriorityColor();
}
  
function getDates(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    let yyyy = today.getFullYear();
    todayDate = String(yyyy) + '-' + String(mm) + '-' + String(dd); 
  
    return todayDate
}
  
// Set priority item background color 
function todoPriorityColor() {
    let todoPrios = document.querySelectorAll('.TodoPriorityValue');
    for (let i = 0; i<todoPrios.length; i++) {
        let selectedValue = todoPrios[i].value;
        index = Number(todoPrios[i].className.split('_')[1]);
        count = Number(todoPrios[i].className.split('_')[2]);
        switch (selectedValue) {
            case 'low':
                todoPrios[i].style.backgroundColor = '#f3f363'; // yellow
                Project.setProjectsTodoListPrioItem(index, count, 'low');
                break;
            case 'mid':
                todoPrios[i].style.backgroundColor = '#f3be63'; // orange
                Project.setProjectsTodoListPrioItem(index, count, 'mid');
                break;
            case 'high':
                todoPrios[i].style.backgroundColor = '#f93434'; // red
                Project.setProjectsTodoListPrioItem(index, count, 'high');
                break;
        }
    }
}
  
function projectPriorityColor() {
    let projectPrios = document.querySelectorAll('.PriorityValue');
    for (let i = 0; i<projectPrios.length; i++) {
        selectedValue = projectPrios[i].value;
        switch (selectedValue) {
            case 'low':
                projectPrios[i].style.backgroundColor = '#f3f363'; // yellow
                // Project.setProjectPrio(i, 'low');
                break;
            case 'mid':
                projectPrios[i].style.backgroundColor = '#f3be63'; // orange
                // Project.setProjectPrio(i, 'mid');
                break;
            case 'high':
                projectPrios[i].style.backgroundColor = '#f93434'; // red
                // Project.setProjectPrio(i, 'high');
                break;
        }
    }
}
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  /////////////////////////////////////////////////////////  Localstrage  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  
function getLocalData(){
    if (localStorage.length > 0){
        try {
            let projectObj = localStorage.getItem('projectObj');
            projectObj = JSON.parse(projectObj);
            
            let projects = projectObj[0];
            let projectDescription = projectObj[1];
            let projectDate = projectObj[2];
            let projectPrio = projectObj[3];
            let currentProject = projectObj[4];
            let projectsTodoList = projectObj[5];
            let projectsTodoListChecked = projectObj[6];
            let projectsTodoListDisable = projectObj[7];
            let projectsTodoListPrio = projectObj[8];
            Project.setProjects(projects);
            Project.setProjectDescriptionAll(projectDescription);
            Project.setProjectDateAll(projectDate);
            Project.setProjectPrioAll(projectPrio);
            Project.setCurrentProject(currentProject);
            Project.setProjectsTodos(projectsTodoList);
            Project.setProjectsTodoChecks(projectsTodoListChecked);
            Project.setProjectsTodoDisables(projectsTodoListDisable);
            Project.setProjectsTodoPrios(projectsTodoListPrio);
            
            deleteProjects();
            // Create all projects 
            for (let i=0; i<projects.length; i++){
                Project.setCurrentProject(projects[i]);
                createProjectHTML();
                projectIndex = i.toString().padStart(2, '0');
                let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                ProjectTitleText.value = Project.getCurrentProject();
                let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                discriptionText.value = Project.getProjectDescription(i);
                let dueDateDate = document.querySelector('.Date._'+projectIndex);
                dueDateDate.value = Project.getProjectDate(i);
                let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                prioritySelect.value = Project.getProjectPrio(i); 
                projectPriorityColor();
  
                // createProjectTodos();
                createProjectTodos(i);
                resetTodoCount();
                // set todo values  
                setTodoValues(i);
                todoPriorityColor();

            }
            
            addProjectHTML(projects) // --> does this create sidebar projects?
        } catch(err) {
            console.log(err);
        }
    } else {
        // do nothing.
    }
}
  
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////  Javascript html interaction  //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  
  
let allProjectsBtn = document.querySelector('.AllProjects');
allProjectsBtn.addEventListener("click", (event) => {
    // Delete all current projects on screen
    deleteProjects();
    // Create all projects 
    for (let i=0; i<Project.getProjects().length; i++){
        Project.setCurrentProject(Project.getProject(i));
        createProjectHTML();
        let projectIndex = i.toString().padStart(2, '0');
  
        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
        ProjectTitleText.value = Project.getCurrentProject();
        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
        discriptionText.value = Project.getProjectDescription(i);
        let dueDateDate = document.querySelector('.Date._'+projectIndex);
        dueDateDate.value = Project.getProjectDate(i);
        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
        prioritySelect.value = Project.getProjectPrio(i); 
        projectPriorityColor();
  
        // createProjectTodos();
        createProjectTodos();
        // set todo values  
        setTodoValues();
    }
    // localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
});
  
let btnDates = document.querySelectorAll('.BtnProject');
btnDates.forEach((item) => {
    item.addEventListener("click", (event) => {
        // Delete all current projects on screen
        deleteProjects();
        // Create all projects 
        // Today
        // Get Date of today
        let todayDate = getDates();
  
        if (event.target.innerHTML == 'Today') {
  
            for (let item = 0; item < Project.getProjectsDates().length; item++) {
                if (Project.getProjectDate(item) == todayDate) {
                    Project.setCurrentProject(Project.getProjects()[item]);
                    createProjectHTML();
                    projectIndex = item.toString().padStart(2, '0'); // '00'
            
                    let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                    ProjectTitleText.value = Project.getProjects()[item]; // '0'
                    let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                    discriptionText.value = Project.getProjectDescription(item);
                    let dueDateDate = document.querySelector('.Date._'+projectIndex);
                    dueDateDate.value = Project.getProjectDate(item);
                    let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                    prioritySelect.value = Project.getProjectPrio(item); 
                    projectPriorityColor();
            
                    // createProjectTodos();
                    createProjectTodos();
                    // set todo values  
                    setTodoValues();
                }   
            }
        } 
        else if (event.target.innerHTML == '7 days') {
            for (let item = 0; item < Project.getProjectsDates().length; item++) {
                let today = new Date();
                let nextWeek = new Date(today); 
  
                // 7 days
                for (let day = 0; day<7; day++) {
                    nextWeek = new Date(nextWeek.getTime());
                    
                    let dd = String(nextWeek.getDate()).padStart(2, '0');
                    let mm = String(nextWeek.getMonth() + 1).padStart(2, '0');
                    let yyyy = nextWeek.getFullYear();
                    let nextDayDate = String(yyyy) + '-' + String(mm) + '-' + String(dd); 
                    
                    if (Project.getProjectDate(item) == nextDayDate) {
                        Project.setCurrentProject(Project.getProjects()[item]);
                        createProjectHTML();
                        projectIndex = item.toString().padStart(2, '0');
                
                        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                        ProjectTitleText.value = Project.getProjects()[item];
                        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                        discriptionText.value = Project.getProjectDescription(item);
                        let dueDateDate = document.querySelector('.Date._'+projectIndex);
                        dueDateDate.value = Project.getProjectDate(item);
                        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                        prioritySelect.value = Project.getProjectPrio(item); 
                        projectPriorityColor();
                
                        // createProjectTodos();
                        createProjectTodos();
                        // set todo values  
                        setTodoValues();
                    } 
                    nextWeek.setDate(nextWeek.getDate() + 1 );   
                }
            }
        }
        localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
    })
});
  
  
  
let sideBar = document.querySelector('.SideBar');
sideBar.addEventListener("click", (event) => {
    if (event.target.classList.contains('CreatedProject')) {
        // Delete html current project
        deleteProjects(Project.getCurrentProject());
        // Change Project.currentProject 
        Project.setCurrentProject(event.target.innerHTML);
        createProjectFunctions();
    } else if (event.target.classList.contains('BtnDeleteProject')) {
        closetProject = event.target.closest('.ContainerBtnProject');
        createdProject = closetProject.querySelector('.CreatedProject');
        projectName = createdProject.innerHTML;
        if (Project.setCurrentProject == projectName) {
            removeProjectVars(event.target);
            removeProjectSideBar(event.target);
            Project.setCurrentProject(Project.getProjects(Project.getProjects().length - 1));
            deleteProjects(); // Delete project from all variables
            if (Project.getProjects().length >= 1) {
                createProjectFunctions(); // Create HTML from latest project
            }
        } else {
            removeProjectVars(event.target);
            removeProjectSideBar(event.target);
            Project.setCurrentProject(Project.getProjects(Project.getProjects(length - 1)));
        }
    }
    localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));  
});
  
const BtnCreateProject = document.querySelector('.BtnCreatePlus');
BtnCreateProject.addEventListener("click", (event) => {
    const BtnCreateTitle = document.querySelector('.BtnCreateText');
    projectTitle = BtnCreateTitle.value;
    if (!(projectTitle) == "") {
        if (!(Project.getProjects().includes(projectTitle))) {
            // Create new project 
            Project.addProject(projectTitle);
            // let newProject = Object.create(projectTitle); 
            BtnCreateTitle.value = ""; // reset btn value 
            // Delete html current proejct
            deleteProjects();
            // Set current project
            Project.setCurrentProject(Project.getProject(Project.getProjects().length - 1));
            // Add todo item "" to new project list
            // addProjectTodo(Project.projectsTodoList, event.target.className);
            // Create new project 
            createProjectHTML();
            // Create todo item
            addProjectTodoItemHTML(Project.getProjects(), Project.getProjectsTodoListAll());
            const projectTitleText = document.querySelector('.ProjectTitleText');
            projectIndex = Project.getProjects().indexOf(Project.getCurrentProject());
            projectName = Project.getProject(projectIndex);
            projectTitleText.value = projectName;
            todoPriorityColor();
  
        }
        else {
            // do nothing
        }
    }
    localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
});
  
const main = document.querySelector('.Main');
main.addEventListener('click', (event) => {
    // create todo row
    projectIndex = getClassnameProjectIndex(event.target);
    index = Project.getProjectsTodoListAll().length;
    
    if (event.target.classList.contains('BtnCreateTodo')) {
        let todoIndex = Project.getProjectsTodoListProject(projectIndex).length -1
        console.log('projectIndex = ' + projectIndex);
        console.log('todoIndex = ' + todoIndex);
        addProjectTodo(Project.getProjectsTodoListAll(), event.target.className);
        addProjectTodoItemHTML(Project.getProjects(), event.target.className); 
        todoPriorityColor();
        localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
    }
    // delete todo row
    else if (event.target.classList.contains('BtnTodoDelete')) {
        // Voer hier je acties uit voor de delete button
        // delete HTML and from projectTodoList
        const todoCheckbox = event.target.closest('.TodoCheckbox');
        if (todoCheckbox) {
            rowIndex = getClassnameCountIndex(event.target);
            // index = getProjectIndex(); // --> current project error with all projects
            project = getClassnameProjectIndex(event.target); // checks project number from target. 
            Project.removeProjectsTodoListItem(project, rowIndex);
            todoCheckbox.remove();
            // Need to remove event.target from Project:
            Project.removeProjectsTodoListCheckedItem(project, rowIndex);
            Project.removeProjectsTodoListDisableItem(project, rowIndex);
            Project.removeProjectsTodoListPrioItem(project, rowIndex);

        }
  
        // Rename count existing todo's. To match projectTodoList todo length. 
        // both row and todoTextInput
        localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
        resetTodoCount();
    }
    // checkbox
    else if (event.target.classList.contains('Checkbox')) {
        checkbox = event.target;
        const todoContainer = checkbox.closest('.TodoCheckbox');
        const todoCheckboxText = todoContainer.querySelector('.TodoCheckboxText');
        const todoPriorityBox = todoContainer.querySelector('.TodoPriorityValue');
        index = getClassnameProjectIndex(checkbox);
        count = getClassnameCountIndex(checkbox);
        if (checkbox.checked) {
            todoCheckboxText.disabled = true;
            todoPriorityBox.disabled = true;
            Project.setProjectsTodoListCheckedItem(index, count, true);
            Project.setProjectsTodoListDisableItem(index, count, true);
        }
        else if (checkbox.checked == false) {
            todoCheckboxText.disabled = false;
            todoPriorityBox.disabled = false;
            Project.setProjectsTodoListCheckedItem(index, count, false);
            Project.setProjectsTodoListDisableItem(index, count, false);
        }
    }
    localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
});
  
main.addEventListener('change', (event) => {
    index = Number(event.target.className.split('_')[1]);
    // priority select color
    if (event.target.classList.contains('TodoPriorityValue')) {
        let TodoPriorityValue = event.target;
        count = getClassnameCountIndex(event.target);
        Project.setProjectsTodoListPrioItem(index, count, TodoPriorityValue.value);
        todoPriorityColor();
    } else if (event.target.classList.contains('PriorityValue')) {
        let prioItem = event.target;
        prioValue = event.target.value;
        console.log('projectIndex = ' + index);
        console.log('Setting priority:', index, prioValue);  // Nieuwe logging
        Project.setProjectPrio(index, prioValue);
        projectPriorityColor();
    // todo text values add to projectTodoList 
    } else if (event.target.classList.contains('TodoCheckboxText')) {
        textBox = event.target;
        textBoxClassName = textBox.className.split('_');
        textBoxProject = Number(textBoxClassName[1]);
        textBoxIndex = Number(textBoxClassName[textBoxClassName.length - 1]);
        textValue = textBox.value;
        Project.setProjectsTodoListItem(textBoxProject, textBoxIndex, textValue);
    } else if (event.target.classList.contains('DescriptionText')) {
        textValue = event.target.value;
        Project.setProjectDescription(index, textValue);
    } else if (event.target.classList.contains('Date')) {
        dateValue = event.target.value;
        Project.setProjectDate(index, dateValue);
    } else if (event.target.classList.contains('ProjectTitleText')) {
        projectTitle = event.target.value;
        Project.setProject(index, projectTitle);
        Project.setCurrentProject(projectTitle);
        projectIndexString = index.toString().padStart(2, '0');
        itemName = '.CreatedProject' + "._" + projectIndexString;
        const sideBarProjectText = document.querySelector(itemName);
        sideBarProjectText.innerHTML = projectTitle;
    }
  
    localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecteer de input en de knop
    let input = document.querySelector('.BtnCreateProject.BtnCreateText');
    let button = document.querySelector('.BtnCreateProject.BtnCreatePlus');
    // --> Get LocalStorage after DOM is loaded! 
    getLocalData(); 
    // --> set Todo values
    todoPriorityColor();
    console.log('Project = ' + Project.getAll());
    console.log('Stored data before refresh:', localStorage.getItem('projectObj'));


    // Voeg een event listener toe aan de input
    input.addEventListener('keypress', function(event) {
      // Check of de ingedrukte toets 'Enter' is
      if (event.key === 'Enter') {
        // Voorkom dat het formulier wordt verzonden
        event.preventDefault();
        // Trigger de click event op de knop
        button.click();
      }
    });
});
  

// window.addEventListener('beforeunload', function() {
//     console.log('test');
//     console.log('Stored data before refresh:', localStorage.getItem('projectObj'));
//     debugger;
// });
