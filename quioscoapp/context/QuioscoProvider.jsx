'use client';

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const[categorias, setCategorias] = useState([])
    const[categoriaActual, setCategoriaActual] = useState({})
    const[producto, setProducto] = useState({})
    const[modal, setModal] = useState(false)
    const[pedido, setPedido] = useState([])


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

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id )
        setCategoriaActual(categoria[0])
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        setPedido([...pedido, producto])
    }

    return(
    <QuioscoContext.Provider
        value={{
           categorias,
           handleClickCategoria,
           categoriaActual,
           producto,
           handleSetProducto,
           modal,
           handleChangeModal,
           handleAgregarPedido
        }}
    >
        {children}
    </QuioscoContext.Provider>

)}


export {
    QuioscoProvider
}

export default QuioscoContext
