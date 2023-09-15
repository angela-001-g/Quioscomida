
import Image from 'next/image'
import React, { use  } from "react";

const getCategories = async () => {
  const data = await fetch("http://localhost:3000/api/categories")
  const categories = data.json()
  return categories
}


export default async function Home() {
  let categories = await getCategories()

  return (
    <div>{categories.map((categorie)=>(<h2>{categorie.nombre}</h2>))}</div>
  )
}



