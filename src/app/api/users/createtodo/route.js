import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todoModel";

connect();

// create todo data post api
export async function POST(request) {
  const { title, text } = await request.json();

  try {
    if (!title || !text) {
      return NextResponse.json({
        message: "All fields are required",
        status: false,
      });
    }

    const createdTodos = await Todo.create({ title, text });

    return NextResponse.json(createdTodos);
  } catch (err) {
    return NextResponse.json(err);
  }
}

// get todo data get api
export async function GET() {
  try {
    const todo = await Todo.find();
    if (!todo) {
      return NextResponse.json({ message: "Data not found", status: false });
    }

    return NextResponse.json(todo);
  } catch (err) {
    return NextResponse.json({ err: err.message });
  }
}

// update todo data put api
// export async function PUT(request) {
//   const body = await request.json();

//   try {
//   } catch (err) {
//     return NextResponse.json({ err: err.message });
//   }
// }
