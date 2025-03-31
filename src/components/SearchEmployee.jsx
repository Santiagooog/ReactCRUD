export function SearchEmployee(){
  return(
    <>
    <div className="flex items-center justify-between mb-14">
      <div className="flex justify-evenly">
      <button className="min-w-30 min-h-10 border-2 rounded-2xl ml-8">Añadir</button>
      <button className="min-w-30 min-h-10 border-2 rounded-2xl ml-8" >Editar</button>
      <button className="min-w-30 min-h-10 border-2 rounded-2xl ml-8">Eliminar</button>
      </div>
    <div className="flex justify-end">
    <label>
      🔎
    <input className="border-2 rounded-2xl mb-5 min-h-13 mr-3.5" placeholder="Santiago Gomez" type="text" />
    </label>
    </div>
    </div>
    </>
  )
}
