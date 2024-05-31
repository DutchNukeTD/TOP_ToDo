let projects = ['Project 1'];
let projectsTodos = [""];
console.log('Hello world!');

function addProject(title) {
    projects.push(title);
    addProjectHTML(projects);
};


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
function addProjectTodoItemHTML(projectTodoList){

    const projectTitles = document.querySelector('.TodoContainer');
    let todoCheckboxRow = document.createElement('div');
    todoCheckboxRow.className = "TodoCheckbox";
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


    projectTitles.appendChild(todoCheckboxRow);
    todoCheckboxRow.appendChild(todoInputCheckbox);
    todoCheckboxRow.appendChild(todoInputText);
    todoCheckboxRow.appendChild(todoPriority);
    todoPrioritySelect.appendChild(todoSelectOptionLow);
    todoPrioritySelect.appendChild(todoSelectOptionMid);
    todoPrioritySelect.appendChild(todoSelectOptionHeigh);
    todoPriority.appendChild(todoPrioritySelect);
};


const BtnCreateProject = document.querySelector('.BtnCreatePlus');
BtnCreateProject.addEventListener("click", (event) => {
    const BtnCreateTitle = document.querySelector('.BtnCreateText');
    projectTitle = BtnCreateTitle.value;
    if (!(projectTitle) == "") {
        if (!(projects.includes(projectTitle))) {
            addProject(projectTitle);
            BtnCreateTitle.value = "";
        } 
        else {
        
        }
    }
    else {

    }
});
