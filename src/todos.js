export const todosFunc = function todosFunc() {

    //Store of todos objects
    const todosArr = [];

    //Factory function to create todos objects
    const createTodo = (nameTodo, descriptionTodo, dueDate, priority) => {
        return { nameTodo, descriptionTodo, dueDate, priority };
    };

    return {
        createTodo
    };
}