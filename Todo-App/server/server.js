require('dotenv').config();
const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require ('./routes/index');

const app = express();
const port = process.env.PORT


app.use(express.json())
app.use(cors())

// Database connection
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("Database is connected"))
    .catch((err)=> console.log(err))

app.use(routes)

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})