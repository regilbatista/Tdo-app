import React from "react";
import {useLocalStorage} from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider( { children } ){
    
  const {
    item: todos,
    saveItem: savTodos, 
    loading, 
    error,
  } =   useLocalStorage('toDos_V1', []);

  const [searchValue, setSearchValue] = 
  React.useState('');

  const [openModal, setOpenModal] = 
  React.useState(false);

  const completedTodos = todos.filter(todo => 
    !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const tTetx = todo.text.toLowerCase();
      const sTetx = searchValue.toLowerCase();
      return tTetx.includes(sTetx)
    }
    );
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      });
      savTodos(newTodos);
    }
    const compTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      savTodos(newTodos)
    };

    const delTodo = (text) => {
      const todoIndex = todos.findIndex((todo) => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      savTodos(newTodos);
    }; 

    return(
    <TodoContext.Provider value={
       { 
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            addTodo,
            setSearchValue,
            searchedTodos,
            compTodo,
            delTodo,
            openModal,
            setOpenModal,
        }
    }> 
        {
            children
        }
    </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};