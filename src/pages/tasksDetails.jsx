import { LogOut } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

const TasksDetails = () => {
  const navigate = useNavigate()
  const goToBack = () => {
    navigate(`/`)
  }

  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const description = searchParams.get("description")

  return (
    <div className="w-screen h-screen bg-black/75 flex items-center justify-center">
      <div className="w-[640px] bg-zinc-900 shadow-2xl rounded-xl py-4 px-6 flex flex-col space-y-4">
        <div className=" w-full flex justify-between">
          <h1 className="text-amber-600 font-medium text-3xl text-center">
            Detalhes da atvidade
          </h1>
          <button>
            <LogOut onClick={() => goToBack()} className="text-zinc-50" />
          </button>
        </div>
        <div className="w-full h-[2px] rounded-xl bg-white"></div>
        <div className="py-4 space-y-2">
          <h2 className="text-zinc-50 font-bold text-2xl">{title}</h2>
          <p className="text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TasksDetails
