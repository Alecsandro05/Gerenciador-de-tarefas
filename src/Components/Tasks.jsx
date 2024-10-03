import { ChevronRight, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Tasks = ({ tasks, onTasksCompleted, deleteTask }) => {
  const navigate = useNavigate()
  const goToDetailsTasks = (task) => {
    navigate(
      `/details-tasks?title=${task.title}&description=${task.description}`
    )
  }
  return (
    <ul className="space-y-4 bg-zinc-800 px-4 py-6 rounded-lg shadow-lg">
      {tasks.map((task) => (
        <li key={task.id} className=" flex gap-2 ">
          <p
            onClick={() => onTasksCompleted(task.id)}
            className={`bg-slate-400 w-full font-medium  text-white p-2 rounded-md cursor-pointer ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </p>
          <button
            onClick={() => goToDetailsTasks(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRight className="size-6" />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash2 className="size-6" />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
