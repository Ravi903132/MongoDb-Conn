const express=require('express');
const mongoose=require('mongoose');

const url='mongodb://localhost/AlienDBex'
const app = express();
const port=9000

const alienrouter=require('./routers/alien.js')
mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

app.use(express.json())

app.use('/aliens',alienrouter)

con.on('open',()=>{
    console.log('connected...')
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
