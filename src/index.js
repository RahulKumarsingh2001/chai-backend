// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectionDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectionDB();
