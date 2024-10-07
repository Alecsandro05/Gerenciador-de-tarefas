import { useState } from "react"

const AddTask = ({ onAddTasksSubmit }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptonChange = (event) => {
    setDescription(event.target.value)
  }
  return (
    <div className="space-y-4 bg-zinc-800 px-4 py-6 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="w-full rounded-md px-3 py-3 outline-none"
        onChange={handleTitleChange}
      />

      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="w-full rounded-md px-4 py-2 outline-none "
        onChange={handleDescriptonChange}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            //trim() tira os espaços em branco
            alert("preencha todos os camppos")
            return
          }
          onAddTasksSubmit(title, description)
          setTitle("")
          setDescription("")
        }}
        className="px-4 py-2 bg-green-600 w-full rounded-md font-medium duration-500 hover:bg-slate-700 hover:text-white"
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask
