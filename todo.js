let projects = ['Default'];
let projectDescription = [''];
let projectDate = [''];
let projectPrio = ['low'];
let currentProject = 'Default';
let projectsTodoList = [[""]];
let projectsTodoListChecked = [[""]];
let projectsTodoListDisable = [[""]];
let projectsTodoListPrio = [["low"]];

function consolelogProjects() {
    console.log("projects = " + projects);
    console.log("projectDescription = " + projectDescription);
    console.log("projectDate = " + projectDate);
    console.log("projectPrio = " + projectPrio);
    console.log("currentProject = " + currentProject);
    console.log("projectsTodoList = " + projectsTodoList);
    console.log("projectsTodoListChecked = " + projectsTodoListChecked);
    console.log("projectsTodoListDisable = " + projectsTodoListDisable);
    console.log("projectsTodoListPrio = " + projectsTodoListPrio);
}

console.log('Hello world!');

function addProject(title) {
    projects.push(title);
    projectDescription.push('');
    projectDate.push('');
    projectPrio.push('low');
    addProjectHTML(projects);
    return title;
};

function getProjectIndex(projects, currentProject) {
    projectIndex = projects.indexOf(currentProject);
    return projectIndex;
}

function addProjectTodo(projectsTodoList) {
    getProjectIndex(projects, currentProject);
    // If array index doesn't exist yet create new one. 
    if (projectsTodoList[projectIndex] === undefined) {
        projectsTodoList[projectIndex] = ([""]);
        projectsTodoListChecked[projectIndex] = ([""]);
        projectsTodoListDisable[projectIndex] = ([""]);
        projectsTodoListPrio[projectIndex] = (["low"]);
    }
    else {
        projectsTodoList[projectIndex].push(""); // text value
        projectsTodoListChecked[projectIndex].push(""); // checked value
        projectsTodoListDisable[projectIndex].push(""); // checked value
        projectsTodoListPrio[projectIndex].push("low"); // checked value
    }
};

function deleteProject(currentProject) {
    const projectCard = document.querySelector('.ProjectCard');
    projectCard.remove();
}

function createProjectHTML() {
    const main = document.querySelector('.Main');
    projectIndex = getProjectIndex(projects, currentProject);
    projectIndexString = projectIndex.toString().padStart(2, '0');

    let projectCard = document.createElement('div');
    projectCard.className = 'ProjectCard';
    let projectTitle = document.createElement('div');
    projectTitle.className = 'ProjectTitle';
    let projectTitleText = document.createElement('input');
    projectTitleText.className = 'ProjectTitleText' + ' ' + '_' + projectIndexString; // ProjectTitleText _01
    projectTitleText.value = "test"; // Hier moet nieuwe project title komen. 

    main.appendChild(projectCard);
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
    let projectSelectOptionHeigh = document.createElement('option');
    projectSelectOptionHeigh.value = "heigh";
    projectSelectOptionHeigh.innerHTML = "heigh";

    projectInfo.appendChild(projectPriority);
    projectPriority.appendChild(priorityText);
    projectPriority.appendChild(prioritySelect);
    prioritySelect.appendChild(projectSelectOptionLow);
    prioritySelect.appendChild(projectSelectOptionMid);
    prioritySelect.appendChild(projectSelectOptionHeigh);

    let projectToDos = document.createElement('div');
    projectToDos.className = 'ToDos';
    let projectTodoContainer = document.createElement('div');
    projectTodoContainer.className = 'TodoContainer';

    projectCard.appendChild(projectToDos);
    projectToDos.appendChild(projectTodoContainer);

    let projectTodoAdd = document.createElement('div');
    projectTodoAdd.className = 'TodoAdd';
    let btnCreateTodo = document.createElement('button');
    btnCreateTodo.className = 'BtnCreateTodo';
    btnCreateTodo.innerHTML = '+';

    projectToDos.appendChild(projectTodoAdd);
    projectTodoAdd.appendChild(btnCreateTodo);

}

