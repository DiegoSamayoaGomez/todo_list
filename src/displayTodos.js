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

    // Iterate the array of objects and send it to the controller
    const showTodos = () => {
        cards.textContent = "";
        console.log("from display todos");
        console.table(instanceofTodos.selectTodo(positionProject));
        instanceofTodos.selectTodo(positionProject).forEach((element, index) => {
            let nameTodo = element.nameTodo;
            let descriptionTodo = element.descriptionTodo;
            let dueDate = element.dueDate;
            let priority = element.priority;
            let positionTodo = index;
            todoController(nameTodo, descriptionTodo, dueDate, priority, positionTodo);
            //console.log(nameTodo, descriptionTodo, dueDate, priority, position);
            //projectController(nameProject, descriptionProject, toDoList.length, positionProject);
        });
    }

    //Populate all projects in the display by using DOM after receiving data from showProjects
    const todoController = (nameTodo, descriptionTodo, dueDate, priority, positionTodo) => {

        //Container for individual cards
        const todoCard = createNewElement("div", "todoCard", positionTodo, "");
        cards.appendChild(todoCard);

        //Information of each card
        const todoInfo = createNewElement("div", "todoInfo", "", "");
        todoCard.appendChild(todoInfo);

        //SHOW TITLE, DESCRIPTION, DATE, PRIORITY
        const nameTodoCard = createNewElement("h3", "nameTodoCard", "", nameTodo);
        todoInfo.appendChild(nameTodoCard);

        const descriptionTodoCard = createNewElement("p", "descriptionTodoCard", "", descriptionTodo);
        todoInfo.appendChild(descriptionTodoCard);

        const dueDateCard = createNewElement("p", "dueDateCard", "", `Finish before ${dueDate}`);
        todoInfo.appendChild(dueDateCard);

        const priorityCard = createNewElement("p", "priorityCard", "", `Priority level ${priority}`);
        todoInfo.appendChild(priorityCard);
    };

    console.table(instanceofTodos.selectTodo(positionProject));
    showTodos();
    console.log("TODOS", positionProject);
}