

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
        removeProject: function(itemIndex){
            projects.splice(itemIndex, 1);
            return projects;
        },
        getProjectDescription: function() {
            return projectDescription;
        },
        setProjectDescription: function(item, newDescription) {
            projectDescription[item] = newDescription;
        },
        removeProjectDescription: function(itemIndex){
            projectDescription.splice(itemIndex, 1);
            return projectDescription;
        },
        getProjectDate: function() {
            return projectDate;
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
        setProjectPrio: function(item, newPrio) {
            projectPrio[item] = newPrio;
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
        getProjectsTodoList: function(item) {
            return projectsTodoList[item];
        },
        getProjectsTodoListItem: function(index, item) {
            return projectsTodoList[index][item];    
        },
        addProjectsTodoList: function(item, newTodoList) {
            projectsTodoList.push(['']);
        },
        setProjectsTodoList: function(item, newTodoList) {
            projectsTodoList[item] = newTodoList;
        },
        setProjectsTodoListItem: function(index, item, value) {
            projectsTodoList[index][item] = value;
        },
        getAllProjectsTodoList: function(){
            return projectsTodoList;
        },
        removeProjectsTodoList: function(itemIndex){
            projectsTodoList.splice(itemIndex, 1);
            return projectsTodoList;
        },
        getProjectsTodoListChecked: function(item) {
            return projectsTodoListChecked[item];
        },
        setProjectsTodoListChecked: function(item, newTodoListChecked) {
            projectsTodoListChecked[item] = newTodoListChecked;
        },
        removeProjectsTodoListChecked: function(itemIndex){
            projectsTodoListChecked.splice(itemIndex, 1);
            return projectsTodoListChecked;
        },
        getProjectsTodoListDisable: function() {
            return projectsTodoListDisable;
        },
        setProjectsTodoListDisable: function(item, newTodoListDisable) {
            projectsTodoListDisable[item] = newTodoListDisable;
        },
        removeProjectsTodoListDisable: function(itemIndex){
            projectsTodoListDisable.splice(itemIndex, 1);
            return projectsTodoListDisable;
        },
        getProjectsTodoListPrioItem: function(project, index) {
            return projectsTodoListPrio[project, index];
        },
        getProjectsTodoListPrio: function() {
            return projectsTodoListPrio;
        },
        setProjectsTodoListPrioItem: function(project, item, newTodoListPrio) {
            projectsTodoListPrio[project][item] = newTodoListPrio;
        },
        removeProjectsTodoListPrioItem: function(project, itemIndex){
            projectsTodoListPrio.splice(project, itemIndex, 1);
            return projectsTodoListPrio;
        },
        

    addProject: function(title) {
        // Project.projects.push(title);
        newProjectIndex = Project.getProjects.length + 1;
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
        Project.setProjectsTodoListChecked(newProjectIndex, [""]);
        // Project.projectsTodoListDisable.push([""]),
        Project.setProjectsTodoListDisable(newProjectIndex, [""]);
        // Project.projectsTodoListPrio.push(["low"]),
        Project.setProjectsTodoListPrioItem(newProjectIndex, 0, ["low"]);
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
        Project.removeProjectsTodoList(itemIndex);
        Project.removeProjectsTodoListChecked(itemIndex);
        Project.removeProjectsTodoListDisable(itemIndex);
        Project.removeProjectsTodoListPrioItem(itemIndex, 0);
    }
    }
  })();
  
  // ####################################################################################################################
  // ####################################################################################################################
  // ####################################################################################################################
  // ####################################################################################################################
  
  function getProjectIndex() {
    projectIndex = Project.getProjects().indexOf(Project.getCurrentProject());
    console.log('getProjectIndex() = ' +  projectIndex);
    return projectIndex;
  }
  
  function addProjectTodo(projectsTodoList, btnCreateTodo) {
    projectIndex = Number(btnCreateTodo.split('_')[1]);
    // If array index doesn't exist yet create new one. 
    if (Project.getProjectsTodoList(projectIndex) === undefined) {
        Project.setProjectsTodoList(projectIndex, [""]);
        Project.setProjectsTodoListChecked(projectIndex, [""]);
        Project.setProjectsTodoListDisable(projectIndex, [""]);
        Project.setProjectsTodoListPrioItem(projectIndex, 0 ["low"]);
    }
    else {
        Project.setProjectsTodoList(projectIndex, ""); // text value
        Project.setProjectsTodoListChecked(projectIndex, ""); // checked value
        Project.setProjectsTodoListDisable(projectIndex, ""); // checked value
        Project.setProjectsTodoListPrioItem(projectIndex, 0, "low"); // checked value
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
  function addProjectTodoItemHTML(projects, projectsTodoList, index = "none", todoCounter = Project.getProjectsTodoList(projectIndex).length-1) {
  
    // projectIndex = getProjectIndex();
  
    if (index == "none"){
        projectIndex = getProjectIndex();
        console.log('projectIndex = getProjectIndex() = ' + projectIndex);
    } else {
        projectIndex = Number(index.split('_')[1]);
        console.log("projectIndex = Number(index.split('_')[1]) = "+ projectIndex);
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
            for (let i = 0; i < Project.getProjectsTodoList(p).length; i++) {
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
    for (let i = 0; i < Project.getProjectsTodoList(index).length; i++) {
        addProjectTodoItemHTML(Project.getProjects(), Project.getAllProjectsTodoList(), "none", i); // ,i) --> needed but gives error, because it's on 3th place.
    }
  };
  
  function setTodoValues() {
    index = getProjectIndex();
    projectIndex = '_' + index.toString().padStart(2, '0'); //_00
  
    let todoCount = Project.getProjectsTodoList(index).length;
    for (let i = 0; i < todoCount; i++) {
        iString = '._' + i.toString().padStart(3, '0'); //_000
        let vclassName = '.TodoCheckboxText' + '.' + projectIndex + iString;
        console.log('vclassName = ' + vclassName);
        let todoText = document.querySelector(vclassName);
        // text input
        todoText.value = Project.getProjectsTodoList(index, i);
        // checkbox
        todoText.disabled = Project.getProjectsTodoListDisable(index, i);
        let vCheckbox = '.Checkbox' + '.' + projectIndex + iString;
        let checkboxChecked = document.querySelector(vCheckbox);
        checkboxChecked.checked = Project.getProjectsTodoListChecked(index, i);
        // Prio
        let vPrio = '.TodoPriorityValue' + '.' + projectIndex + iString;
        let prioItem = document.querySelector(vPrio);
        prioItem.value = Project.getProjectsTodoListPrio(index, i);
        switch (Project.getProjectsTodoListPrio(index, i)) {
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
    localStorage.setItem('projectObj', JSON.stringify(Project));
  };
  
  // Set priority item background color 
  function todoPriorityColor(item) {
    let selectedValue = item.value;
    switch (selectedValue) {
        case 'low':
            item.style.backgroundColor = '#f3f363'; // yellow
            Project.getProjectsTodoListPrio(index)[count] = 'low';
            break;
        case 'mid':
            item.style.backgroundColor = '#f3be63'; // orange
            Project.getProjectsTodoListPrio(index)[count] = 'mid';
            break;
        case 'high':
            item.style.backgroundColor = '#f93434'; // red
            Project.getProjectsTodoListPrio(index)[count] = 'high';
            break;
    }
  }
  
  function projectPriorityColor(item) {
    let selectedValue = item.value;
    let index = getProjectIndex();
    switch (selectedValue) {
        case 'low':
            item.style.backgroundColor = '#f3f363'; // yellow
            Project.getProjectPrio(index) = 'low';
            break;
        case 'mid':
            item.style.backgroundColor = '#f3be63'; // orange
            Project.getProjectPrio(index) = 'mid';
            break;
        case 'high':
            item.style.backgroundColor = '#f93434'; // red
            Project.getProjectPrio(index) = 'high';
            break;
    }
  }
  
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
    Project.removeProjects.splice(itemIndex);
    Project.removeProjectDescription.splice(itemIndex);
    Project.removeProjectPrio.splice(itemIndex);
    Project.removeProjectDate.splice(itemIndex);
    Project.removeProjectsTodoList.splice(itemIndex);
    Project.removeProjectsTodoListChecked.splice(itemIndex);
    Project.removeProjectsTodoListDisable.splice(itemIndex);
    Project.removeProjectsTodoListPrioItem.splice(itemIndex, 0);
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
    projectName = Project.getProjects(index);
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
    // projectPriorityColor(projectPrioValue); --> tijdelijk uit
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
                Project.getProjectsTodoListPrio(index)[count] = 'low';
                break;
            case 'mid':
                todoPrios[i].style.backgroundColor = '#f3be63'; // orange
                Project.getProjectsTodoListPrio(index)[count] = 'mid';
                break;
            case 'high':
                todoPrios[i].style.backgroundColor = '#f93434'; // red
                Project.getProjectsTodoListPrio(index)[count] = 'high';
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
                Project.getProjectPrio(i) = 'low';
                break;
            case 'mid':
                projectPrios[i].style.backgroundColor = '#f3be63'; // orange
                Project.getProjectPrio(i) = 'mid';
                break;
            case 'high':
                projectPrios[i].style.backgroundColor = '#f93434'; // red
                Project.getProjectPrio(i) = 'high';
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
  
            Project.setProjects(projectObj.projects);
            Project.setProjectDescription(projectObj.projectDescription);
            Project.setProjectDate(projectObj.projectDate);
            Project.setProjectPrio(projectObj.projectPrio);
            Project.setPurrentProject(projectObj.currentProject);
            Project.setProjectsTodoList(projectObj.projectsTodoList);
            Project.setProjectsTodoListChecked(projectObj.projectsTodoListChecked);
            Project.setProjectsTodoListDisable(projectObj.projectsTodoListDisable);
            Project.setProjectsTodoListPrioItem(projectObj.projectsTodoListPrio);
            
            deleteProjects();
            // Create all projects 
            for (let i=0; i<projectObj.projects.length; i++){
                Project.setCurrentProject(Project.getProjects(i));
                createProjectHTML(i);
                projectIndex = i.toString().padStart(2, '0');
  
                let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                ProjectTitleText.value = Project.getCurrentProject;
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
            
            // for (let proj = 0; proj < projectObj.projects.length; proj++){
  
            // }
  
            addProjectHTML(projectObj.projects) // --> does this create sidebar projects?
  
        } catch(err) {
            console.log(err);
        }
    } else {
        // do nothing.
    }
  }
  
  getLocalData() // run on opening website.
  
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
    for (let i=0; i<Project.projects().length; i++){
        Project.setCurrentProject(Project.projects(i));
        createProjectHTML();
        projectIndex = i.toString().padStart(2, '0');
  
        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
        ProjectTitleText.value = Project.setCurrentProject;
        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
        discriptionText.value = Project.getProjectDescription(i);
        let dueDateDate = document.querySelector('.Date._'+projectIndex);
        dueDateDate.value = Project.getProjectDate(i);
        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
        prioritySelect.value = Project.getProjectPrio(i); 
        projectPriorityColor(prioritySelect);
  
        // createProjectTodos();
        createProjectTodos();
        // set todo values  
        setTodoValues();
    }
    localStorage.setItem('projectObj', JSON.stringify(Project));
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
  
            for (let item = 0; item < Project.getProjectDate().length; item++) {
                if (Project.getProjectDate(item) == todayDate) {
                    projectIndex = item;
                    Project.setCurrentProject(Project.getProjects(projectIndex));
                    createProjectHTML();
                    projectIndex = item.toString().padStart(2, '0');
            
                    let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                    ProjectTitleText.value = Project.getCurrentProject;
                    let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                    discriptionText.value = Project.getProjectDescription(item);
                    let dueDateDate = document.querySelector('.Date._'+projectIndex);
                    dueDateDate.value = Project.getProjectDate(item);
                    let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                    prioritySelect.value = Project.getProjectPrio(item); 
                    projectPriorityColor(prioritySelect);
            
                    // createProjectTodos();
                    createProjectTodos();
                    // set todo values  
                    setTodoValues();
                }   
            }
        } 
        else if (event.target.innerHTML == '7 days') {
            for (let item = 0; item < Project.getProjectDate().length; item++) {
                let today = new Date();
                let nextWeek = new Date(today); 
  
                // 7 days
                for (let day = 0; day<7; day++) {
                    nextWeek = new Date(nextWeek.getTime());
                    
                    let dd = String(nextWeek.getDate()).padStart(2, '0');
                    let mm = String(nextWeek.getMonth() + 1).padStart(2, '0');
                    let yyyy = nextWeek.getFullYear();
                    let nextDayDate = String(yyyy) + '-' + String(mm) + '-' + String(dd); 
                
                    console.log('nextWeek = ' + nextDayDate);
                    
                    if (Project.getProjectDate(item) == nextDayDate) {
                        console.log(nextDayDate);
                        projectIndex = item;
                        Project.setCurrentProject(Project.getProjects(projectIndex));
                        createProjectHTML();
                        projectIndex = item.toString().padStart(2, '0');
                
                        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                        ProjectTitleText.value = Project.getCurrentProject();
                        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                        discriptionText.value = Project.getProjectDescription(item);
                        let dueDateDate = document.querySelector('.Date._'+projectIndex);
                        dueDateDate.value = Project.getProjectDate(item);
                        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                        prioritySelect.value = Project.getProjectPrio(item); 
                        projectPriorityColor(prioritySelect);
                
                        // createProjectTodos();
                        createProjectTodos();
                        // set todo values  
                        setTodoValues();
                    } 
                    nextWeek.setDate(nextWeek.getDate() + 1 );   
                }
            }
        }
    })
    localStorage.setItem('projectObj', JSON.stringify(Project));
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
    localStorage.setItem('projectObj', JSON.stringify(Project));  
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
            addProjectTodoItemHTML(Project.getProjects(), Project.getAllProjectsTodoList());
            const projectTitleText = document.querySelector('.ProjectTitleText');
            projectIndex = Project.getProjects().indexOf(Project.getCurrentProject());
            projectName = Project.getProject(projectIndex);
            projectTitleText.value = projectName;
  
        }
        else {
            // do nothing
        }
    }
    localStorage.setItem('projectObj', JSON.stringify(Project));
  });
  
  const main = document.querySelector('.Main');
  main.addEventListener('click', (event) => {
    // create todo row
    if (event.target.classList.contains('BtnCreateTodo')) {
        addProjectTodo(Project.setProjectsTodoList(), event.target.className);
        addProjectTodoItemHTML(Project.getProjects(), Project.getProjectsTodoList(), event.target.className); 
        localStorage.setItem('projectObj', JSON.stringify(Project));
    }
    // delete todo row
    else if (event.target.classList.contains('BtnTodoDelete')) {
        // Voer hier je acties uit voor de delete button
        // delete HTML and from projectTodoList
        const todoCheckbox = event.target.closest('.TodoCheckbox');
        if (todoCheckbox) {
            rowIndex = getClassnameCountIndex(event.target);
            // index = getProjectIndex(); // --> current project error with all projects
            index = getClassnameProjectIndex(event.target); // checks project number from target. 
            Project.removeProjectsTodoList(index);
            todoCheckbox.remove();
            // Need to remove event.target from Project:
            Project.removeProjectsTodoListChecked(index);
            Project.removeProjectsTodoListDisable(index);
            Project.removeProjectsTodoListPrioItem(index, 0);

        }
  
        // Rename count existing todo's. To match projectTodoList todo length. 
        // both row and todoTextInput
        localStorage.setItem('projectObj', JSON.stringify(Project));
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
            Project.setProjectsTodoListChecked(index)[count] = true;
            Project.setProjectsTodoListDisable(index)[count] = true;
        }
        else if (checkbox.checked == false) {
            todoCheckboxText.disabled = false;
            todoPriorityBox.disabled = false;
            Project.setProjectsTodoListChecked(index)[count] = false;
            Project.setProjectsTodoListDisable(index)[count] = false;
        }
    }
    localStorage.setItem('projectObj', JSON.stringify(Project));
  });
  
  main.addEventListener('change', (event) => {
    index = Number(event.target.className.split('_')[1]);
    // priority select color
    if (event.target.classList.contains('TodoPriorityValue')) {
        let TodoPriorityValue = event.target;
        count = getClassnameCountIndex(event.target);
        todoPriorityColor(TodoPriorityValue); //
    } else if (event.target.classList.contains('PriorityValue')) {
        let prioItem = event.target;
        prioValue = event.target.value;
        Project.setProjectPrio(index) = prioValue;
        projectPriorityColor(prioItem);
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
        Project.setProjectDescription(index) = textValue;
    } else if (event.target.classList.contains('Date')) {
        dateValue = event.target.value;
        Project.setProjectDate(index) = dateValue;
    } else if (event.target.classList.contains('ProjectTitleText')) {
        projectTitle = event.target.value;
        Project.setProject(index) = projectTitle;
        Project.setCurrentProject(projectTitle);
        projectIndexString = index.toString().padStart(2, '0');
        itemName = '.CreatedProject' + "._" + projectIndexString;
        const sideBarProjectText = document.querySelector(itemName);
        sideBarProjectText.innerHTML = projectTitle;
    }
  
    localStorage.setItem('projectObj', JSON.stringify(Project));
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Selecteer de input en de knop
    let input = document.querySelector('.BtnCreateProject.BtnCreateText');
    let button = document.querySelector('.BtnCreateProject.BtnCreatePlus');
  
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
  
