import { projectsFunc } from "./projects.js";

export const todosFunc = function todosFunc() {

    const instanceOfProjects = projectsFunc();

    //Store of todos objects
    const todosArr = [];

    //Factory function to create todos objects
    const createTodo = (nameTodo, descriptionTodo, dueDate, priority) => {
        return { nameTodo, descriptionTodo, dueDate, priority };
    };

    // Create a new todo object and sends it to the project module to update the selected project
    const addTodoToProject = (positionProject, nameTodo, descriptionTodo, dueDate, priority) => {
        const addTodo = createTodo(nameTodo, descriptionTodo, dueDate, priority);

        //Receive the position of the project to modify and adds it a new todo to the todo Item in the array
        instanceOfProjects.getProjectArr()[positionProject].toDoList.push(addTodo);
    };


    //
    const updateTodo = (positionProject, positionTodo, nameTodo, descriptionTodo, dueDate, priority) => {
        //return projectArr.splice(positionProject, 1, { nameProject, descriptionProject, toDoList });
        const xd = instanceOfProjects.getProjectArr()[positionProject].toDoList.splice(positionTodo, 1, { nameTodo, descriptionTodo, dueDate, priority });

    };


    const getTodosArr = () => todosArr;


    return {
        createTodo, addTodoToProject, getTodosArr, updateTodo,
        createProject: instanceOfProjects.createProject, addProjectToCollection: instanceOfProjects.addProjectToCollection,
        getProjectArr: instanceOfProjects.getProjectArr, updateProjects: instanceOfProjects.updateProjects,
        deleteProject: instanceOfProjects.deleteProject

    };
}