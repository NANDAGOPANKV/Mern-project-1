// passwor & user : ww0XqJmIB25c9PIR nandagopan
// import modules   
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config();

//app
const app = express();

//db
mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('DB CONNECTED')).catch((error)=> console.log('DB CONNECTED ERROR',error))

//midleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
const testRoutes = require('./routes/test');
app.use("/",testRoutes);

//port
const port = process.env.PORT || 5000;

// listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
