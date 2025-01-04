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
            projectController(nameProject, descriptionProject, positionProject);
        });
    }

    //Populate all projects in the display by using DOM after receiving data from showProjects
    const projectController = (nameProject, descriptionProject, positionProject) => {
        console.log("POSITION", positionProject);

        //Container for individual cards
        const projectCard = document.createElement("div");
        projectCard.classList = "projectCard";
        //projectCard.id = positionProject;
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
        toDoListCard.textContent = "TODO LENGHT";
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


    return {
        projectController, showProjects
    };

}