// Add new project HTML
function addProjectHTML(projects) {

    const projectTitles = document.querySelector('.ContainerProjects');

    // Remove all titles
    while (projectTitles.hasChildNodes()) {
        projectTitles.removeChild(projectTitles.firstChild);
    }
    // Add all titles 
    for (let i = 0; i < projects.length; i++) {
        console.log(projects[i])
        let projectTitleSideBar = document.createElement('div');
        projectTitleSideBar.className = "ContainerBtnProject";
        let projectTitleBtn = document.createElement('button');
        projectIndexString = i.toString().padStart(2, '0');
        projectTitleBtn.className = "BtnProject" + " " + "CreatedProject" + " _" + projectIndexString;
        projectTitleBtn.innerHTML = projects[i];
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
function addProjectTodoItemHTML(projects, projectsTodoList) {

    const projectTitles = document.querySelector('.TodoContainer');
    projectIndex = getProjectIndex(projects, currentProject);

    let todoCheckboxRow = document.createElement('div');
    let todoCounter = projectsTodoList[projectIndex].length;
    todoCounter -= 1;
    projectIndexString = projectIndex.toString().padStart(2, '0');
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
    todoPriority.className = "TodoPriority";
    todoPriority.innerHTML = "priority: ";
    let todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.className = 'TodoPriorityValue' + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .PriorityValue ._00 ._001;
    let todoSelectOptionLow = document.createElement('option');
    todoSelectOptionLow.value = "low";
    todoSelectOptionLow.innerHTML = "low";
    let todoSelectOptionMid = document.createElement('option');
    todoSelectOptionMid.value = "mid";
    todoSelectOptionMid.innerHTML = "mid";
    let todoSelectOptionHeigh = document.createElement('option');
    todoSelectOptionHeigh.value = "heigh";
    todoSelectOptionHeigh.innerHTML = "heigh";
    let todoDelete = document.createElement('button');
    todoDelete.innerHTML = 'X';
    todoDelete.className = "BtnTodoDelete" + " " + "_" + projectIndexString + " " + "_" + todoCounterString; // .BtnTodoDelete ._00 ._001


    projectTitles.appendChild(todoCheckboxRow);
    todoCheckboxRow.appendChild(todoInputCheckbox);
    todoCheckboxRow.appendChild(todoInputText);
    todoCheckboxRow.appendChild(todoPriority);
    todoPrioritySelect.appendChild(todoSelectOptionLow);
    todoPrioritySelect.appendChild(todoSelectOptionMid);
    todoPrioritySelect.appendChild(todoSelectOptionHeigh);
    todoPriority.appendChild(todoPrioritySelect);
    todoCheckboxRow.appendChild(todoDelete);
};

function resetTodoCount() {
    let allTodoRows = document.querySelectorAll('.TodoCheckbox');
    let allTodoText = document.querySelectorAll('.TodoCheckboxText');
    let allTodoCheckbox = document.querySelectorAll('.Checkbox');
    let allTodoPrio = document.querySelectorAll('.TodoPriorityValue');
    let allTodoDelete = document.querySelectorAll('.BtnTodoDelete');


    index = getProjectIndex(projects, currentProject);
    for (let i = 0; i < allTodoText.length; i++) {
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
    index = getProjectIndex(projects, currentProject);
    for (let i = 0; i < projectsTodoList[index].length; i++) {
        addProjectTodoItemHTML(projects, projectsTodoList);
    }
};

function setTodoValues() {
    index = getProjectIndex(projects, currentProject);
    projectIndex = '_' + index.toString().padStart(2, '0'); //_00

    let todoCount = projectsTodoList[index].length;
    for (let i = 0; i < todoCount; i++) {
        iString = '._' + i.toString().padStart(3, '0'); //_000
        let vclassName = '.TodoCheckboxText' + '.' + projectIndex + iString;
        console.log(vclassName);
        let todoText = document.querySelector(vclassName);
        console.log(todoText);
        todoText.value = projectsTodoList[index][i];
        // text input
        todoText.disabled = projectsTodoListDisable[index][i];
        // checkbox
        let vCheckbox = '.Checkbox' + '.' + projectIndex + iString;
        console.log('vCheckbox  =  ' + vCheckbox);
        let checkboxChecked = document.querySelector(vCheckbox);
        checkboxChecked.checked = projectsTodoListChecked[index][i];
        // Prio
        let vPrio = '.TodoPriorityValue' + '.' + projectIndex + iString;
        let prioItem = document.querySelector(vPrio);
        prioItem.value = projectsTodoListPrio[index][i];
        switch (projectsTodoListPrio[index][i]) {
            case 'low':
                prioItem.style.backgroundColor = '#f3f363'; // yellow
                break;
            case 'mid':
                prioItem.style.backgroundColor = '#f3be63'; // orange
                break;
            case 'heigh':
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
            projectsTodoListPrio[index][count] = 'low';
            break;
        case 'mid':
            item.style.backgroundColor = '#f3be63'; // orange
            projectsTodoListPrio[index][count] = 'mid';
            break;
        case 'heigh':
            item.style.backgroundColor = '#f93434'; // red
            projectsTodoListPrio[index][count] = 'heigh';
            break;
    }
}

function projectPriorityColor(item) {
    let selectedValue = item.value;
    switch (selectedValue) {
        case 'low':
            item.style.backgroundColor = '#f3f363'; // yellow
            projectPrio[index] = 'low';
            break;
        case 'mid':
            item.style.backgroundColor = '#f3be63'; // orange
            projectPrio[index] = 'mid';
            break;
        case 'heigh':
            item.style.backgroundColor = '#f93434'; // red
            projectPrio[index] = 'heigh';
            break;
    }
}

function removeProjectSideBar(project) { // --> delete project
    item = project.closest('.ContainerBtnProject');
    item.remove();
}

function removeProjectVars(project) {
    itemName = project.innerHTML;
    itemIndex = getClassnameProjectIndex(project);
    projects.splice(itemIndex, 1);
    projectDescription.splice(itemIndex, 1);
    projectDate.splice(itemIndex, 1);
    projectPrio.splice(itemIndex, 1);
    projectsTodoList.splice(itemIndex, 1);
    projectsTodoListChecked.splice(itemIndex, 1);
    projectsTodoListDisable.splice(itemIndex, 1);
    projectsTodoListPrio.splice(itemIndex, 1);
}

function createProjectFunctions() {
    // Create new project 
    createProjectHTML();
    // Create todo item(s)
    createProjectTodos();
    // reset todo item counts
    resetTodoCount();
    // place values
    setTodoValues();
    // set project Title 
    const projectTitle = document.querySelector('.ProjectTitleText');
    projectIndex = projects.indexOf(currentProject);
    projectName = projects[projectIndex];
    projectTitle.value = projectName;
    // set project Description 
    const projectDescriptionValue = document.querySelector('.DescriptionText');
    projectDescriptionValue.value = projectDescription[projectIndex];
    // set project Date 
    const projectDateValue = document.querySelector('.Date');
    projectDateValue.value = projectDate[projectIndex];
    // set project prio 
    const projectPrioValue = document.querySelector('.PriorityValue');
    projectPrioValue.value = projectPrio[projectIndex];
    // set project prio color
    projectPriorityColor(projectPrioValue);
}

/////////////////////////////////////////////////////////////////////////// 
// Javascript html interaction//
/////////////////////////////////////////////////////////////////////////// 

let sideBar = document.querySelector('.SideBar');
sideBar.addEventListener("click", (event) => {
    if (event.target.classList.contains('CreatedProject')) {
        // Delete html current project
        deleteProject(currentProject);
        // Change currentProject 
        currentProject = event.target.innerHTML;
        createProjectFunctions();
    } else if (event.target.classList.contains('BtnDeleteProject')) {
        closetProject = event.target.closest('.ContainerBtnProject');
        createdProject = closetProject.querySelector('.CreatedProject');
        projectName = createdProject.innerHTML;
        if (currentProject == projectName) {
            removeProjectVars(event.target);
            removeProjectSideBar(event.target);
            currentProject = projects[projects.length - 1];
            deleteProject(); // Delete project from all variables
            createProjectFunctions(); // Create HTML from latest project
        } else {
            removeProjectVars(event.target);
            removeProjectSideBar(event.target);
        }
    }
});



const BtnCreateProject = document.querySelector('.BtnCreatePlus');
BtnCreateProject.addEventListener("click", (event) => {
    const BtnCreateTitle = document.querySelector('.BtnCreateText');
    projectTitle = BtnCreateTitle.value;
    if (!(projectTitle) == "") {
        if (!(projects.includes(projectTitle))) {
            // Create new project 
            addProject(projectTitle);
            BtnCreateTitle.value = ""; // reset btn value 
            // Delete html current proejct
            deleteProject(currentProject);
            // Set current project
            currentProject = projects[projects.length - 1];
            // Add todo item "" to new project list
            addProjectTodo(projectsTodoList);
            // Create new project 
            createProjectHTML();
            // Create todo item
            addProjectTodoItemHTML(projects, projectsTodoList);
            const projectTitleText = document.querySelector('.ProjectTitleText');
            projectIndex = projects.indexOf(currentProject);
            projectName = projects[projectIndex];
            projectTitleText.value = projectName;

        }
        else {
            // do nothing
        }
    }
    else {

    }
});

const main = document.querySelector('.Main');
main.addEventListener('click', (event) => {
    // create todo row
    if (event.target.classList.contains('BtnCreateTodo')) {
        addProjectTodo(projectsTodoList)
        addProjectTodoItemHTML(projects, projectsTodoList);
    }
    // delete todo row
    else if (event.target.classList.contains('BtnTodoDelete')) {
        // Voer hier je acties uit voor de delete button
        // delete HTML and from projectTodoList
        const todoCheckbox = event.target.closest('.TodoCheckbox');
        if (todoCheckbox) {
            rowIndex = getClassnameCountIndex(event.target);
            index = getProjectIndex(projects, currentProject);
            projectsTodoList[index].splice(rowIndex, 1);
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
        index = getProjectIndex(projects, currentProject);
        count = getClassnameCountIndex(checkbox);
        if (checkbox.checked) {
            todoCheckboxText.disabled = true;
            todoPriorityBox.disabled = true;
            projectsTodoListChecked[index][count] = true;
            projectsTodoListDisable[index][count] = true;
        }
        else if (checkbox.checked == false) {
            todoCheckboxText.disabled = false;
            todoPriorityBox.disabled = false;
            projectsTodoListChecked[index][count] = false;
            projectsTodoListDisable[index][count] = false;
        }
    }
});


main.addEventListener('change', (event) => {
    index = getProjectIndex(projects, currentProject);
    // priority select color
    if (event.target.classList.contains('TodoPriorityValue')) {
        console.log('Waarde aagepast');
        let TodoPriorityValue = event.target;
        count = getClassnameCountIndex(event.target);
        console.log('index = ' + index + 'itemCount = ' + count);
        todoPriorityColor(TodoPriorityValue); //
    }
    // todo text values add to projectTodoList 
    else if (event.target.classList.contains('TodoCheckboxText')) {
        textBox = event.target;
        textBoxClassName = textBox.className.split('_');
        textBoxIndexString = textBoxClassName[textBoxClassName.length - 1];
        textBoxIndex = Number(textBoxIndexString);
        textValue = textBox.value;
        projectsTodoList[index][textBoxIndex] = textValue;
        console.log(projectsTodoList);
    } else if (event.target.classList.contains('DescriptionText')) {
        textValue = event.target.value;
        projectDescription[index] = textValue;
    } else if (event.target.classList.contains('Date')) {
        dateValue = event.target.value;
        projectDate[index] = dateValue;
    } else if (event.target.classList.contains('PriorityValue')) {
        prioItem = event.target;
        prioValue = event.target.value;
        projectPrio[index] = prioValue;
        projectPriorityColor(prioItem);
    } else if (event.target.classList.contains('ProjectTitleText')) {
        projectTitle = event.target.value;
        projects[index] = projectTitle;
        projectIndexString = index.toString().padStart(2, '0');
        itemName = '.CreatedProject' + "._" + projectIndexString;
        const sideBarProjectText = document.querySelector(itemName);
        sideBarProjectText.innerHTML = projectTitle;
    }
});
