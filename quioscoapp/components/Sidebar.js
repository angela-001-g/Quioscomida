'use client';

import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "../components/Categoria"

function Sidebar() {

  const { categorias } = useQuiosco()

  return (
    <>
        <Image width={300} height={100} style={{width: "auto", height: "auto"}}  src="/assets/img/logo.svg" alt="imagen logotipo" priority={true} className="mx-auto" />
        <var className="mt-10" >
          {categorias.map( categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </var>
    </>
  )
}

export default Sidebar
