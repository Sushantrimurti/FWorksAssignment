const express = require('express')
const router = express.Router()
const datastore = require('../models/keyvalue')

module.exports = router
router.get('/',async(req,res) => {

   try{
       const key =await datastore.find()
       res.json(key)
   }catch(err){
       res.status(500).json({message:err.message})
   }


})

router.get('/:id',getRole,(req,res) => {
    res.json(res.role);
})


router.post('/',async(req,res) => {
    
    const key= new datastore({
        name:req.body.name,
        role:req.body.role
    })
    try{
        const newKey = await key.save()
        res.status(201).json(newKey)
    }catch(err){
        res.status(400).json({message:err.message})
    }

})


router.delete('/:id',getRole,async(req,res) => {
    
    try{
        await res.role.remove()
        res.json({message:'Deleted Role'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})


async function getRole(req,res,next){
    let role
    try{
        role = await datastore.findById(req.params.id)
        if(role == null){
            return res.status(404).json({message: 'Cannot find role'})

        }
    }catch(err){
            return res.status(500).json({message:err.message})

        }
        res.role=role
        next()
    }

    


module.exports = router