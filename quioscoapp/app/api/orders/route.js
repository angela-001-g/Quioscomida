import { NextResponse } from 'next/server'



export async function POST(request){
    const res = await request.json()

    if(request.method === "POST"){
      console.log(res)
    }

  return NextResponse.json(res)
}