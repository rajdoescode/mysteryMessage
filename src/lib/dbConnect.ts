import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbCOnnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("DATABASE ALREADY CONNECTED");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("MONGODB CONNECTION SUCCESSFULLY");
  } catch (error) {
    console.log("DB CONNECTION FAILD", error);
    process.exit(1); 
  }
}
