
export function getProjectIndex() {
    projectIndex = Project.getProjects().indexOf(Project.getCurrentProject());
    return projectIndex;
}
  
export function addProjectTodo(projectsTodoList, btnCreateTodo) {
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
  
export function deleteProjects() {
    const projectCards = document.querySelectorAll('.ProjectCard');
    projectCards.forEach((item) => {
        item.remove();
    })
}
  
export function createProjectHTML() {
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
export function addProjectHTML(projects) {
  
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
// export function addProjectTodoItemHTML(projects, projectsTodoList, todoCounter=Project.projectsTodoList[projectIndex].length-1, index="none") {
export function addProjectTodoItemHTML(projects, projectsTodoList, index = "none", todoCounter = Project.getProjectsTodoListProject(projectIndex).length-1) {
  
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
  
export function resetTodoCount() {
    
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
  
export function getClassnameProjectIndex(todoItem) {
    projectIndex = todoItem.className.split('_')[1];
    return Number(projectIndex);
}
  
export function getClassnameCountIndex(todoItem) {
    countIndex = todoItem.className.split('_');
    countIndex = countIndex[countIndex.length - 1];
    return Number(countIndex);
}
  
  
export function createProjectTodos() {
    index = getProjectIndex();
    for (let i = 0; i < Project.getProjectsTodoListProject(index).length; i++) {
        addProjectTodoItemHTML(Project.getProjects(), Project.getProjectsTodoListAll(), "none", i); // ,i) --> needed but gives error, because it's on 3th place.
    }
};
  
export function setTodoValues() {
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
  
export function resetSideBarProjects() {
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
  
  
export function removeProjectSideBar(project) { // --> delete project
    item = project.closest('.ContainerBtnProject');
    item.remove();
    resetSideBarProjects(); // recount sidebar created projects
}
  
export function removeProjectVars(project) {
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
  
export function createProjectFunctions() {
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
  
export function getDates(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    let yyyy = today.getFullYear();
    todayDate = String(yyyy) + '-' + String(mm) + '-' + String(dd); 
  
    return todayDate
}
  
// Set priority item background color 
export function todoPriorityColor() {
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
  
export function projectPriorityColor() {
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
  
export function getLocalData(){
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

export function print(){
    console.log('import module function text!!!');
}