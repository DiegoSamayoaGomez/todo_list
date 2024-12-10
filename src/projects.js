export const projectsFunc = function projectsFunc() {

    //Store of project objects
    const projectArr = [];

    //Factory function to create project objects
    const createProject = (nameProject, descriptionProject, toDoList) => {
        return { nameProject, descriptionProject, toDoList };
    }

    //Create a new project and add it to the array of projects
    const addProjectToCollection = (nameProject, descriptionProject, toDoList) => {
        const addProject = createProject(nameProject, descriptionProject, toDoList);
        projectArr.push(addProject);
        return addProject;
    }

    //Receive the position of the object to modify and change it
    const updateProjects = (positionProject, nameProject, descriptionProject, toDoList) => {
        return projectArr.splice(positionProject, 1, { nameProject, descriptionProject, toDoList });
    }

    //Receive the position of the project to modify and adds it a new todo to the todo Item in the array
    //const addTodoToProject = (positionProject, todoListObj) => {
    //  projectArr[positionProject].toDoList.push(todoListObj);
    //console.log("TODOS ARR", projectArr[positionProject]);
    //}

    //Delete project and all of it inner toDo Lists
    const deleteProject = (positionProject) => {
        return projectArr.splice(positionProject, 1);
    }

    //Iterate through the array of projects and display each one
    // ** MOVE TO THE DOM CONTROLLER AFTER ** 
    const showProjects = () => {
        const showProjects = projectArr.forEach((element, index) => {
            let nameProject = element.nameProject;
            let descriptionProject = element.descriptionProject;
            let toDoList = element.toDoList;
            let positionProject = index;
            console.log(nameProject);

        });
    }

    //Show current collection of projects
    const getProjectArr = () => projectArr;
    return { createProject, addProjectToCollection, getProjectArr, updateProjects, deleteProject };
}