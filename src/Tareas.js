import React from 'react'
import './style.css'

const Tareas = ({tareas, deleteTarea}) => {
    const listaTareas = tareas.length ? (
        tareas.map(tarea => {
            return (
            <div className="collection-item items" key={tarea.id}>
                <div className="x" onClick={()=>{deleteTarea(tarea.id)}} >X</div>
                <div className="txt" key={tarea.id}>{tarea.nombre}</div>
                    
            </div>
            )
        })
        ):(<p className="center">No existen Tareas</p>)
    return (
        <div className="todos collection">
            {listaTareas}
        </div>
    )
}

export default Tareas