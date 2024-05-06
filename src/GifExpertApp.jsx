import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ()=>{
        // array         funcion
    const [categories, setCategories] = useState(['One Punch']);
    //console.log(categories);//imprime one punch
    const onAddCategory = ( newCategory )=>{
        //si la categoria ya existe no add y retorna
        if(categories.includes(newCategory)) return;
        
        //nota sobre ..., copia el array t agrega un new element al ultimo
        setCategories([...categories, newCategory]);
        //console.log(newCategory);
        //nota sobre ..., copia el array t agrega un new element al principio
        //nota sobre ..., copia el array t agrega un new element al ultimo
        setCategories([...categories, newCategory]);
        //console.log(newCategory);
        //nota sobre ..., copia el array t agrega un new element al principio
        //setCategories(['El chavo', ...categories]);
    }
    return (
        <>  
            {/* titulo del app */}
            <h1>GifExpertApp</h1>

            {/* Input de busqueda */}
            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory onNewCategory={ (value) =>onAddCategory(value) }/>
            {/* Listado de gif */}
            {
                categories.map( category => 
                    (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }

            {/* Gif item */}
        </>
    )
}

// map()
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. En otras palabras itera cada elemento del arreglo y lo retorna. Es por eso que podemos ocuparlo dentro de la funcion flecha callback que hubica los elemetos iterados dentro de la etiqueta li

//USO DEL HOOK y el operador de propagacion ...
// const [categories, setCategories] = useState(['One Punch','Dragon ball']);
//     const onAddCategory = ()=>{
//         //Utiliza el operador de propagación (...) para desestructurar el array categories original y crear un nuevo array que contiene todos sus elementos, seguido por el nuevo elemento 'El chavo'. 
//         setCategories([...categories, 'El chavo']);
//     }