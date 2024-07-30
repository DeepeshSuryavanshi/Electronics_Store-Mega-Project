var express = require("express"); 
var router = express.Router();
// mysql
var pool = require("./pool");
var upload = require("./multer");
const fs = require("fs");

// banner submit API upload.single("Files"),
router.post("/submit_categorybanner", upload.single("file"), function (req, res)
{  console.log("noad server Run data post .")
   console.log('Body responce ',req.body);
   console.log("Filesssss",req.file)
try{
    console.log("data Body  form front_end ",req.body);
    pool.query('insert into categorybanner (categoryid, brandid, file) values(?,?,?)',
    [req.body.Categoryid,req.body.Brandsid,req.file.filename],
  function(error,result){
   if(error)
   { console.log('error category sumitedd,',error);
   res.status(500).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   console.log('result category sumitedd,',result);
    res.status(200).json({status:true,message:'Banner Submited Sucessfully'})
}
  })
}
catch(e)
{  console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}

});


module.exports = router;
