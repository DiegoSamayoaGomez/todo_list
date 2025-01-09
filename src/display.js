import "./style.css";
import { todosFunc } from "./todos.js";

export const displayFunc = function displayFunc() {
    //Instance of the todos and project module
    const instanceofTodos = todosFunc();
    // projects -> todos -> display

    //DUMMY CONTENT
    instanceofTodos.addProjectToCollection("project 1 TODO", "description 1", []);
    instanceofTodos.addProjectToCollection("project 2", "description 2", []);
    instanceofTodos.addProjectToCollection("project 3", "description 3", []);
    instanceofTodos.addProjectToCollection("project 4", "description 4", []);
    instanceofTodos.addProjectToCollection("project 5", "description 5", []);
    instanceofTodos.addProjectToCollection("project 6", "description 6", []);

    instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
    instanceofTodos.addTodoToProject(0, "todo 02", "description todo 02", "26/11/2024", 4);

    instanceofTodos.addTodoToProject(1, "todo 11", "description todo 11", "26/11/2024", 3);
    instanceofTodos.addTodoToProject(1, "todo 12", "description todo 12", "26/11/2024", 2);

    instanceofTodos.addTodoToProject(2, "todo 21", "description todo 21", "26/11/2024", 1);

    instanceofTodos.addTodoToProject(3, "todo 31", "description todo 31", "26/11/2024", 5);
    instanceofTodos.addTodoToProject(3, "todo 32", "description todo 32", "26/11/2024", 5);

    instanceofTodos.addTodoToProject(4, "todo 41", "description todo 41", "26/11/2024", 1);
    instanceofTodos.addTodoToProject(4, "todo 42", "description todo 42", "26/11/2024", 1);


    //CREATE A TITLE AND A BUTTON TO CREATE NEW CARDS
    //Create a DOM element and assign the title
    const title = document.querySelector("#title");

    //Assign a name to the title
    const paragraphTitle = document.createElement("p");
    paragraphTitle.textContent = "Projects";

    title.appendChild(paragraphTitle);

    //Create a DOM element of the main DIV container
    const container = document.querySelector("#container");

    //Button that creates a new project
    const newProjectBtn = document.createElement("button");
    newProjectBtn.classList = "newProjectBtn";
    newProjectBtn.textContent = "New";

    container.appendChild(newProjectBtn);

    //Container for all cards
    const cards = document.createElement("div");
    cards.classList = "cards";

    container.appendChild(cards);


    // Iterate the array of objects and send it to the controller
    const showProjects = () => {
        instanceofTodos.getProjectArr().forEach((element, index) => {
            let nameProject = element.nameProject;
            let descriptionProject = element.descriptionProject;
            let toDoList = element.toDoList;
            let positionProject = index;
            projectController(nameProject, descriptionProject, toDoList.length, positionProject);
        });
    }

    //Populate all projects in the display by using DOM after receiving data from showProjects
    const projectController = (nameProject, descriptionProject, todoList, positionProject) => {


        //Container for individual cards
        const projectCard = document.createElement("div");
        projectCard.classList = "projectCard";
        projectCard.id = positionProject;
        cards.appendChild(projectCard);

        //Information of each card
        const projectInfo = document.createElement("div");
        projectInfo.classList = "projectInfo";

        projectCard.appendChild(projectInfo);

        //ADD HERE TITLE, DESCRIPTION, TODOS
        const nameProjectCard = document.createElement("h3");
        nameProjectCard.classList = "nameProjectCard";
        nameProjectCard.textContent = nameProject;
        projectInfo.appendChild(nameProjectCard);

        const descriptionProjectCard = document.createElement("p");
        descriptionProjectCard.classList = "descriptionProjectCard";
        descriptionProjectCard.textContent = descriptionProject;
        projectInfo.appendChild(descriptionProjectCard);


        const toDoListCard = document.createElement("p");
        toDoListCard.classList = "toDoListCard";
        toDoListCard.textContent = todoList;
        projectInfo.appendChild(toDoListCard);


        //Options for each card
        const projectOptions = document.createElement("div");
        projectOptions.classList = "projectOptions";
        projectCard.appendChild(projectOptions);

        //ADD HERE UPDATE AND DELETE BUTTONS
        const updateBtn = document.createElement("button");
        updateBtn.classList = "updateBtn";
        updateBtn.textContent = "Update";
        projectOptions.appendChild(updateBtn);


        const deleteBTn = document.createElement("button");
        deleteBTn.classList = "deleteBTn";
        deleteBTn.textContent = "Delete";
        projectOptions.appendChild(deleteBTn);
    };


    // Draw form
    const newProjectForm = () => {
        //Acces modal element
        const projectModal = document.querySelector("#showModal");
        //Create form
        const projectForm = document.createElement("form");
        //Create UL to give design
        const ulForm = document.createElement("ul");
        //Create label and input element for project name
        const ilNameProject = document.createElement("li");
        const nameProjectLabel = document.createElement("label");
        nameProjectLabel.textContent = "Project Name"
        nameProjectLabel.htmlFor = "nameProject";

        const nameProjectInput = document.createElement("input");
        nameProjectInput.id = "nameProject";
        nameProjectInput.setAttribute("type", "text");
        nameProjectInput.setAttribute("name", "name");
        nameProjectInput.setAttribute("required", "required");

        //Append label and input for project name to LI
        ilNameProject.appendChild(nameProjectLabel);
        ilNameProject.appendChild(nameProjectInput);

        //Append IL of project name to UL
        ulForm.appendChild(ilNameProject);

        //Create label and input element for project description

        const ilDescripctionProject = document.createElement("li");
        const descriptionProjectLabel = document.createElement("label");
        descriptionProjectLabel.textContent = "Description"
        descriptionProjectLabel.htmlFor = "descriptionProject";

        const descripctionProjectInput = document.createElement("textArea");
        descripctionProjectInput.id = "descriptionProject";
        descripctionProjectInput.setAttribute("type", "text");
        descripctionProjectInput.setAttribute("name", "description");
        descripctionProjectInput.setAttribute("required", "required");

        //Append label and input for project name to LI
        ilDescripctionProject.appendChild(descriptionProjectLabel);
        ilDescripctionProject.appendChild(descripctionProjectInput);

        //Append LI of project name to UL
        ulForm.appendChild(ilDescripctionProject);

        //Append UL to form
        projectForm.appendChild(ulForm);

        //Append form to modal dialog
        projectModal.appendChild(projectForm);

    };

    // draw a modal
    const newProjectModal = () => {
        //Convert element into a DOM element
        const projectModal = document.querySelector("#showModal");
        //Clear screen
        projectModal.textContent = "";
        //Create title element
        const projectInformation = document.createElement("h2");
        projectInformation.textContent = "Project Information";

        const closeInformation = document.createElement("p");
        closeInformation.textContent = "Press ESC to close without saving";
        //Attach it to the parent element
        projectModal.appendChild(projectInformation);
        projectModal.appendChild(closeInformation);

        //DRAW FORM
        newProjectForm();
        //Open modal when the function is called
        projectModal.showModal();
    };

    newProjectBtn.addEventListener("click", () => {
        //Call function and open that modal dialog
        newProjectModal();
    });

    return {
        projectController, showProjects
    };

}