const ADD_TAREAS = 'ADD_TAREAS'
export const addTarea = (mensaje) => ({
    type: ADD_TAREAS,
    descripcion: mensaje,
    id: Math.floor((Math.random() * 999999999) + 1)
})

const DELETE_TAREA = 'DELETE_TAREA'
export const deleteTarea = (id) => ({
    type: DELETE_TAREA,
    id
})
