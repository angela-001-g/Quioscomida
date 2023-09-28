'use client'

import Layout from "../../layout/Layout"
import useQuiosco from "../../hooks/useQuiosco"
import ResumenProducto from "../../components/ResumenProducto"

export default function Resumen() {

    const { pedido } = useQuiosco()
    

    return(
    <>
        <Layout >
            <h1 className="text-4xl font-black" >Resumen</h1>
            <p className="text-2xl my-10" >Revisa tu pedido</p>
            <ResumenProducto />
            {pedido.length > 0 ? (
                pedido.map(producto => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            ) : (
                <p className="text-center text-2xl">No hay elementos en tu pedido</p>
            )}
        </Layout>
    </>
    )
}