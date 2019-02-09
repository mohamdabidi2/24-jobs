const express =require('express');
const mongoose=require('mongoose');
const bodyParser =require('body-parser')
const userSchema =require ('./Schema');
//connection base
mongoose.connect ('mongodb://localhost:27017/jobs_24');
const app= express ();
// definition dd l'utilisateur 
const User=mongoose.model('users',userSchema);
// function pour cree utilisateur
async function createUser(obj){
const user= new User (obj);
return await user.save();
}
// sheme d&ajouter un utilisateur 
app.post('/users/add',(req,res)=> {
    createUser(req.body.user).then((data)=>{
            res.send(data)
            console.log('ggggg')
    })
})




app.listen(5000,(err)=> {
    err? console.log('error'):console.log('run')
})