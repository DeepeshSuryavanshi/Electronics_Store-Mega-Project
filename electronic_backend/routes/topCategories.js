var express = require("express");
var router = express.Router();
var pool=require('./pool');
var upload=require('./multer');
const fs = require('fs');

/* Category Database insert  */
router.post("/submit_category",upload.single('image'), function (req, res)
{ // alert("noad server Run data post .")
   console.log("data Body  form front_end ",req.body);
   console.log("req of file by body",req.file)
   try{
    pool.query('insert into `top categories` (topcategoriesname,topcategoriesimage) values(?,?)',
              [req.body.Categoryname,req.file.filename],
  function(error,result){
   if(error)
   { console.log('error category sumitedd,',error);
   res.status(200).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   console.log('result category sumitedd,',result);
    res.status(200).json({status:true,message:'Top Category Submited Sucessfully'})
}
  })
}
catch(e)
{  console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}

});


// Display All Category 
router.get("/Dispaly_all_category", function (req, res)
{ 
   try{
    pool.query('Select * from `top categories`',
  function(error,result){
   if(error)
   { console.log('error category sumitedd,',error);
   res.status(200).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   console.log('result category sumitedd,',result);
    res.status(200).json({data:result,status:true,message:'Top Category Featch Sucessfully'})
}
  })
}
catch(e)
{  console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}
});
// end now 
module.exports = router;
