// There are two ways of importing dotenv

// 1. Official way --
//    require('dotenv').config({ path: 'enter_path' })

// 2. using import statement for code consistency
//    import dotenv from "dotenv"
//    dotenv.config({ path: 'enter_path })
// but in this case we have to also change package.json and include this
// " -r dotenv/config --experimental-json-modules " for now,
// so dev script becomes - 
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/idex.js"


import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})


connectDB()