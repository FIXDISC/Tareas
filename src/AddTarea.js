import React, {Component} from 'react'

class AddTarea extends Component {
    state = {
        nombre: ''
    }
    handleChange = (e) => {
        this.setState({
            nombre: e.target.value  
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const ide = Math.floor((Math.random() * 999999999) + 1)
        this.setState({id: ide})
        this.props.addTarea(this.state)
        this.setState({nombre:''})
    }
    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label >AGREGAR TAREA: </label>
                <input type="text" onChange={this.handleChange} value={this.state.nombre} onBlur={this.handleChange}></input>
            </form>
        </div>
        )
    }
}

export default AddTarea