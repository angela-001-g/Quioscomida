import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


export async function POST(request){
    const res = await request.json()

    let prueba 
    
    if(request.method === "POST"){
      console.log(res)
      prueba = {metodo: "POST!!!"}
    }

  return NextResponse.json(prueba)
}