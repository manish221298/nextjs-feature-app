import mongoose from "mongoose";

export async function connect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected on port ${conn.connection.host}`);
  } catch (err) {
    console.log("mongodb error occured", err.message);
    process.exit();
  }
}
