const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/fixture',(req,res)=>{
    res.render('fixture')
})
router.get('/Contact',(req,res)=>{
    res.render('contact')
})
router.get('/Teams/:id',(req,res)=>{
    const id=req.params.id
    if(id==='brazil')
        res.render('brazil')
    else if(id==='argentina')
        res.render('argentina')
    else if(id==='italy')
        res.render('italy')
    else if(id==='germany')
        res.render('germany')
    
    
})
router.get('/details/:id',(req,res)=>{
    const id=req.params.id
    res.render('match_details')
})
module.exports=router