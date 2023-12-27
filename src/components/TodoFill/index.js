import React from 'react';
import './TodoFill.css';
import { TodoContext } from '../../TodoContext';

function TodoFill(){
        const {
            searchValue,
            setSearchValue
        } = React.useContext(TodoContext);
        
        return(
            <div className='container'
            >
                <input  
                    placeholder="remember make the food"
                    value={searchValue}
                    className="TodoFill"

                    onChange={
                        (event) => {
                            setSearchValue(event.target.value);
                        }
                    }
                ></input>
            </div>
    
        );
    
    }
    
    export{TodoFill}