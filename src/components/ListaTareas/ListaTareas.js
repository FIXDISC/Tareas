import React from 'react'
import {connect} from 'react-redux'
import './ListaTareas.css'
import {deleteTarea} from '../../actions'

const ListaTareas = (props) => {
    return (
        <div className="collection-item">
            {props.tareas.map((tarea,index) => {
                return( 
                <div key={'div'+index} className="collection-item items">
                    <div key={tarea.id}>{tarea.descripcion}</div>
                    <div key={index} className="x" onClick={()=>props.dispatch(deleteTarea(tarea.id))}>X</div>
                </div>
                )

            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tareas : state.tareas.data
})

export default connect(mapStateToProps)(ListaTareas)
