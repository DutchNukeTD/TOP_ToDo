const Project = {
    projects : ['Default'],
    projectDescription : [''],
    projectDate : [''],
    projectPrio : ['low'],
    currentProject : 'Default',
    projectsTodoList : [[""]],
    projectsTodoListChecked : [[""]],
    projectsTodoListDisable : [[""]],
    projectsTodoListPrio : [["low"]],

    sayProjects: function() {
        console.log(Project.projects);
    },
    addProject: function(title) {
        Project.projects.push(title);
        Project.projectDescription.push('');
        Project.projectDate.push('');
        Project.projectPrio.push('low');
        Project.projectsTodoList.push([""]),
        Project.projectsTodoListChecked.push([""]),
        Project.projectsTodoListDisable.push([""]),
        Project.projectsTodoListPrio.push(["low"]),
        addProjectHTML(Project.projects);
        return title;
    },
    setDescription: function(){

    },
    setDate: function(){

    },
    setPrio: function(){

    },
    addTodoList: function(){

    },
    addTodoListChecked: function(){

    },
    addTodoListDisable: function(){

    },
    addTodoListPrio: function(){

    },
    deleteProject: function(project){
        itemParent = project.closest('.ContainerBtnProject'); 
        itemProject = itemParent.querySelector('.CreatedProject');
        itemName = itemProject.innerHTML;
        itemIndex = getClassnameProjectIndex(project);
        Project.projects.splice(itemIndex, 1);
        Project.projectDescription.splice(itemIndex, 1);
        Project.projectDate.splice(itemIndex, 1);
        Project.projectPrio.splice(itemIndex, 1);
        Project.Project.projectsTodoList.splice(itemIndex, 1);
        Project.Project.projectsTodoListChecked.splice(itemIndex, 1);
        Project.Project.projectsTodoListDisable.splice(itemIndex, 1);
        Project.Project.projectsTodoListPrio.splice(itemIndex, 1);
    }
};

// ####################################################################################################################
// ####################################################################################################################
// ####################################################################################################################
// ####################################################################################################################


function consolelogProjects() {
    console.log("projects = " + projects);
    console.log("projectDescription = " + projectDescription);
    console.log("projectDate = " + projectDate);
    console.log("projectPrio = " + projectPrio);
    console.log("Project.currentProject = " + Project.currentProject);
    console.log("Project.projectsTodoList = " + Project.projectsTodoList);
    console.log("Project.projectsTodoListChecked = " + Project.projectsTodoListChecked);
    console.log("Project.projectsTodoListDisable = " + Project.projectsTodoListDisable);
    console.log("Project.projectsTodoListPrio = " + Project.projectsTodoListPrio);
}

function getProjectIndex() {
    projectIndex = Project.projects.indexOf(Project.currentProject);
    console.log('getProjectIndex() = ' +  projectIndex);
    return projectIndex;
}

