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
        //---------------------
        instanceOfProjects.saveProjectLocally();
    };

    // First find the position of the project, then find the position of the todo to change and insert new data
    const updateTodo = (positionProject, positionTodo, nameTodo, descriptionTodo, dueDate, priority) => {
        //instanceOfProjects.restoreProjectLocally();
        instanceOfProjects.getProjectArr()[positionProject].toDoList.splice(positionTodo, 1, { nameTodo, descriptionTodo, dueDate, priority });
        instanceOfProjects.saveProjectLocally();
    };

    //Receives position of the project and the position of the todo list and then deletes it
    const deleteTodo = (positionProject, positionTodo) => {
        //instanceOfProjects.restoreProjectLocally();
        instanceOfProjects.getProjectArr()[positionProject].toDoList.splice(positionTodo, 1);
        instanceOfProjects.saveProjectLocally();
    };

    //Show an specific todo list based on the project and its position
    /*
    const selectTodo = (positionProject, positionTodo) => {
        return instanceOfProjects.getProjectArr()[positionProject].toDoList[positionTodo];
    };
*/
    const selectTodo = (positionProject) => {
        return instanceOfProjects.getProjectArr()[positionProject].toDoList;
    };


    const getTodosArr = () => todosArr;

    return {
        createTodo, addTodoToProject, getTodosArr, updateTodo, deleteTodo, selectTodo,
        createProject: instanceOfProjects.createProject, addProjectToCollection: instanceOfProjects.addProjectToCollection,
        getProjectArr: instanceOfProjects.getProjectArr, updateProjects: instanceOfProjects.updateProjects,
        deleteProject: instanceOfProjects.deleteProject, saveProjectLocally: instanceOfProjects.saveProjectLocally,
        restoreProjectLocally: instanceOfProjects.restoreProjectLocally

    };
}