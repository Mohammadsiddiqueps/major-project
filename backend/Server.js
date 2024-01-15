require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const workout=require('./routes/workouts')
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/',workout)

//listening 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

