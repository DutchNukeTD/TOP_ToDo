let projects = ['Default'];
let currentProject = 'Default';
let projectsTodoList = [[""]];
let projectsTodoListChecked = [[""]];
let projectsTodoListDisable = [[""]];
let projectsTodoListPrio = [["low"]];

console.log('Hello world!');

function addProject(title) {
    projects.push(title);
    addProjectHTML(projects);
    return title;
};

function getProjectIndex(projects, currentProject){
    projectIndex = projects.indexOf(currentProject);
    return projectIndex;
}

function addProjectTodo(projectsTodoList) {
    getProjectIndex(projects, currentProject);
    // If array index doesn't exist yet create new one. 
    if (projectsTodoList[projectIndex] === undefined){
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

function deleteProject(currentProject){
    const projectCard = document.querySelector('.ProjectCard');
    projectCard.remove();
}

function createProjecHTML(){
    const main = document.querySelector('.Main');

    let projectCard = document.createElement('div');
    projectCard.className = 'ProjectCard';
    let projectTitle = document.createElement('div');
    projectTitle.className = 'ProjectTitle';
    let projectTitleText = document.createElement('input');
    projectTitleText.className = 'ProjectTitleText';
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

    projectCard.appendChild(projectInfo);
    projectInfo.appendChild(projectDueDate);
    projectDueDate.appendChild(dueDateText);
    projectDueDate.appendChild(dueDateDiv);
    dueDateDiv.appendChild(dueDateDate);

    let projectPriority = document.createElement('div');
    projectPriority.className = 'ProjectPriority';
    let priorityText= document.createElement('div');
    priorityText.innerHTML = 'Priority: ';
    let prioritySelect= document.createElement('select');
    prioritySelect.innerHTML = 'Priority: ';
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
    let projectTodoContainer= document.createElement('div');
    projectTodoContainer.className = 'TodoContainer';

    projectCard.appendChild(projectToDos);
    projectToDos.appendChild(projectTodoContainer);

    let projectTodoAdd = document.createElement('div');
    projectTodoAdd.className = 'TodoAdd';
    let btnCreateTodo= document.createElement('button');
    btnCreateTodo.className = 'BtnCreateTodo';
    btnCreateTodo.innerHTML = '+';

    projectToDos.appendChild(projectTodoAdd);
    projectTodoAdd.appendChild(btnCreateTodo);

}

// Add new project HTML
function addProjectHTML(projects){

    const projectTitles = document.querySelector('.ContainerProjects');
    
    // Remove all titles
    while (projectTitles.hasChildNodes()){
        projectTitles.removeChild(projectTitles.firstChild);
    }
    // Add all titles 
    for (let i=0; i< projects.length; i++) {
        console.log(projects[i])
        let projectTitleSideBar = document.createElement('div');
        projectTitleSideBar.className = "ContainerBtnProject";
        let projectTitleBtn = document.createElement('button');
        projectTitleBtn.className = "BtnProject" + " " + "CreatedProject" + " " + "BtnProject" + "_" + i;
        projectTitleBtn.innerHTML = projects[i];

        projectTitles.appendChild(projectTitleSideBar);
        projectTitleSideBar.appendChild(projectTitleBtn);
        
    }
};

// Add extra row Todo Item HTML
// Needs to know what project it's on. --> need to create project todos array. 
function addProjectTodoItemHTML(projects, projectsTodoList){

    const projectTitles = document.querySelector('.TodoContainer');
    projectIndex = getProjectIndex(projects, currentProject);

    let todoCheckboxRow = document.createElement('div');
    let todoCounter = projectsTodoList[projectIndex].length;
    todoCounter -= 1; 
    projectIndexString = projectIndex.toString().padStart(2, '0');
    todoCounterString = todoCounter.toString().padStart(3, '0');
    todoCheckboxRow.className = "TodoCheckbox" + " " + "_"+projectIndexString + " " + "_"+todoCounterString; // .TodoCheckbox ._00 ._001
    let todoInputCheckbox = document.createElement('input');
    todoInputCheckbox.type = "checkbox";
    todoInputCheckbox.className = "Checkbox"+ " " + "_"+projectIndexString + " " + "_"+todoCounterString; // .Checkbox ._00 ._001
    let todoInputText= document.createElement('input');
    todoInputText.type = "text";
    todoInputText.size = "45";
    todoInputText.className = "TodoCheckboxText"+ " " + "_"+projectIndexString + " " + "_"+todoCounterString; // .TodoCheckboxText ._00 ._001
    let todoPriority = document.createElement('div');
    todoPriority.className = "TodoPriority";
    todoPriority.innerHTML = "priority: ";
    let todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.className = 'PriorityValue' + " " + "_" +projectIndexString + " " + "_"+todoCounterString; // .PriorityValue ._00 ._001;
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
    todoDelete.className = "BtnTodoDelete" + " " + "_" +projectIndexString + " " + "_"+todoCounterString; // .BtnTodoDelete ._00 ._001


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

function resetTodoCount(){
    let allTodoRows = document.querySelectorAll('.TodoCheckbox');
    let allTodoText = document.querySelectorAll('.TodoCheckboxText');

    index = getProjectIndex(projects, currentProject);
    for(let i=0; i < allTodoText.length; i++) {
        // allTodosRows
        split = allTodoRows[i].className.split('_'); 
        split[1] = index.toString().padStart(2, '0'); //_00
        split[2] = i.toString().padStart(3, '0'); //_000
        allTodoRows[i].className = split.join('_'); 
        // allTodoText
        split = allTodoText[i].className.split('_'); 
        split[1] = index.toString().padStart(2, '0'); //_00
        split[2] = i.toString().padStart(3, '0'); //_000
        allTodoText[i].className = split[0]+"_"+split[1]+' _'+split[2]; // ._00._000
    }
};

function getClassnameProjectIndex(todoItem){
    projectIndex = todoItem.className.split('_')[1];
    return Number(projectIndex);
}

function getClassnameCountIndex(todoItem){
    countIndex = todoItem.className.split('_')[1];
    return Number(countIndex);
}


function createProjectTodos(){
    index = getProjectIndex(projects, currentProject);
    for (let i=0; i<projectsTodoList[index].length; i++){
        addProjectTodoItemHTML(projects, projectsTodoList);
    }
};

function setTodoValues(){
    index = getProjectIndex(projects, currentProject);
    projcetIndex = '_' + index.toString().padStart(2, '0'); //_00

    let todoCount = projectsTodoList[index].length;
    for (let i=0; i < todoCount; i++){
        iString = '._' + i.toString().padStart(3, '0'); //_000
        let vclassName = '.TodoCheckboxText' + '.' + projcetIndex + iString;
        console.log(vclassName);
        let todoText = document.querySelector(vclassName);
        console.log(todoText);
        todoText.value = projectsTodoList[index][i];
        // text input
        todoText.disabled = projectsTodoListDisable[index][i];
        // checkbox
        let vCheckbox = '.Checkbox' + '.' + projcetIndex + iString;
        let checkboxChecked = document.querySelector(vCheckbox);
        checkboxChecked.checked = projectsTodoListChecked[index][i];
        // Prio
        let vPrio= '.PriorityValue' + '.' + projcetIndex + iString;
        let prioItem = document.querySelector(vPrio);
        prioItem.value = projectsTodoListPrio[index][i];
        switch (projectsTodoListPrio[index][i]){
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


/////////////////////////////////////////////////////////////////////////// 
// Javascript html interaction//
/////////////////////////////////////////////////////////////////////////// 

let sideBar = document.querySelector('.SideBar');
sideBar.addEventListener("click", (event) => {
    if (event.target.classList.contains('CreatedProject')){
        console.log('This project is created, switch project!');
        console.log(event.target.innerHTML);
        // Delete html current proejct
        deleteProject(currentProject);
        // Change currentPrject 
        currentProject = event.target.innerHTML;
        // Create new project 
        createProjecHTML();
        // Create todo item(s)
        createProjectTodos()
        // reset todo item counts
        resetTodoCount();
        // place values
        setTodoValues(); 
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
            currentProject = projects[projects.length -1];
            // Add todo item "" to new project list
            addProjectTodo(projectsTodoList);
            // Create new project 
            createProjecHTML();
            // Create todo item
            addProjectTodoItemHTML(projects, projectsTodoList);
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
        if (todoCheckbox){
            textRow = event.target;
            textRowClassName = textRow.className.split('_');
            textRowIndexString = textRowClassName[textRowClassName.length -1];
            textRowIndex = Number(textRowIndexString); 
            index = getProjectIndex(projects, currentProject);
            projectsTodoList[index].splice(textRowIndex, 1);
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
        const todoPriorityBox = todoContainer.querySelector('.PriorityValue');
        index = getProjectIndex(projects, currentProject);
        count = getClassnameCountIndex(checkbox);
        if (checkbox.checked){
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
    // priority select color
    if (event.target.classList.contains('PriorityValue')) {
        console.log('Waarde aagepast');
        let priorityValue = event.target;
        let selectedValue = priorityValue.value;
        index = getProjectIndex(projects, currentProject);
        count = getClassnameCountIndex(event.target);
        switch (selectedValue){
            case 'low':
                priorityValue.style.backgroundColor = '#f3f363'; // yellow
                projectsTodoListPrio[index][count] = 'low';
                break;
            case 'mid':
                priorityValue.style.backgroundColor = '#f3be63'; // orange
                projectsTodoListPrio[index][count] = 'mid';
                break;
            case 'heigh':
                priorityValue.style.backgroundColor = '#f93434'; // red
                projectsTodoListPrio[index][count] = 'heigh';
                break;
        }
    }
    // todo text values add to projectTodoList 
    else if (event.target.classList.contains('TodoCheckboxText')) {
        textBox = event.target;
        textBoxClassName = textBox.className.split('_');
        textBoxIndexString = textBoxClassName[textBoxClassName.length -1];
        textBoxIndex = Number(textBoxIndexString); 
        index = getProjectIndex(projects, currentProject); 
        textValue = textBox.value;
        projectsTodoList[index][textBoxIndex] = textValue;
        console.log(projectsTodoList); 
    }
});
