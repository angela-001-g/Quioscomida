'use client';

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const[categorias, setCategorias] = useState([])

    const obtenerCategorias = async () => {
        try {
            const { data } = await axios('/api/categories')
            setCategorias(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    return(
    <QuioscoContext.Provider
        value={{
           categorias
        }}
    >
        {children}
    </QuioscoContext.Provider>

)}


export {
    QuioscoProvider
}

export default QuioscoContext
