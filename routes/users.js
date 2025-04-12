const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/sign-up", async (req, res) => {
  try {
    const user = await User.find({ userName: req.body.userName });
    if (user.length > 0) {
      return res.status(500).json({
        msg: "user already register...",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const addUser = await new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
    });
    const userSave = await addUser.save();
    res.status(200).json({
      addUser: userSave,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});
// User Login

router.get("/login", async (req, res) => {

    try{
        const user = await User.find({ userName: req.body.userName });
  if (user.length == 0) {
    return res.status(500).json({
      msg: "User Not Register...",
    });
  }

  const isMatch = await bcrypt.compare(req.body.password, user[0].password);
  if (!isMatch) {
    return res.status(500).json({
      msg: "Invalid user or password",
    });
  }
 const token = await jwt.sign(
    {
      userName: user[0].userName,
      email: user[0].email,
      phone: user[0].phone,
    },
    "demo",
    {
      expiresIn: "365d",
    }
  );
  res.status(200).json({
    userName:user[0].userName,
    email:user[0].email,
    phone:user[0].phone,
    token:token
  })
    }
    catch(err){
       console.log(err);
       res.status(500).json({
        error:err
       })
        
    }
  
});
module.exports = router;
