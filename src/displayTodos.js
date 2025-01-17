import { todosFunc } from "./todos.js";

const instanceofTodos = todosFunc();
/*
instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
instanceofTodos.addTodoToProject(0, "todo 02", "description todo 02", "26/11/2024", 4);
instanceofTodos.addTodoToProject(0, "todo 02", "description todo 02", "26/11/2024", 4);
*/

export const displayTodosFunc = function displayTodosFunc(positionProject) {
    //Create a DOM element of the main DIV container
    const container = document.querySelector("#container");
    container.textContent = "";
    const title = document.querySelector("#title");
    title.textContent = "";

    //Assign a name to the title
    const paragraphTitle = document.createElement("p");
    paragraphTitle.textContent = "Todos";

    title.appendChild(paragraphTitle);

    //Button that creates a new project
    const newTodoBtn = document.createElement("button");
    newTodoBtn.classList = "newTodoBtn";
    newTodoBtn.textContent = "New";
    //Button which sends back the use to the main page
    const backToProjectsBtn = document.createElement("button");
    backToProjectsBtn.classList = "backToProjectsBtn";
    backToProjectsBtn.textContent = "Back";

    container.appendChild(newTodoBtn);
    container.appendChild(backToProjectsBtn);

    //Container for all cards
    const cards = document.createElement("div");
    cards.classList = "cards";

    container.appendChild(cards);

    /* ********************* */
    //Function to create elements
    const createNewElement = (typeOfElement, className, idName, textToShow) => {
        const newElement = document.createElement(typeOfElement);
        newElement.textContent = textToShow;
        newElement.classList = className;
        newElement.id = idName;
        return newElement;
    }



    console.table(instanceofTodos.selectTodo(positionProject));
    console.log("TODOS", positionProject);
}