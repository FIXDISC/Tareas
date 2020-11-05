const initialState = {
    data:[],
    text:''
}
const tareas = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TEXT':
            return {...state, text: action.descripcion}
        case 'ADD_TAREAS':
            return {...state,data: [...state.data,{id: action.id,descripcion: action.descripcion}]}
        case 'DELETE_TAREA':
            const tareas = state.data.filter((tarea) => tarea.id!==action.id)
            return {...state,data: tareas}
        case 'EDIT_TAREA':
            return {...state, text: state.tareas[action.descripcion]}
        default:
            return state
    }
}

export default tareas