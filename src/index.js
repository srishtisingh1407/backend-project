// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db";

dotenv.config({
    path: './env'
})










//Firt approch to connect to the database

// import { Express } from "express";
// const app = express();


// ;(async()=> {
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error", (error)=> {
//      console.log("ERRRRR", error);
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log(`listening on portv  '${process.env.PORT}`);
        
//       })
//     } catch (error) {
//         console.log("ERROR: " , error);
//         throw err
//     }
// })()