import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    return NextResponse.json({ message: "hey, how are you!" });
  } catch (err) {
    return NextResponse.json(err);
  }
}
