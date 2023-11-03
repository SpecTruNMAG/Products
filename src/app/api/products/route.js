import conn from "@/services/libs/mysql";

import { NextResponse } from "next/server";


export async function GET(request) {
 
 try {
  const res = await conn.execute("select * from product");
  return NextResponse.json(res.rows);
 } catch (error) {
  return NextResponse.json({
    "message":error
  })
 }
  
}

export async function POST(request,{params}) {
  const {pro_name, pro_description, pro_price} = await request.json();
const res= await conn.query("insert into products set ?",[{
    pro_name,
    pro_description,
    pro_price
}])
  return NextResponse.json(res);
}
