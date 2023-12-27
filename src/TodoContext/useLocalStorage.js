import React from "react";

function useLocalStorage(itemName, initialValue){
  
    const[item, setItem] = React.useState(initialValue);

    const[loading, setLoading] = React.useState(true);

    const[error, setError] = React.useState(false);

    const LCItem= localStorage.getItem(itemName);
 
   let parsedItem;
 
  React.useEffect(() => {  
    
    setTimeout(() => {
          try{

            if(!LCItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = [initialValue];
            } else{
              parsedItem = JSON.parse(LCItem);
              saveItem(parsedItem);
            }
        
            setLoading(false);

        } catch(error){
          setError(true);
        }

    }, 2000 );
    
  }, []);
 
   
 
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   };
 
   return {
        item, 
        saveItem, 
        loading, 
        error
      }
 
 }

 export {useLocalStorage}


 // const dTodo=[
//   {text:"Instalar VsCode", completed:true},
//   {text:"Instalar Docker", completed:false},
//   {text:"Instalar Github", completed:false},
//   {text:"Aprender react", completed:false},
//   {text:"Aprender next", completed:false},
//   {text:"Instalar Node js", completed:true},
// ]

// localStorage.setItem('toDos_V1', JSON.stringify(dTodo));

// localStorage.removeItem('toDos_V1');