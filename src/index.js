import dotenv from "dotenv";
import express from "express"; // Import express module
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

const app = express(); // Create an instance of express

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });



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