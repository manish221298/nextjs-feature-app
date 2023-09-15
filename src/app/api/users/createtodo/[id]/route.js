import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todoModel";
connect();

// api to get single todos data
export async function GET(request, content) {
  const id = content.params.id;
  try {
    const data = await Todo.findOne({ _id: id });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { err: err.message, success: false },
      { status: 500 }
    );
  }
}

// api to update single todos data
export async function PUT(request, content) {
  const id = content.params.id;
  const { title, text } = await request.json();
  try {
    const data = await Todo.findByIdAndUpdate(
      id,
      { title, text },
      { new: true }
    );
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { err: err.message, success: false },
      { status: 500 }
    );
  }
}

// api to delete single todos data by id

export async function DELETE(request, content) {
  const id = content.params.id;
  try {
    const data = await Todo.findByIdAndDelete(id);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { err: err.message, success: false },
      { status: 500 }
    );
  }
}
