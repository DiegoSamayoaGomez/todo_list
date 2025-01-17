import { todosFunc } from "./todos.js";

const instanceofTodos = todosFunc();
/*
instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
instanceofTodos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
instanceofTodos.addTodoToProject(0, "todo 02", "description todo 02", "26/11/2024", 4);
instanceofTodos.addTodoToProject(0, "todo 02", "description todo 02", "26/11/2024", 4);
*/

export const displayTodosFunc = function displayTodosFunc(positionProject) {

    console.table(instanceofTodos.selectTodo(positionProject));
    console.log("TODOS", positionProject);
}