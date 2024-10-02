import { useState } from "react"
import AddTask from "./Components/AddTask"
import Tasks from "./Components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Casa",
      description: "Lavar banheiros",
      isCompleted: false,
    },
    {
      id: 2,
      title: "estudo",
      description: "Estudar Matematica",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Lazer",
      description: "Jogar Red Dead",
      isCompleted: false,
    },
  ])
  function onTasksCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      console.log(task)
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })
    setTasks(newTasks)
  }
  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6 ">
      <div className=" w-[500px] space-y-4 ">
        <h1 className="text-3xl text-center text-zinc-50 font-bold">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTasksCompleted={onTasksCompleted} />
      </div>
    </div>
  )
}

export default App
