import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN
    }
));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extented: true}))

app.use(express.static("public"))
//server to user browser cookie acesses and perfrom cred operation on server

app.use(cookieParser);
export {app}   