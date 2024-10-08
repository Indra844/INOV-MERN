import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log('\n DB Connected!!',`${connectionInstance}`)
    } catch(error){
        console.log('URI:- ', `${process.env.DB_URI}/${DB_NAME}`)
        console.log('Connection Failed!!',error)
        process.exit(1)
    }
}

export default connectDB