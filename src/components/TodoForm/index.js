import React from "react";
import './TodoForm.css'
import {TodoContext} from '../../TodoContext'

function TodoForm(){
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
    <form onSubmit={onSubmit}>
        <label>Create your new to do</label>
        <textarea 
            placeholder="Terminar las tareas del día de hoy"
            value={newTodoValue}
            onChange={onChange}
        />
        <div className="TodoForm-button-Container">
            <button 
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
            >Cancel</button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
            >Add</button>
        </div>
    </form>
    )
}

export {TodoForm};