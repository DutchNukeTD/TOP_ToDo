import * as Function from "/todoFunctions";

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////  Javascript html interaction  //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
  
  
let allProjectsBtn = document.querySelector('.AllProjects');
allProjectsBtn.addEventListener("click", (event) => {
    // Delete all current projects on screen
    Function.deleteProjects();
    // Create all projects 
    for (let i=0; i<Project.getProjects().length; i++){
        Project.setCurrentProject(Project.getProject(i));
        Function.createProjectHTML();
        let projectIndex = i.toString().padStart(2, '0');
  
        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
        ProjectTitleText.value = Project.getCurrentProject();
        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
        discriptionText.value = Project.getProjectDescription(i);
        let dueDateDate = document.querySelector('.Date._'+projectIndex);
        dueDateDate.value = Project.getProjectDate(i);
        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
        prioritySelect.value = Project.getProjectPrio(i); 
        Function.projectPriorityColor();
  
        // createProjectTodos();
        Function.createProjectTodos();
        // set todo values  
        Function.setTodoValues();
    }
    // localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
});
  
let btnDates = document.querySelectorAll('.BtnProject');
btnDates.forEach((item) => {
    item.addEventListener("click", (event) => {
        // Delete all current projects on screen
        Function.deleteProjects();
        // Create all projects 
        // Today
        // Get Date of today
        let todayDate = Function.getDates();
  
        if (event.target.innerHTML == 'Today') {
  
            for (let item = 0; item < Project.getProjectsDates().length; item++) {
                if (Project.getProjectDate(item) == todayDate) {
                    Project.setCurrentProject(Project.getProjects()[item]);
                    Function.createProjectHTML();
                    projectIndex = item.toString().padStart(2, '0'); // '00'
            
                    let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                    ProjectTitleText.value = Project.getProjects()[item]; // '0'
                    let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                    discriptionText.value = Project.getProjectDescription(item);
                    let dueDateDate = document.querySelector('.Date._'+projectIndex);
                    dueDateDate.value = Project.getProjectDate(item);
                    let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                    prioritySelect.value = Project.getProjectPrio(item); 
                    Function.projectPriorityColor();
            
                    // createProjectTodos();
                    Function.createProjectTodos();
                    // set todo values  
                    Function.setTodoValues();
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
                        Function.createProjectHTML();
                        projectIndex = item.toString().padStart(2, '0');
                
                        let ProjectTitleText = document.querySelector('.ProjectTitleText._'+projectIndex);
                        ProjectTitleText.value = Project.getProjects()[item];
                        let discriptionText = document.querySelector('.DescriptionText._'+projectIndex);
                        discriptionText.value = Project.getProjectDescription(item);
                        let dueDateDate = document.querySelector('.Date._'+projectIndex);
                        dueDateDate.value = Project.getProjectDate(item);
                        let prioritySelect = document.querySelector('.PriorityValue._'+projectIndex);
                        prioritySelect.value = Project.getProjectPrio(item); 
                        Function.projectPriorityColor();
                
                        // createProjectTodos();
                        Function.createProjectTodos();
                        // set todo values  
                        Function.setTodoValues();
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
        Function.deleteProjects(Project.getCurrentProject());
        // Change Project.currentProject 
        Project.setCurrentProject(event.target.innerHTML);
        Function.createProjectFunctions();
    } else if (event.target.classList.contains('BtnDeleteProject')) {
        closetProject = event.target.closest('.ContainerBtnProject');
        createdProject = closetProject.querySelector('.CreatedProject');
        projectName = createdProject.innerHTML;
        if (Project.setCurrentProject == projectName) {
            Function.removeProjectVars(event.target);
            Function.removeProjectSideBar(event.target);
            Project.setCurrentProject(Project.getProjects(Project.getProjects().length - 1));
            Function.deleteProjects(); // Delete project from all variables
            if (Project.getProjects().length >= 1) {
                Function.createProjectFunctions(); // Create HTML from latest project
            }
        } else {
            Function.removeProjectVars(event.target);
            Function.removeProjectSideBar(event.target);
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
            Function.deleteProjects();
            // Set current project
            Project.setCurrentProject(Project.getProject(Project.getProjects().length - 1));
            // Add todo item "" to new project list
            // addProjectTodo(Project.projectsTodoList, event.target.className);
            // Create new project 
            Function.createProjectHTML();
            // Create todo item
            Function.addProjectTodoItemHTML(Project.getProjects(), Project.getProjectsTodoListAll());
            const projectTitleText = document.querySelector('.ProjectTitleText');
            projectIndex = Project.getProjects().indexOf(Project.getCurrentProject());
            projectName = Project.getProject(projectIndex);
            projectTitleText.value = projectName;
            Function.todoPriorityColor();
  
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
    projectIndex = Function.getClassnameProjectIndex(event.target);
    index = Project.getProjectsTodoListAll().length;
    
    if (event.target.classList.contains('BtnCreateTodo')) {
        let todoIndex = Project.getProjectsTodoListProject(projectIndex).length -1
        console.log('projectIndex = ' + projectIndex);
        console.log('todoIndex = ' + todoIndex);
        Function.addProjectTodo(Project.getProjectsTodoListAll(), event.target.className);
        Function.addProjectTodoItemHTML(Project.getProjects(), event.target.className); 
        Function.todoPriorityColor();
        localStorage.setItem('projectObj', JSON.stringify(Project.getAll()));
    }
    // delete todo row
    else if (event.target.classList.contains('BtnTodoDelete')) {
        // Voer hier je acties uit voor de delete button
        // delete HTML and from projectTodoList
        const todoCheckbox = event.target.closest('.TodoCheckbox');
        if (todoCheckbox) {
            rowIndex = Function.getClassnameCountIndex(event.target);
            // index = getProjectIndex(); // --> current project error with all projects
            project = Function.getClassnameProjectIndex(event.target); // checks project number from target. 
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
        Function.resetTodoCount();
    }
    // checkbox
    else if (event.target.classList.contains('Checkbox')) {
        checkbox = event.target;
        const todoContainer = checkbox.closest('.TodoCheckbox');
        const todoCheckboxText = todoContainer.querySelector('.TodoCheckboxText');
        const todoPriorityBox = todoContainer.querySelector('.TodoPriorityValue');
        index = Function.getClassnameProjectIndex(checkbox);
        count = Function.getClassnameCountIndex(checkbox);
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
        count = Function.getClassnameCountIndex(event.target);
        Project.setProjectsTodoListPrioItem(index, count, TodoPriorityValue.value);
        todoPriorityColor();
    } else if (event.target.classList.contains('PriorityValue')) {
        let prioItem = event.target;
        prioValue = event.target.value;
        console.log('projectIndex = ' + index);
        console.log('Setting priority:', index, prioValue);  // Nieuwe logging
        Project.setProjectPrio(index, prioValue);
        Function.projectPriorityColor();
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
    Function.getLocalData(); 
    // --> set Todo values
    Function.todoPriorityColor();
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

    Function.print();
    });
});

Function.print();
  
