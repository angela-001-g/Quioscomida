
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


export async function POST(request, other) {

  const prisma = new PrismaClient()

  const { id } = other.params
  const ordenActualizada = await prisma.orden.update({
    where: {
      id: parseInt(id)
    },
    data:{
      estado: true
    }
  })

  return NextResponse.json(ordenActualizada, {status: 200})
}