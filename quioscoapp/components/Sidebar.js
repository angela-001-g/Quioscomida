'use client';

import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "../components/Categoria"

function Sidebar() {

  const { categorias } = useQuiosco()

  return (
    <>
        <Image width={300} height={100} src="/assets/img/logo.svg" alt="imagen logotipo"/>
        <var className="mt-10" >
          {categorias.map( categoria => (
            <Categoria />
          ))}
        </var>
    </>
  )
}

export default Sidebar
