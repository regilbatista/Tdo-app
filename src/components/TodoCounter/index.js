import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className='TodoCounter'>
      {totalTodos === completedTodos ? (
        'Congratulations, you completed all tasks'
      ) : (
        <>
          You completed <span>{completedTodos}</span> of <span>{totalTodos}</span> tasks
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
