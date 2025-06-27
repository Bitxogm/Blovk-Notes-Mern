import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  try {
    await mongoose.connect(mongoUri, {
       useNewUrlParser: true,
      useUnifiedTopology: true,

    })
    console.log(`MONGODB CONNECTED SUCCESSFULLY!`);
  } catch (error) {
    console.log(`⛔ERROR CONEXION TO MONGODB, SWITCH OFF VPN CONEXION !!!!`, error);
    process.exit(1) // Exit with failuree
  }
}




