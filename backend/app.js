const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")

// const notFoundMiddleware = require("./middleware/not-found");
// const errorHandlerMiddleware = require("./middleware/error-handler");

const bodyParser = require("body-parser");
// const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

//routes
// app.use("/api/auth", userRouter);
// app.use("/api/messages", messageRouter);


// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3030;

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
