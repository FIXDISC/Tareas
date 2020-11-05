import React from 'react'
import {connect} from 'react-redux'
import './ListaTareas.css'
import {deleteTarea} from '../../actions'

const ListaTareas = (props) => {

    return (
        <div >
            {props.tareas.map((tarea,index) => {
                return( 
                <div className="items" key={'div'+index} >
                    <div key={tarea.id} className="txt">
                        {tarea.descripcion}
                    </div>
                    <div key={index} className="x" onClick={()=>props.dispatch(deleteTarea(tarea.id))}>X</div>
                    <div key={index} className="o" onClick={()=>props.dispatch(deleteTarea(tarea.id))}>MOD</div>
                    
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
