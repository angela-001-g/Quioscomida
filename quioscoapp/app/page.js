
import Image from 'next/image'
import React, { use  } from "react";
import Layout from "../layout/Layout"


const getCategories = async () => {
  const data = await fetch("http://localhost:3000/api/categories")
  const categories = data.json()
  return categories
}


export default async function Home() {
  let categories = await getCategories()
 

  return (
    <Layout>
      <h1>Inicio</h1>
    </Layout>
  )
}



