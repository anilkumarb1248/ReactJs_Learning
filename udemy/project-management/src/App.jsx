import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import {
  INITIAL_PROJECTS,
  INITIAL_PROJECTS_TASKS,
} from "./components/InitialProjects";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    // undefined means - No Project selected
    // null means - Adding a new Project
    projects: [...INITIAL_PROJECTS],
    tasks: [...INITIAL_PROJECTS_TASKS],
  });

  const handleProjectSelect = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCacelBtnClick = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleOnSaveProject = (projectData) => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleProjectDelete = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (removeTaskId) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== removeTaskId),
      };
    });
  };

  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId,
  );

  let projectSpecificTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId,
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onProjectDelete={handleProjectDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      // tasks={projectState.tasks}
      tasks={projectSpecificTasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={handleOnSaveProject}
        onCancel={handleCacelBtnClick}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onProjectSelect={handleProjectSelect}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
