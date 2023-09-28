'use client'

function ResumenProducto({producto}) {
  return (
    <div>
      {producto?.nombre}
      {producto?.cantidad}
    </div>
  )
}

export default ResumenProducto
