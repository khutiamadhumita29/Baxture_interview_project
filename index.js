const express = require('express');
const mongoose = require('mongoose')
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// db connection 
mongoose
  .connect(process.env.URI, {
  })
  .then(() => {
    console.log("Connected to the database!");
  })

// import routes 
let fileRoutes = require('./src/routes/fileRoutes')
app.use('/',fileRoutes)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });