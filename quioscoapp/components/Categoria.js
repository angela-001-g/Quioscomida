'use client';

import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco";

function Categoria({categoria}) {

    const { handleClickCategoria, categoriaActual } = useQuiosco()
    const { nombre, icono, id } = categoria

  return (
    <div className={`flex items-center gap-4 border p-5 hover:bg-amber-400 ${categoriaActual?.id === id ? "bg-amber-400" : "" }`}>
      <Image
        width={70}
        height={70}
        style={{ width: 70, height: 70 }}
        src={`/assets/img/icono_${icono}.svg`}
        alt="imagen icono"
      />
      <button 
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria
