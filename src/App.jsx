import { useState } from "react"
import AddTask from "./Components/AddTask"
import Tasks from "./Components/Tasks"

function App() {
  const [tasks, setTasks] = useState([])

  function onAddTasksSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  function onTasksCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })
    setTasks(newTasks)
  }
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId) // mantém todas as tasks que forem diferente da que a gente clicou
    setTasks(newTasks)
  }
  return (
    <div className="w-screen h-screen bg-zinc-900 flex justify-center p-6 ">
      <div className=" w-[500px] space-y-4 ">
        <h1 className="text-3xl text-center text-zinc-50 font-bold">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTasksSubmit={onAddTasksSubmit} />
        <Tasks
          tasks={tasks}
          onTasksCompleted={onTasksCompleted}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}

export default App
