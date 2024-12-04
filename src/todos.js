export const todosFunc = function todosFunc() {

    //Store of todos objects
    const todosArr = [];

    //Factory function to create todos objects
    const createTodo = (nameTodo, descriptionTodo, dueDate, priority) => {
        return { nameTodo, descriptionTodo, dueDate, priority };
    };

    // Create a new todo list and add it to the array of todos
    const addTodoToProject = (positionProject, nameTodo, descriptionTodo, dueDate, priority) => {
        const addTodo = createTodo(nameTodo, descriptionTodo, dueDate, priority);
        todosArr.push(addTodo);
        return addTodoToProject;
    };

    return {
        createTodo, addTodoToProject
    };
}