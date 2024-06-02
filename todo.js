let projects = ['Default'];
let currentProject = 'Default';
let projectsTodoList = [[""]];
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
    } 
    else {
        projectsTodoList[projectIndex].push("");
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
        projectTitleBtn.className = "BtnProject" + " " + "BtnProject" + "_" + i;
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
    projectIndex = projectIndex.toString().padStart(2, '0');
    todoCounter = todoCounter.toString().padStart(3, '0');
    todoCheckboxRow.className = "TodoCheckbox" + " " + "_"+projectIndex + " " + "_"+todoCounter; // .TodoCheckbox ._00 ._002
    let todoInputCheckbox = document.createElement('input');
    todoInputCheckbox.type = "checkbox";
    let todoInputText= document.createElement('input');
    todoInputText.type = "text";
    todoInputText.size = "45";
    let todoPriority = document.createElement('div');
    todoPriority.innerHTML = "priority: ";
    let todoPrioritySelect = document.createElement('select');
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
    todoDelete.className = "BtnTodoDelete" + " " + "_" +projectIndex + " " + "_"+todoCounter; // .BtnTodoDelete ._00 ._002


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

/////////////////////////////////////////////////////////////////////////// 
// Javascript html interaction//
/////////////////////////////////////////////////////////////////////////// 


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

const todoContainer = document.querySelector('.ToDos');
todoContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('BtnCreateTodo')) {
        addProjectTodo(projectsTodoList)
        addProjectTodoItemHTML(projects, projectsTodoList);
    }
    else if (event.target.classList.contains('BtnTodoDelete')) {
        // Voer hier je acties uit voor de delete button
        const todoCheckbox = event.target.closest('.TodoCheckbox');
        if (todoCheckbox){
            todoCheckbox.remove();
        }
    }
});
