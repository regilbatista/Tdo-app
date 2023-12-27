import React from "react";
import {TodoIcon} from '.'

function DeleteIcon({onDelete}){
 
    return( <TodoIcon
    type="delete"
    color="red"
    active= '' 
    onClick={onDelete}
    />);
   

}

export {DeleteIcon}