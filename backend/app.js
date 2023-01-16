const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

const corsOptions ={
    origin:'http://localhost:3030', 
    // origin:'https://travel-diary-backend.onrender.com/', 
    credentials:true,  //access-control-allow-credentials:true
    optionSuccessStatus:200
}


// app.use(cors())
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter)
app.use("/post", postRouter)

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   });






const port = process.env.PORT || 3030;
// const port = process.env.PORT


//conect to mongodb and start server
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

start();
