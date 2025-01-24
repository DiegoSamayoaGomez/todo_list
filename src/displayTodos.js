import { todosFunc } from "./todos.js";
import { displayFunc } from "./display.js";

const instanceofTodos = todosFunc();


//testDisplay.projectController("NAME PROJECT", "DESCRIPTION PROJECT", 1);
//testDisplay.projectController("NAME PROJECT", "DESCRIPTION PROJECT", 1);
//testDisplay.projectController("NAME PROJECT", "DESCRIPTION PROJECT", 1);

/*
instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
instanceofTodos.addTodoToProject(1, "todo 02", "description todo 02", "26/11/2024", 4);
instanceofTodos.addTodoToProject(1, "todo 02", "description todo 02", "26/11/2024", 4);
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
    backToProjectsBtn.textContent = "< Back";

    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "buttonContainer";

    buttonContainer.appendChild(backToProjectsBtn);
    buttonContainer.appendChild(newTodoBtn);

    container.appendChild(buttonContainer);

    //Container for all cards
    const cards = document.createElement("div");
    cards.classList = "cards";

    container.appendChild(cards);

    const todoModal = document.createElement("dialog");
    todoModal.id = "showModal";
    container.appendChild(todoModal);

    /* ********************* */
    //Function to create elements
    const createNewElement = (typeOfElement, className = "", idName = "", textToShow = "") => {
        const newElement = document.createElement(typeOfElement);

        if (textToShow) newElement.textContent = textToShow;
        if (className) newElement.classList.add(className);
        if (idName) newElement.id = idName;

        return newElement;
    };

    // Iterate the array of objects and send it to the controller
    const showTodos = () => {
        cards.textContent = "";
        console.log("from display todos");
        console.table(instanceofTodos.selectTodo(positionProject));

        try {

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
        catch (err) {
            console.log("SHOW TODOS, Something happened, trying again...", err);
        }
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

        //Options for each card
        const todoOptions = createNewElement("div", "todoOptions", "", "");
        todoCard.appendChild(todoOptions);

        //Update and Delete Buttons
        const updateBtn = createNewElement("button", "updateBtn", "", "Update");
        todoOptions.appendChild(updateBtn);

        const deleteBtn = createNewElement("button", "deleteBtn", "", "Delete");
        todoOptions.appendChild(deleteBtn);

        //Delete button
        deleteBtn.addEventListener("click", () => {
            instanceofTodos.deleteTodo(positionProject, positionTodo);
            showTodos();
        });

        //Update Button
        updateBtn.addEventListener("click", () => {
            newTodoModal(nameTodo, descriptionTodo, dueDate, priority, positionTodo);
        });
    };

    //Draw form
    const newTodoForm = (nameTodo, descriptionTodo, dueDate, priority, positionTodo) => {

        //Acces modal element
        const todoModal = document.querySelector("#showModal");

        //Create form
        let projectID = ((nameTodo == undefined) && (descriptionTodo == undefined)) ? "todoForm" : "updateTodoForm";
        const todoForm = createNewElement("form", "", projectID, "");
        todoForm.dataset.identifier = positionTodo;

        //Create UL to contain form inputs
        const ulForm = createNewElement("ul", "", "", "");

        //Create LI to contain label and todo name input
        const liTodoName = createNewElement("li", "", "", "");
        //Label for todo name
        const LabelTodoName = createNewElement("label", "", "", "Title");
        LabelTodoName.htmlFor = "nameTodo";
        //Todo name input
        const inputTodoName = createNewElement("input", "", "nameTodo", "");
        nameTodo == undefined ? inputTodoName.value = "" : inputTodoName.value = nameTodo;
        inputTodoName.setAttribute("type", "text");
        inputTodoName.setAttribute("name", "name");
        inputTodoName.setAttribute("required", "required");
        //Append label for LI
        liTodoName.appendChild(LabelTodoName);
        //Append input for LI
        liTodoName.appendChild(inputTodoName);
        //Append LI to UL
        ulForm.appendChild(liTodoName);

        //Create LI to contain label and descriptionTodo  input
        const liDescriptionTodo = createNewElement("li", "", "", "");
        //Label for todo name
        const labelDescriptionTodo = createNewElement("label", "", "", "Description");
        labelDescriptionTodo.htmlFor = "descriptionTodo";
        //Todo descriptionTodo input
        const inputDescriptionTodo = createNewElement("input", "", "", "");
        descriptionTodo == undefined ? inputDescriptionTodo.value = "" : inputDescriptionTodo.value = descriptionTodo;
        inputDescriptionTodo.setAttribute("type", "text");
        inputDescriptionTodo.setAttribute("name", "description");
        inputDescriptionTodo.setAttribute("required", "required");
        //Append label for LI
        liDescriptionTodo.appendChild(labelDescriptionTodo);
        //Append input for LI
        liDescriptionTodo.appendChild(inputDescriptionTodo);
        //Append LI to UL
        ulForm.appendChild(liDescriptionTodo);

        //Create LI to contain label and dueDate  input
        const liDueDate = createNewElement("li", "", "", "");
        //Label for todo name
        const labelDueDate = createNewElement("label", "", "", "Due date");
        labelDueDate.htmlFor = "dueDate";
        //Todo dueDate input
        const inputDueDate = createNewElement("input", "", "", "");
        dueDate == undefined ? inputDueDate.value = "" : inputDueDate.value = dueDate;
        //descriptionTodo == undefined ? inputDescriptionTodo.value = "" : inputDescriptionTodo.value = descriptionTodo;
        inputDueDate.setAttribute("type", "date");
        inputDueDate.setAttribute("name", "date");
        inputDueDate.setAttribute("required", "required");
        //Append label for LI
        liDueDate.appendChild(labelDueDate);
        //Append input for LI
        liDueDate.appendChild(inputDueDate);
        //Append LI to UL
        ulForm.appendChild(liDueDate);

        //Create LI to contain label and priority  input
        const liPriority = createNewElement("li", "", "", "");
        //Label for todo name
        const labelPriority = createNewElement("label", "", "", "Priority");
        labelPriority.htmlFor = "priority";
        //Todo priority input
        const inputPriority = createNewElement("select", "", "", "");
        inputPriority.setAttribute("name", "priority");
        inputPriority.setAttribute("required", "required");

        // Create the options and append them to the select element
        const options = [
            { value: '1', text: '1' },
            { value: '2', text: '2' },
            { value: '3', text: '3' },
            { value: '4', text: '4' },
            { value: '5', text: '5' }
        ];

        // Loop through the options array and create option elements
        options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.textContent = optionData.text;
            inputPriority.appendChild(option);
        });

        //Append label for LI
        liPriority.appendChild(labelPriority);
        //Append input for LI
        liPriority.appendChild(inputPriority);
        //Append LI to UL
        ulForm.appendChild(liPriority);

        //Create LI for submit button
        const liSubmitButton = createNewElement("li", "", "", "");
        //Submit button
        let submitButton;
        ((nameTodo == undefined) && (descriptionTodo == undefined)) ?
            submitButton = createNewElement("button", "", "confirmBtnForm", "Create") :
            submitButton = createNewElement("button", "", "updateBtnForm", "Update");
        submitButton.value = "submit";
        //Append button to LI
        liSubmitButton.appendChild(submitButton);
        //Append LI to UL
        ulForm.appendChild(liSubmitButton);

        //Append UL to form
        todoForm.appendChild(ulForm);

        //Append form to modal
        todoModal.appendChild(todoForm);
    };


    //Draw a modal 
    const newTodoModal = (nameTodo, descriptionTodo, dueDate, priority, positionTodo) => {

        //Access modal element
        const todoModal = document.querySelector("#showModal");
        //Clear screen
        todoModal.textContent = "";
        //Create title element
        const todoInformation = createNewElement("h2", "", "", "Todo Information");
        const closeInformation = createNewElement("p", "", "", "Press ESC to close without saving");
        //Append it to the parent element
        todoModal.appendChild(todoInformation);
        todoModal.appendChild(closeInformation);

        //Draw form
        newTodoForm(nameTodo, descriptionTodo, dueDate, priority, positionTodo);
        todoModal.showModal();
    };

    //Back button
    backToProjectsBtn.addEventListener("click", () => {
        const instanceOfDisplay = displayFunc();
        instanceOfDisplay.showProjects();
    });

    //New todo button
    newTodoBtn.addEventListener("click", () => {
        //Call function that opens dialog
        newTodoModal();
    });

    //Create (inside form) button
    const submitterButton = document.getElementById("confirmBtnForm");
    document.getElementById('showModal').addEventListener('submit', function (event) {
        if (event.target && event.target.id === 'todoForm') {
            //Convert element into a DOM element
            const todoModal = document.querySelector("#showModal");
            event.preventDefault();
            // Handle form submission
            //Get data from the form after pressing the submit button
            const formData = new FormData(todoForm, submitterButton);
            //Convert the data obtained from the form into an object
            const formProps = Object.fromEntries(formData);
            console.log("FROM CREATE BUTTON INSIDE TODO", formProps.name, formProps.description, formProps.date, formProps.priority);
            try {
                instanceofTodos.addTodoToProject(positionProject, formProps.name, formProps.description, formProps.date, formProps.priority);

            } catch (error) {
                console.log("error from display todos");
            }

            showTodos();//const createTodo = (nameTodo, descriptionTodo, dueDate, priority) => {
            //const addTodoToProject = (positionProject, nameTodo, descriptionTodo, dueDate, priority) => {

            //instanceofProjects.addProjectToCollection(formProps.name, formProps.description, []);
            //showProjects();
            document.querySelector("#todoForm").reset();
            //Close the modal after pressing the confirm button
            todoModal.close();
        }
    });

    //Update (inside form) button
    const updaterButton = document.getElementById("updateBtnForm");
    document.getElementById('showModal').addEventListener('submit', function (event) {
        if (event.target && event.target.id === 'updateTodoForm') {
            // Convert element into a DOM element
            const todoModal = document.querySelector("#showModal");
            event.preventDefault();

            // Handle form submission
            // Get data from the form after pressing the submit button
            const formData = new FormData(updateTodoForm, updaterButton);

            // Convert the data obtained from the form into an object
            const identifier = event.target.dataset.identifier;
            const formProps = Object.fromEntries(formData);

            // Log formProps to ensure you are getting the data correctly
            console.log("Form Data:", formProps);

            // Ensure all form fields are provided, and fallback if needed
            const name = formProps.name || '';
            const description = formProps.description || '';
            const date = formProps.date || '';
            const priority = formProps.priority || 'low'; // Default to 'low' if no priority is selected

            // Call updateTodo method to update the todo with the correct data
            instanceofTodos.updateTodo(
                positionProject,   // Assuming positionProject is defined or is passed in elsewhere
                identifier,        // Unique identifier for the todo
                name,              // Todo name
                description,       // Todo description
                date,              // Todo due date
                priority          // Todo priority
            );

            // Update the todo list UI
            showTodos();

            // Reset the form after submission
            document.querySelector("#updateTodoForm").reset();

            // Close the modal after pressing the confirm button
            todoModal.close();

        }
    });

    console.table(instanceofTodos.selectTodo(positionProject));
    showTodos();
    console.log("TODOS", positionProject);
}