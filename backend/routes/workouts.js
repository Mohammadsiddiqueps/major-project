const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
  res.json({
       mssg: 'getted some message'})
})

router.get('/:id',(req,res)=>{
    res.json('get a single')
})

router.post('/',(req,res)=>{
    res.json('post a something')
})
router.delete('/:id',(req,res)=>{
    res.json('delete a single')
})
router.patch('/:id',(req,res)=>{
    res.json('update a single')
})


module.exports=router