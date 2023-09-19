'use client';

import Image from "next/image"

function Categoria({categoria}) {

    const { nombre, icono, id } = categoria

  return (
    <div>
      <Image
        width={100}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
        alt="imagen icono"
      />
    </div>
  )
}

export default Categoria
