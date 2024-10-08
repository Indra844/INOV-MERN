import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({path:'./env'})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8088,()=>(
        console.log(`...server is running on port: ${process.env.PORT || 8088}`)
    ))
})
.catch((error)=>{
    console.log('DB Connection FAiled!!!', error)
})
