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

    //Iterate through the array of projects and display each one
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
    return { createProject, addProjectToCollection, getProjectArr, showProjects };
}