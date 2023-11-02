import conn from "@/services/libs/mysql";
import { NextResponse } from "next/server";


export async function GET(request,{params}){
    
  try {
    const res= await conn.query("select * from product where id=?",[params.id])
    return NextResponse.json(res[0])
  } catch (error) {
    return NextResponse.json({
      message:error,
      status:500
    })
  }
}


export async function PUT(request, { params }) {
  const { name, description, price } = await request.json();
  const res = await conn.query("update product set ? where id=?", [
    {
      name,
      description,
      price,
    },
    params.id,
  ]);
  return NextResponse.json(res);
}

export async function DELETE(request, { params }) {
  const res = await conn.query("delete from products where pro_id=?", [params.id]);
  return NextResponse.json(res);
}
