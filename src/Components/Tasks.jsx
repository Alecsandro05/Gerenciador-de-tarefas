import { ChevronRight, Trash2 } from "lucide-react"

const Tasks = ({ tasks, onTasksCompleted, deleteTask }) => {
  return (
    <ul className="space-y-4 bg-zinc-800 px-4 py-6 rounded-lg shadow-lg">
      {tasks.map((task) => (
        <li key={task.id} className=" flex gap-2">
          <p
            onClick={() => onTasksCompleted(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md cursor-pointer ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </p>
          <button className="bg-slate-400 p-2 rounded-md text-white">
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
