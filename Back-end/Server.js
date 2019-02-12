const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('validator')
const {userSchema} = require('./Schema')
const {adSchema} = require('./SChema')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})



// connect to mongo
mongoose.connect('mongodb://localhost:27017/ekrili')
.then(()=>console.log('connected'))
.catch(err=>console.log('errrr', err))


const app = express()

app.use(bodyParser.json())

app.use('/upload',express.static('upload'))

const isLog = (req,res,next)=>{
    
      if ( ! req.header('x-auth-token')) return false
    const log = jwt.verify(req.header('x-auth-token'),"jwtPrivateToken")
  
    next()
    
}

 
// declare class 
 const User =  mongoose.model('users',userSchema)
 const Ad = mongoose.model("ads",adSchema)
   
 // create new user
async function createUser(obj) {
    const user = new User(obj)
       return await user.save()
        
}
// get all user
 async function getAllUser(){
   const res = await User.find()
   return res
}

// get ads 

async function getAds(){
const res = await Ad.find()
return res
}

async function findOnAd(id){

    const res =await Ad.findOne({_id:id})
      return res
}

async function createAd(ad){

    const newAd = new Ad(ad)

    return await newAd.save()
}

async function login(login,pass){
        
    const user = await User.findOne({phone:login,password:pass})
   
    return user
   
} 


app.get('/users',(req,res)=>{
getAllUser().then((data=>{
    res.send(data)
}))
})
// routage avec express methode get  utilisateur avec un id précie
app.get('/users/:id',(req,res)=>{
console.log(req.params.id)
    User.findOne({_id:req.params.id}).then(data=>{
        res.send(data)
    })

  
}) 
// routage avec express du methode post ajouter des utilisateur
app.post('/users/add',(req,res)=>{


    createUser(req.body.user).then((data)=>{
        
        res.send(data)
        
    })})
 // routage avec express pour update un utilisateur 
 app.put('/users/update/:user',(req,res)=>{
 console.log(req.body);
 console.log(req.params);

    
 User.findOneAndUpdate(req.params.user_id,{$set:req.body}, function(err, result){
    if(err){
        console.log(err);
    }
    console.log("RESULT: " + result);
    res.send('Done')
});

  })
app.delete('/users/delete/:user', (req,res)=>{
    User.findOneAndDelete(req.params.user_id).exec().then(function(doc)
    {return doc}).catch(function(error){
        return error
    })
})


  
// routage pour ajouter des ads 
    app.post('/user/ad',(req,res)=>{

        let owner = req.body.val
        
        Ad.find({'owner._id':owner._id}).then(data=>{
           res.send(data)
        })
        
    })
    //routage avec put pour update ad 
  
app.post('/fileup',upload.single('img'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})



app.get('/search/:city/:search/:category',(req,res)=>{

    let search = req.params.search
    let city = req.params.city
    let category = req.params.category
   
if(search=='all'&& city=='all'){


    getAds().then((data)=>{
        res.send(data)
})
    
}else{
if(city==='all'){
    Ad.find({title:new RegExp('.*'+search+'.*', "i")}).then(data=>{
        res.send(data)
    })
}
if(search=== 'all'){

    Ad.find({city:city}).then(data=>{
        res.send(data)
    })
}
if(search!=='all' && city!=='all'){

Ad.find({title:new RegExp('.*'+search+'.*', "i")}).and([{city:city}]).then(data=>{
    res.send(data)
})
}}


})


app.listen(5000,(err)=>{
    err ? console.log('errr'):console.log('runn')
})