const initialState = {
    data:[]
}
const tareas = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TAREAS':
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: action.id,
                        descripcion: action.descripcion
                    }
                ]
            }
        case 'DELETE_TAREA':
            const tareas = state.data.filter((tarea) => tarea.id!==action.id)
            return {
                ...state,
                data: tareas
            }
        default:
            return state

    }
}

export default tareas