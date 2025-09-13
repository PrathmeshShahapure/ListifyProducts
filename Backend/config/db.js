import mongoose from "mongoose";

export const connectDB= async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected ',connect.connection.host);
        
    } catch (error) {
        console.log(`Errror : ${error.message}`);
        process.exit(1);
    }
}