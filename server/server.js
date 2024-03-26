const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const PORT=7000;

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://jonesroshini2003:admin@cluster0.54q9jvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const calculation=mongoose.model('Calculations',{
   name:String,
   email:String,
   password:String,
});

app.post('/register',async(req,res)=>{
    try {
       const{name,password,email}=req.body;
       const value=new calculation({
        name,password,email,
       });
        await value.save();
        res.status(201).json({message:'Saved Successfully'})
    } catch (error) {
        console.log(error)
        res.status(501).json({message:'Server error'})
    }
})

app.post('/login',async(req,res)=>{
    try {
        const{name,password}=req.body;
        const object=await calculation.findOne({name});
        if(!object){
            return res.status(401).json({success:false,message:'User not found'});
        }
        if(object.password===password){
            return res.status(201).json({success:true,message:'Successfull'})
        }else
        {
            return res.status(400).json({success:false,message:'password mismatch'})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server issue'})
    }
})

app.listen(PORT,()=>{
    console.log(`server started runnung at port ${PORT}`);
})





