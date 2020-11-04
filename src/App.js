import React, {Component} from 'react'
//import Tareas from './Tareas'
import ListaTareas from './components/ListaTareas/ListaTareas'
//import AddTarea from './AddTarea'
import AddTarea from './components/AddTarea/AddTarea'

class  App extends Component {
  state = {
      tareas:[
        {id: 1, nombre: 'Comprar Leche'},
        {id: 2, nombre: 'Borar tareas' }
      ]
  }

  deleteTarea = (id) => {
    const tareas = this.state.tareas.filter(tarea=>{
      return tarea.id !== id
    })
    this.setState({
      tareas
    })
  }
  addTarea = (tarea) => {
    let tareas = [...this.state.tareas, tarea]
    this.setState({
      tareas
    })
  }

  render(){
    return (
      <div className="container">
        <h1 className="center blue-text">TAREAS</h1>
        {/*<Tareas tareas={this.state.tareas} deleteTarea={this.deleteTarea}></Tareas>*/}
        <AddTarea addTarea={this.addTarea}/>
        <ListaTareas/>
      </div>
    );
  }
}

export default App;
