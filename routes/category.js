const express = require("express");
const router = express.Router();
const Category = require("../Model/Category");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'drix4f4rn',
    api_key:'898855121829934',
    api_secret:'jCtTHqrIAFkd-6IKBENlblo-TTI'
})

// Post Category
router.post('/',async(req,res)=>{

    try{
    const file = req.files.photo;
    const result = cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        console.log(result);
        
    })
    
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:err
        })
        
    }
})

// Get category
router.get("/", async (req, res) => {
  try {
    const data = await Category.find().select("_id name photo");
    res.status(200).json({
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});

module.exports = router;
