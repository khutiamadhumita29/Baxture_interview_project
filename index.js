const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;


// import routes 
let fileRoutes = require('./src/routes/fileRoutes')
app.use('/',fileRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });