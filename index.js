const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require ("morgan");
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");

dotenv.config();

mongoose.connect(proces.env.MONGO_URL, )
    .then(() => console.log('Connected Successfully'))
    .catch((err) => { console.error(err); 
});

//Middleware//
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(3000,()=>{
    console.log("Backend Server is running!")
});
