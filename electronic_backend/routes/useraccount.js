var express = require("express");
var router = express.Router();
var pool=require('./pool');
var upload=require('./multer');
const fs = require('fs');
const { errorMonitor } = require("events");

router.post("/submit_useraccount", function (req, res) {
  try {
 console.log("Data from front-end", req.body);
    pool.query(
      "insert into useraccount (title,emailid, mobileno, username, addres, pincode) value(?,?,?,?,?,?)",
      [  req.body.title,
        req.body.emailid,
        req.body.mobileno,
        req.body.username,
        req.body.address,
        req.body.pincode,
      ],
      function (error, result) {
        if (error) {
          console.log("error of submit user registration", error);
          res
            .status(200)
            .json({ status: false, message: "User registration  not Submit!" });
        } else {
          // console.log("result of submit user Registration", result);
          res.status(200).json({
            status: true,
            message: "Account Registration Sucessfully.",
            data: result,
          });
        }
      }
    );
  } catch (e) {
    // console.log("server error in node Backend xxxxx", e);
    res.status(200).json({ status: false, message: "Server Error......!" });
  }
});
//check user account 
router.post('/check_account',function(req,res){
  try{ 
    console.log('data from body xxxxxxx',req.body)
    pool.query('select * from useraccount where mobileno=? or emailid=?',[req.body.mobileno,req.body.mobileno],
    function(error,result)
              {
                if(error)
                { console.log("error of check user",error)  
                 res.status(200).json({status:false,message:'user not found'}) 
                }
                else
                {
                  // console.log("error of check user",result)
                   if(result.length==1)  
                   {res.status(200).json({status:true,message:'Wel-Come',data:result}) 
                   }
                   else
                   {res.status(200).json({status:false,message:'Create account',data:[]}) 
                   }
                }
              })
  }
  catch(e)
  {
     res.status(200).json({status:false,message:'DataBase Error'})
  }
})
//delete account
router.post("/deleteaccount",function(req,res){
 pool.query("DELETE FROM useraccount WHERE useraccountid=? and emailid=? or mobileno =?",[req.body.useraccounid,req.body.emailid,req.body.mobileno],
 function(error,result)
 {
  if(error)
  {
    res.status(200).json({status:false,message:'User Account was not Deleted!'})
  }
  else{
    res.status(200).json({status:true,message:'UserAccount Was Deleted!',data:result})
  }
 }
 )
})

module.exports = router;