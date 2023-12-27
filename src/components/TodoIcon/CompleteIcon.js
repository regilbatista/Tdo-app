import React from "react";
import {TodoIcon} from '.';

function CompleteIcon({completed , onComplete}){
   
   return(  <TodoIcon
    type="check"
    color= { completed ?  '#f5f5f5' : '#33e039' }
    active= { completed ?  '-active' : '' }
    onClick={onComplete}
    />  );
}

export {CompleteIcon}