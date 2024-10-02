const AddTask = () => {
  return (
    <div className="bg-zinc-800  w-full p-3 space-y-6 py-6 rounded-lg">
      <div className="">
        <input
          type="text"
          placeholder="Título da tarefa"
          className="w-full rounded-md px-3 py-3 outline-none"
        />
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Descrição da tarefa"
          className="w-full rounded-md px-3 py-3 outline-none"
        />
      </div>
      <button className="p-4 bg-green-600 w-full">Adicionar</button>
    </div>
  )
}

export default AddTask
