const express=require("express");
const app=express();

const path =require("path");
const port=3007;
const ejs = require("ejs");

const multer=require("multer");
const upload=multer({dest:"uploads/"});
const storage=multer.diskStorage({
    destination: function(req,res,cb){
        return cb(null,"/uploads");

    },
    filename:function (req,res,cb){
        return cb(null,`${Date.now()}-${file.originalname}}`)
    }
})


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    return res.render("homepage")
});
app.post("/upload",upload.single("profile_image"),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.redirect("/"); 
})

app.listen(port,()=>{console.log(`server is listening on ${port}`)});
