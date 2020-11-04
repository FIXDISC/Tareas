import React from 'react'
import {connect} from 'react-redux'
import {addTarea} from '../../actions'
import './AddTarea.css'

const AddTarea = (props) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                let input = e.target.descripcion.value
                props.dispatch(addTarea(input))
                e.target.descripcion.value = ''
            }}>
                <input type='text' name='descripcion' className='input1'></input>
                <button className="boton-enviar">AGREGAR</button>
            </form>
        </div>
    )
}

export default connect()(AddTarea)
