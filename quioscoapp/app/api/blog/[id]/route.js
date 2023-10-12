
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


export async function POST(request, other) {
  // const req = await request.json()
  
  console.log(request.id)

  return NextResponse.json({})
}