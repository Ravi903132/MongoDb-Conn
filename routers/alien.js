const express = require('express')
const router=express.Router()

const Alien = require('../model/aliens.js')

router.get('/', async (req,res)=>{
    try{
       const aliens= await Alien.find()
       res.json(aliens)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async (req,res) =>{
     try{
        const aliens= await Alien.findById(req.params.id)
        res.json(aliens)
     }catch(err)
     {
        res.send('Error' + err)
     }
})

router.post('/', async (req,res)=>{
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })

    try{
        const a1= await alien.save()
        res.json(a1)
    }catch(err)
    {
        res.send('Error' + err)
    }
})

router.delete('/:id', async (req,res)=>{
    try{
       const data= await Alien.findByIdAndDelete(req.params.id)
       res.send(data)
    }
    catch(err)
    {
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req,res)=>{
    try{
       const _id = req.params.id;
       const data = await Alien.findByIdAndUpdate(_id,req.body,{
        new:true
       });
       res.send(data)
    }catch(err)
    {
        res.send('Error' + err)
    }
})


module.exports = router