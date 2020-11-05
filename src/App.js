import React, {Component} from 'react'
//import Tareas from './Tareas'
import ListaTareas from './components/ListaTareas/ListaTareas'
//import AddTarea from './AddTarea'
import AddTarea from './components/AddTarea/AddTarea'
class  App extends Component {
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
