'use client';

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
 
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [paso, setPaso] = useState(1)
    const [nombre, setNombre] = useState('')
    const [total, setTotal]  = useState(0)

    const router = useRouter()


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
        const nuevoTotal = pedido.reduce((total, producto) => Number(((producto.precio * producto.cantidad) + total).toFixed(2)), 0)
        setTotal(nuevoTotal)
    }, [pedido])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id )
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id  === producto.id )){
            // Actualizar la canttidad 
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }

        setModal(false)
    }

    const handleChangePaso = paso => {
        setPaso(paso)
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id )
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id )
        setPedido(pedidoActualizado)
    }

    const colocarOrden = async (e) => {
        e.preventDefault()
        // Pasa los datos pedido orden y total como un objeto
        try {
            await axios.post('/api/orders', {nombre, pedido, total, fecha: Date.now().toString()})
            // Resetear la app
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success('Pedido realizado correctamente')

            setTimeout(() => {
                 router.push('/')
            }, 3000)

        } catch (error) {
            console.log(error)
        }

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
           handleAgregarPedido,
           pedido,
           handleChangePaso, 
           paso, 
           handleEditarCantidades,
           handleEliminarProducto, 
           nombre, 
           setNombre,
           colocarOrden,
           total
        }}
    >
        {children}
    </QuioscoContext.Provider>

)}


export {
    QuioscoProvider
}

export default QuioscoContext