function addProjectTodo(projectsTodoList, btnCreateTodo) {
    projectIndex = Number(btnCreateTodo.split('_')[1]);
    // If array index doesn't exist yet create new one. 
    if (Project.projectsTodoList[projectIndex] === undefined) {
        Project.projectsTodoList[projectIndex] = ([""]);
        Project.projectsTodoListChecked[projectIndex] = ([""]);
        Project.projectsTodoListDisable[projectIndex] = ([""]);
        Project.projectsTodoListPrio[projectIndex] = (["low"]);
    }
    else {
        Project.projectsTodoList[projectIndex].push(""); // text value
        Project.projectsTodoListChecked[projectIndex].push(""); // checked value
        Project.projectsTodoListDisable[projectIndex].push(""); // checked value
        Project.projectsTodoListPrio[projectIndex].push("low"); // checked value
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
    for (let i = 0; i < Project.projects.length; i++) {
        projectIndexString = i.toString().padStart(2, '0');
        let projectTitleSideBar = document.createElement('div');
        projectTitleSideBar.className = 'ContainerBtnProject ContainerCreatedProject' + ' _' + projectIndexString;
        let projectTitleBtn = document.createElement('button');
        projectTitleBtn.className = "BtnProject" + " " + "CreatedProject" + " _" + projectIndexString;
        projectTitleBtn.innerHTML = Project.projects[i];
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
function addProjectTodoItemHTML(projects, projectsTodoList, index = "none", todoCounter = Project.projectsTodoList[projectIndex].length-1) {

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

    for (let p = 0; p < Project.projects.length; p++) {
        try {
            index = allTodoRows[p].className.split('_')[1]; // 00 
            for (let i = 0; i < Project.projectsTodoList[p].length; i++) {
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
    for (let i = 0; i < Project.projectsTodoList[index].length; i++) {
        addProjectTodoItemHTML(Project.projects, Project.projectsTodoList, "none", i); // ,i) --> needed but gives error, because it's on 3th place.
    }
};

function setTodoValues() {
    index = getProjectIndex();
    projectIndex = '_' + index.toString().padStart(2, '0'); //_00

    let todoCount = Project.projectsTodoList[index].length;
    for (let i = 0; i < todoCount; i++) {
        iString = '._' + i.toString().padStart(3, '0'); //_000
        let vclassName = '.TodoCheckboxText' + '.' + projectIndex + iString;
        console.log('vclassName = ' + vclassName);
        let todoText = document.querySelector(vclassName);
        // text input
        todoText.value = Project.projectsTodoList[index][i];
        // checkbox
        todoText.disabled = Project.projectsTodoListDisable[index][i];
        let vCheckbox = '.Checkbox' + '.' + projectIndex + iString;
        let checkboxChecked = document.querySelector(vCheckbox);
        checkboxChecked.checked = Project.projectsTodoListChecked[index][i];
        // Prio
        let vPrio = '.TodoPriorityValue' + '.' + projectIndex + iString;
        let prioItem = document.querySelector(vPrio);
        prioItem.value = Project.projectsTodoListPrio[index][i];
        switch (Project.projectsTodoListPrio[index][i]) {
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
};

// Set priority item background color 
function todoPriorityColor(item) {
    let selectedValue = item.value;
    switch (selectedValue) {
        case 'low':
            item.style.backgroundColor = '#f3f363'; // yellow
            Project.projectsTodoListPrio[index][count] = 'low';
            break;
        case 'mid':
            item.style.backgroundColor = '#f3be63'; // orange
            Project.projectsTodoListPrio[index][count] = 'mid';
            break;
        case 'high':
            item.style.backgroundColor = '#f93434'; // red
            Project.projectsTodoListPrio[index][count] = 'high';
            break;
    }
}

function projectPriorityColor(item) {
    let selectedValue = item.value;
    let index = getProjectIndex();
    switch (selectedValue) {
        case 'low':
            item.style.backgroundColor = '#f3f363'; // yellow
            Project.projectPrio[index] = 'low';
            break;
        case 'mid':
            item.style.backgroundColor = '#f3be63'; // orange
            Project.projectPrio[index] = 'mid';
            break;
        case 'high':
            item.style.backgroundColor = '#f93434'; // red
            Project.projectPrio[index] = 'high';
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
    projects.splice(itemIndex, 1);
    projectDescription.splice(itemIndex, 1);
    projectDate.splice(itemIndex, 1);
    projectPrio.splice(itemIndex, 1);
    Project.projectsTodoList.splice(itemIndex, 1);
    Project.projectsTodoListChecked.splice(itemIndex, 1);
    Project.projectsTodoListDisable.splice(itemIndex, 1);
    Project.projectsTodoListPrio.splice(itemIndex, 1);
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
    projectName = Project.projects[index];
    projectTitle.value = projectName;
    // set project Description 
    let descriptionValue = '.DescriptionText.' + projectIndex;
    let projectDescriptionValue = document.querySelector(descriptionValue);
    projectDescriptionValue.value = Project.projectDescription[index];
    // set project Date 
    let dateValue = '.Date.' + projectIndex;
    let projectDateValue = document.querySelector(dateValue);
    projectDateValue.value = Project.projectDate[index];
    // set project prio 
    let prioValue = '.PriorityValue.' + projectIndex;
    let projectPrioValue = document.querySelector(prioValue);
    projectPrioValue.value = Project.projectPrio[index];
    // set project prio color
    projectPriorityColor(projectPrioValue);
}

/////////////////////////////////////////////////////////////////////////// 
// Javascript html interaction//
/////////////////////////////////////////////////////////////////////////// 


let allProjectsBtn = document.querySelector('.AllProjects');
allProjectsBtn.addEventListener("click", (event) => {
    // Delete all current projects on screen
    deleteProjects();
    // Create all projects 
    for (let i=0; i<Project.projects.length; i++){
        Project.currentProject = Project.projects[i]
        createProjectHTML();
        projectIndex = i.toString().padStart(2, '0');

        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
        ProjectTitleText.value = Project.currentProject;
        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
        discriptionText.value = Project.projectDescription[i];
        let dueDateDate = document.querySelector('.Date._'+projectIndex);
        dueDateDate.value = Project.projectDate[i];
        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
        prioritySelect.value = Project.projectPrio[i]; 
        projectPriorityColor(prioritySelect);

        // createProjectTodos();
        createProjectTodos();
        // set todo values  
        setTodoValues();
    }
    

});

let sideBar = document.querySelector('.SideBar');
sideBar.addEventListener("click", (event) => {
    if (event.target.classList.contains('CreatedProject')) {
        // Delete html current project
        deleteProjects(Project.currentProject);
        // Change Project.currentProject 
        Project.currentProject = event.target.innerHTML;
        createProjectFunctions();
    } else if (event.target.classList.contains('BtnDeleteProject')) {
        closetProject = event.target.closest('.ContainerBtnProject');
        createdProject = closetProject.querySelector('.CreatedProject');
        projectName = createdProject.innerHTML;
        if (Project.currentProject == projectName) {
            removeProjectVars(event.target);
            removeProjectSideBar(event.target);
            Project.currentProject = Project.projects[Project.projects.length - 1];
            deleteProjects(); // Delete project from all variables
            if (Project.projects.length >= 1) {
                createProjectFunctions(); // Create HTML from latest project
            }
        } else {
            removeProjectVars(event.target);
            removeProjectSideBar(event.target);
            Project.currentProject = Project.projects[Project.projects.length - 1];
        }
    }   
});

const BtnCreateProject = document.querySelector('.BtnCreatePlus');
BtnCreateProject.addEventListener("click", (event) => {
    const BtnCreateTitle = document.querySelector('.BtnCreateText');
    projectTitle = BtnCreateTitle.value;
    if (!(projectTitle) == "") {
        if (!(Project.projects.includes(projectTitle))) {
            // Create new project 
            Project.addProject(projectTitle);
            BtnCreateTitle.value = ""; // reset btn value 
            // Delete html current proejct
            deleteProjects();
            // Set current project
            Project.currentProject = Project.projects[Project.projects.length - 1];
            // Add todo item "" to new project list
            // addProjectTodo(Project.projectsTodoList, event.target.className);
            // Create new project 
            createProjectHTML();
            // Create todo item
            addProjectTodoItemHTML(Project.projects, Project.projectsTodoList);
            const projectTitleText = document.querySelector('.ProjectTitleText');
            projectIndex = Project.projects.indexOf(Project.currentProject);
            projectName = Project.projects[projectIndex];
            projectTitleText.value = projectName;

        }
        else {
            // do nothing
        }
    }
});

const main = document.querySelector('.Main');
main.addEventListener('click', (event) => {
    // create todo row
    if (event.target.classList.contains('BtnCreateTodo')) {
        addProjectTodo(Project.projectsTodoList, event.target.className);
        addProjectTodoItemHTML(Project.projects, Project.projectsTodoList, event.target.className); 
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
            Project.projectsTodoList[index].splice(rowIndex, 1);
            todoCheckbox.remove();
        }

        // Rename count existing todo's. To match projectTodoList todo length. 
        // both row and todoTextInput
        resetTodoCount();
    }
    // checkbox
    else if (event.target.classList.contains('Checkbox')) {
        checkbox = event.target;
        const todoContainer = checkbox.closest('.TodoCheckbox');
        const todoCheckboxText = todoContainer.querySelector('.TodoCheckboxText');
        const todoPriorityBox = todoContainer.querySelector('.TodoPriorityValue');
        index = getProjectIndex();
        count = getClassnameCountIndex(checkbox);
        if (checkbox.checked) {
            todoCheckboxText.disabled = true;
            todoPriorityBox.disabled = true;
            Project.projectsTodoListChecked[index][count] = true;
            Project.projectsTodoListDisable[index][count] = true;
        }
        else if (checkbox.checked == false) {
            todoCheckboxText.disabled = false;
            todoPriorityBox.disabled = false;
            Project.projectsTodoListChecked[index][count] = false;
            Project.projectsTodoListDisable[index][count] = false;
        }
    }
});

main.addEventListener('change', (event) => {
    index = getProjectIndex();
    // priority select color
    if (event.target.classList.contains('TodoPriorityValue')) {
        let TodoPriorityValue = event.target;
        count = getClassnameCountIndex(event.target);
        todoPriorityColor(TodoPriorityValue); //
    } else if (event.target.classList.contains('PriorityValue')) {
        let prioItem = event.target;
        // prioValue = event.target.value;
        // Project.projectPrio[index] = prioValue;
        projectPriorityColor(prioItem);
    // todo text values add to projectTodoList 
    } else if (event.target.classList.contains('TodoCheckboxText')) {
        textBox = event.target;
        textBoxClassName = textBox.className.split('_');
        textBoxProject = Number(textBoxClassName[1]);
        textBoxIndex = Number(textBoxClassName[textBoxClassName.length - 1]);
        textValue = textBox.value;
        Project.projectsTodoList[textBoxProject][textBoxIndex] = textValue;
    } else if (event.target.classList.contains('DescriptionText')) {
        textValue = event.target.value;
        Project.projectDescription[index] = textValue;
    } else if (event.target.classList.contains('Date')) {
        dateValue = event.target.value;
        Project.projectDate[index] = dateValue;
    } else if (event.target.classList.contains('ProjectTitleText')) {
        projectTitle = event.target.value;
        Project.projects[index] = projectTitle;
        Project.currentProject = projectTitle;
        projectIndexString = index.toString().padStart(2, '0');
        itemName = '.CreatedProject' + "._" + projectIndexString;
        const sideBarProjectText = document.querySelector(itemName);
        sideBarProjectText.innerHTML = projectTitle;
    }
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
  
