import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
// import Image from "next/image";
// import reactLogo from "../assets/react.svg";
// import tauriLogo from "../assets/tauri.svg";
// import nextLogo from "../assets/next.svg";
import { TodoList } from "../app/todo";
import { BaseDirectory, createDir } from "@tauri-apps/api/fs";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  const [tasks, setTasks] = useState([{title:"get a load of this guy"}])
  const [taskInput, setTaskInput] = useState('')
  async function getTasks() {
    // Learn more about Tauri commands at ht tps://tauri.app/v1/guides/features/command
    setTasks(await invoke("get_tasks"));
  }

  getTasks();

  console.log(tasks)
  const addTask = ((task) => {
    console.log(task)
    setTasks([...tasks, {title:task}])
    setTaskInput('')
  }) 

  const deleteTask = ((task) => { 
    console.log(task)
    let tasksBuffer= tasks
    tasksBuffer.splice(task,1)
    setTasks([...tasksBuffer])
  })
  return (
    <div className="container" >
      <h1>Welcome to Tauri!</h1>
      <form onSubmit={e=> e.preventDefault()}>
        <input type="text" value={taskInput} onChange={e=>setTaskInput(e.target.value)}/>
        <button type="submit" onClick={e => addTask(taskInput)} />
      </form>
      <TodoList deleteTask={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
