import "./App.css";
import React, { createContext, Fragment, useState } from "react";
import EditeUser from "./components/EditeUser";
import ViewUsers from "./components/ViewUsers";
import useHttp from './hooks/useHttp';
export const Storage = createContext();
function App() {
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  const [tasks, setTasks] = useState([]);
  const [currentObj, setCurrentObj] = useState({});
  const [changingObj, setChangingObj] = useState({ firstName: '', fullName: '' });
  return (
    <Storage.Provider value={{ fetchTasks, tasks, setTasks, currentObj, setCurrentObj, changingObj, setChangingObj }}>
      <div className="continer">
        <EditeUser />
        <ViewUsers />
      </div>
    </Storage.Provider>
  );
}

export default App;
