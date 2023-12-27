import { TodoCounter } from '../components/TodoCounter';
import { TodoFill } from '../components/TodoFill';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoLoading } from '../components/TodosLoading';
import { TodoCounterLoading } from '../components/TodosLoading/TodoCounterLoading';
import { TodoError } from '../components/TodoError';
import { TodoEmpty } from '../components/TodosEmpty';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoForm } from '../components/TodoForm';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';


function AppUI(){
      const {
            
        loading,
        error,
        searchedTodos,
        compTodo,
        delTodo, 
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>   
              {!loading && <TodoCounter />}
              {loading && <TodoCounterLoading />}
              <TodoFill />
              <TodoList>
                {loading && 
                <>
                  <TodoLoading />
                  <TodoLoading />
                  <TodoLoading />
                  <TodoLoading />
                  <TodoLoading />
                </>
                }
                
                {error && <TodoError />}
                
                {(!loading && searchedTodos.length === 0) && <TodoEmpty /> }
  
                  {searchedTodos.map(todo =>(
                    <TodoItem 
                        Key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => compTodo(todo.text)}
                        onDelete = {() => delTodo(todo.text)}
                      />
                  ))}
              </TodoList>
              <CreateTodoButton 
                setOpenModal={setOpenModal}
              /> 

            {openModal && (
              <Modal >
                <TodoForm />
              </Modal>
            )}
        </>
      );
}

export{ AppUI };