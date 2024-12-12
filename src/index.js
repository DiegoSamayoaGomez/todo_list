import "./style.css";
//import { projectsFunc } from "./projects.js";
import { todosFunc } from "./todos.js";

const todos = todosFunc();
//ADD PROJECTS TO COLLECCTION
console.log("ADD PROJECTS TO COLLECTION");
todos.addProjectToCollection("project 1", "description 1", []);
todos.addProjectToCollection("project 2", "description 2", []);
todos.addProjectToCollection("project 3", "description 3", []);
todos.addProjectToCollection("project 4", "description 4", []);
todos.addProjectToCollection("project 5", "description 5", []);
todos.addProjectToCollection("project 6", "description 6", []);

// -> Print projects
console.log("-> Print projects");
console.table(todos.getProjectArr());

// -> Update projects
console.log("-> Update projects");
todos.updateProjects(0, "UPDATED project 1", "UPDATED description 1", []);
todos.updateProjects(2, "UPDATED project 3", "UPDATED description 3", []);
todos.updateProjects(4, "UPDATED project 5", "UPDATED description 5", []);

// -> Print UPDATED projects
console.log("-> Print UPDATED projects");
console.table(todos.getProjectArr());

// -> Delete projects
console.log("-> Delete projects");
todos.deleteProject(5);

// -> Print with DELETED projects
console.log("-> Print with DELETED projects");
console.table(todos.getProjectArr());

// TODOS
console.log("*** TODOS ***");
todos.addTodoToProject(0, "todo 01", "description todo 01", "26/11/2024", 5);
todos.addTodoToProject(0, "todo 02", "description todo 02", "26/11/2024", 4);

todos.addTodoToProject(1, "todo 11", "description todo 11", "26/11/2024", 3);
todos.addTodoToProject(1, "todo 12", "description todo 12", "26/11/2024", 2);

todos.addTodoToProject(2, "todo 21", "description todo 21", "26/11/2024", 1);
todos.addTodoToProject(2, "todo 22", "description todo 22", "26/11/2024", 0);

todos.addTodoToProject(3, "todo 31", "description todo 31", "26/11/2024", 5);
todos.addTodoToProject(3, "todo 32", "description todo 32", "26/11/2024", 5);

todos.addTodoToProject(4, "todo 41", "description todo 41", "26/11/2024", 1);
todos.addTodoToProject(4, "todo 42", "description todo 42", "26/11/2024", 1);


//-> Print projects and todos as JSON
console.log("Print projects and todos as JSON");
console.log(JSON.stringify(todos.getProjectArr()));

//-> Update todos
console.log("Update todos");
todos.updateTodo(0, 0, "UPDATED todo 01", "UPDATED description todo 01", "10/12/2024", 0);
todos.updateTodo(0, 1, "UPDATED todo 02", "UPDATED description todo 01", "10/12/2024", 0);

//-> Print UPDATED projects and todos as JSON
console.log("Print UPDATED projects and todos as JSON");
console.log(JSON.stringify(todos.getProjectArr()));

//-> Delete todos
todos.deleteTodo(4, 0);
todos.deleteTodo(4, 0);

//-> Print DELETED projects and todos as JSON
console.log("Print DELETED projects and todos as JSON");
console.log(JSON.stringify(todos.getProjectArr()));

// -> Print final table with projects and todos
console.log("-> Print final table with projects and todos");
console.table(todos.getProjectArr());

