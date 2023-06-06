import { NextRequest, NextResponse } from "next/server";
import db from '../db'
import Contact from "../models/contact";


export async function GET(request: NextRequest ) {
    await db()
    const data = await Contact.find({})
    return NextResponse.json(data);
}

export async function POST(request: Request){
    //console.log(request.json())
    await db()
    const { name, email, message}= await request.json()
    console.log(name, email, message)
    const data= {name, email, message}
    const save= await Contact.create({name, email, message})
    return new Response(JSON.stringify(data), {status: 200});
}