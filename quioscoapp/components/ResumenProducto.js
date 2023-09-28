'use client'

import Image from "next/image"
import { formatearDinero } from "../helpers/index"

function ResumenProducto({producto}) {
  return (
    <div className="shadow p-5 ,b-3 flex gap-10 items-center" >
      <div className="md:w-1/6" >
        { producto ?(
                  <Image
                  width={300}
                  height={400}
                  alt={`Imagen producto ${producto?.nombre }`}
                  src={`/assets/img/${producto?.imagen}.jpg`}
                  placeholder="blur"
                  blurDataURL={`/assets/img/${producto?.imagen}.jpg`}
                />
              
             ) : ('') }
      </div>
      <div className="md:w-5/6" >
        { producto ? (
                  <p className="text-3xl font-bold" >{producto?.nombre}</p>
        ) : (
          ''
        )}

        {
          producto ? (
            <p className="text-xl font-bold mt-2" >Cantidad: {producto?.cantidad}</p>
          ) : (
            ''
        )}

        {producto ? (
            <p className="text-xl font-bold mt-2 text-amber-500" >Precio: {formatearDinero(producto?.precio)}</p>
        ) : (
          ''
        )}

        {producto ? (
            <p className="text-sm text-gray-700 mt-2 " >Subtotal: {formatearDinero(producto?.precio * producto?.cantidad)}</p>
        ) : (
          ''
        )}

      </div>
    </div>
  )
}

export default ResumenProducto
