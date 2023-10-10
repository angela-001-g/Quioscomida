import { NextResponse } from 'next/server'
import { Prisma, PrismaClient } from '@prisma/client'

export async function GET(){

        const prisma = new PrismaClient()
        // Obtener ordenes
        const ordenes = await prisma.orden.findMany({
          where: {
            estado: false
          }
        })


   
  return NextResponse.json(ordenes)
}

export async function POST(request){
    const res = await request.json()
    const prisma = new PrismaClient()
    let orden


    // Crear ordenes

    if(request.method === "POST"){
      orden = await prisma.orden.create({
        data: {
          nombre: res.nombre,
          total: res.total,
          pedido: res.pedido,
          fecha: res.fecha
        }
      })
    }

  return NextResponse.json(orden)
}