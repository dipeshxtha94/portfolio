import mongoose, { mongo } from "mongoose";

const connection = {
   isConnected: false as boolean
};


const db= async()=>{
   if (connection.isConnected) {
      return;
    }
    if (mongoose.connections.length > 0) {
      connection.isConnected = mongoose.connections[0].readyState === 1;
      if (connection.isConnected) {
        return;
      }
      await mongoose.disconnect();
    }

    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error('MONGO_URL environment variable is not defined.');
    }

    const db = await mongoose.connect(mongoUrl);
    connection.isConnected = db.connections[0].readyState === 1;
}

export default db