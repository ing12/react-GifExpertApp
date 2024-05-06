//no importamos pack react porque este componente se va a importar en gifExpertApp 
//importo libreria para hooks
import { useState } from "react";
//este componente recibe el hook setCategories para botton como un prop
//desestructuramos el prop
export const AddCategory = ({onNewCategory})=>{
    
    const [inputValue, setInputValue] = useState('');
                        //recibe el event de onchange
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();//No permite refresh
        if (inputValue.trim() <= 1) return;
        //funcion declarada como atribut en el componente
        //recibe el valor, quita espacios y retorna 
        setInputValue('');
        onNewCategory(inputValue.trim())
        
    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
    )
}


//NOTAS DEL CURSO:
// //recube el event de onchange
// const handleInputChange = (e) => {
// console.log(e.target.value);//retono del onchange con su value contenido la propieda target
// //setInputValue(e.target.value);
// }

//PODEMOS DESESTRUCTURAR EL EVENTO Y SOLO RECIBIR EL TARGET PARA TENER UN CODE MAS LIMPIO
    //  const handleInputChange = ({target}) => {
    //     setInputValue(target.value);
    // }

//setCategories(categories =>[inputValue,...categories]);