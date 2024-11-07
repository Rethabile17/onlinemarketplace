const express = require ('express');
const app = express() ;
const cors = require('cors');
const dbRoutes =  require("./routes/db") ;
const authRoutes = require("./routes/auth");



app.use(cors());  
app.use(express.json()) ;

app.use('/api' , dbRoutes);
app.use('/auth' , authRoutes);                  
app.listen(5001,  ()=>{
    console.log('Server is running on port  http://localhost:5001')

})

