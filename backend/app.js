//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();
const port = process.env.PORT // 5000;

// MIDDLEWARE

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

//database connect
mongoose.connect('mongodb+srv://root:root@mevn.wlzbj.mongodb.net/test',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:true,
  useCreateIndex:true,
})
.then(()=>console.log("connected to the database!"))
.catch((err) =>console.log(err));

// routes prefix
app.use("/api/post", require("./routes/routes"));

app.listen(port,() => console.log('server running at http://localhost:5000'));