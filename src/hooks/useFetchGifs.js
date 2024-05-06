import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages(category) 
    }, [])

    // return {
    //     images: images,//pasamos el array de images
    //     isLoading: isLoading
    // }
    return {
        images,//pasamos el array de images
        isLoading//porque tienen el mismo nombre, no ponemos la clave
    }
}