import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

function handleAddProject(projectData) {
  setProjectState((prevState) => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };
  
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }; 
  });
}

let content;

if (projectState.selectedProjectId === null) {
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
} else if (projectState.selectedProjectId === undefined) {
  content = <NoProject onStartAddProject={handleStartAddProject}/>;
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
