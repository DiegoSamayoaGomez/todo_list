export const projectsFunc = function projectsFunc() {

    //Store of project objects
    let projectArr = [];

    //Factory function to create project objects
    const createProject = (nameProject, descriptionProject, toDoList) => {
        return { nameProject, descriptionProject, toDoList };
    }

    //Create a new project and add it to the array of projects
    const addProjectToCollection = (nameProject, descriptionProject, toDoList) => {
        restoreProjectLocally();
        const addProject = createProject(nameProject, descriptionProject, toDoList);
        projectArr.push(addProject);
        saveProjectLocally();
    }

    //Receive the position of the object to modify and change it
    const updateProjects = (positionProject, nameProject, descriptionProject, toDoList) => {
        restoreProjectLocally();
        projectArr.splice(positionProject, 1, { nameProject, descriptionProject, toDoList });
        saveProjectLocally();
    }

    //Delete project and all of it inner toDo Lists
    const deleteProject = (positionProject) => {
        restoreProjectLocally();
        projectArr.splice(positionProject, 1);
        saveProjectLocally();
    }

    // Save the array to localStorage
    const saveProjectLocally = () => {
        localStorage.clear();
        localStorage.setItem("Project", JSON.stringify(getProjectArr()));  // Save the current projectArr
    };

    // Restore and update the array from localStorage
    const restoreProjectLocally = () => {
        const savedData = localStorage.getItem("Project");
        // If data exists in localStorage, use it. Otherwise, create a default example.
        projectArr = (savedData != null) ? JSON.parse(savedData) : addProjectToCollection("EXAMPLE title", "EXAMPLE description", []);  // Update projectArr directly with the restored data
    };

    //Iterate through the array of projects and display each one
    // ** MOVE TO THE DOM CONTROLLER AFTER ** 
    const showProjects = () => {
        const showProjects = getProjectArr().forEach((element, index) => {
            let nameProject = element.nameProject;
            let descriptionProject = element.descriptionProject;
            let toDoList = element.toDoList;
            let positionProject = index;
            console.log(nameProject);

        });
    }
    //Show current collection of projects
    const getProjectArr = () => projectArr;
    //Initiliaze array
    getProjectArr();
    //Check if there´s existing data
    restoreProjectLocally();

    return { createProject, addProjectToCollection, getProjectArr, updateProjects, deleteProject, saveProjectLocally, restoreProjectLocally };
}