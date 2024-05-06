import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category})=>{
    
    const { images, isLoading } = useFetchGifs(category);
   // console.log({ images, isLoading});

    return(
        <>
            <h3>{category}</h3>
            {// si, es true show h2 de lo contrario no
                isLoading && (<h2 >Cargando...</h2>)
            }
            {/* asi se importa una class css */}
            <div className="card-grid">
                {            //del objeto images 
                    images.map( (image) => (
                        // spreat ... iteras  esparces las propiedades de images
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )
}



//recuerda que los parentesis en lugar de llaves, restornan directamente el component

// **********  useEffect  **********
// ¿Que es lo que useEffecthace? Al usar este Hook, le dices a React que tu componente necesita hacer algo después del renderizado. React recordará la función que pasaste (nos referiremos a ella como nuestro "efecto") y la llamará más tarde después de realizar las actualizaciones de DOM. En este sentido, configuramos el título del documento, pero también podemos realizar la recuperación de datos o llamar a alguna otra API imperativa.

//lo que entendí es que aunque se actualice el componente useEffect impide que se ejecute la función que contiene el evento. La funcón solo se invoca si el evento es detonado.