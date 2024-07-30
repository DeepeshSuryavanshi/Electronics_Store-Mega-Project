// import dependiceys
var express = require("express");
var router = express.Router();
const fs=require('fs')
// mySQL images
var pool=require('./pool');
var upload=require('./multer');
const { route } = require("./Category");
const e = require("express");

// Featch All Brands 
router.get("/Display_all_Brands",function(req,res,next){
  pool.query('select B.* ,(select categoryname from Category where Categoryid=B.Categoryid)as Categoryname from Brands B;',
  function(error,result){
    if(error)
    {
      res.status(200).json({status:false,message:'DB error Check DBServer'});
    }
    else
    {
      res.status(200).json({status:true,message:'Brands Featch Sucessfully',data:result});
    }
  })
})

/* Brand Database insert  */
router.post("/submit_brand",upload.single('image'), function (req, res)
{ // alert("noad server Run data post .")
  // console.log("data Body  form front_end ",req.body);
   try{
    pool.query('insert into brands (categoryid,brandname,logo) values(?,?,?)',[req.body.Categoryid,req.body.Brandname,req.file.filename],
  function(error,result){
   if(error)
   { 
    //console.log('error category sumitedd,',error);
   res.status(200).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   //console.log('result category sumitedd,',result);
    res.status(200).json({status:true,message:'Brand Submited Sucessfully'})
}
  })
}
catch(e)
{  
  //console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}

});

/*  data Brands update  */
router.post("/edit_Brands_data", function (req, res)
{ // alert("noad server Run data post .")
   console.log("data Body  form front_end ",req.body);
   try{
    pool.query('update brands set Categoryid=?,brandname=? where brandsid=? ',[req.body.Categoryid,req.body.brandname,req.body.Brandsid],
  function(error,result){
   if(error)
   { console.log('error category sumitedd,',error);
   res.status(200).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   console.log('result category sumitedd,',result);
    res.status(200).json({status:true,message:'Brand Updated Sucessfully'})
}
  })
}
catch(e)
{  console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}

});

// Update Brand Logo
router.post("/edit_Brand_logo",upload.single('logo'), function (req, res)
{ // alert("noad server Run data post .")
   console.log("data Body  form front_end ",req.body);
   console.log("data File  form front_end ",req.file.filename);
   try{
    pool.query('update Brands set logo=? where brandsid=? ',[req.file.filename,req.body.Brandsid],
  function(error,result){
   if(error)
   { console.log('error Brand sumitedd,',error);
   res.status(200).json({status:false,message:'Database Error, please contact DataBase Admin!'})
}
else
{   console.log('result Brand sumitedd,',result);
fs.unlinkSync(`public/images/${req.body.oldlogo}`);
    res.status(200).json({status:true,message:'Logo UpDated Sucessfully'});
}
  })
}
catch(e)
{  console.log('server error in node Backend xxxxx',e);
  res.status(200).json({status:false,message:'Server Error......!'})
}

});

// Brands Delete API s 
router.post("/Brand_Delete",function(req,res,next){
  try
  { console.log("data frm front-end",req.body)
    pool.query('Delete from brands where brandsid=?',[req.body.brandsid],
    function(error,result)
    { 
      if(error)
      {console.log("error in Delete Data brand",error)
        res.status(200).json({status:false,message:'Barnd not Deleted'});
      }
      else
      { console.log("Brand Delete Reasult",result)
      fs.unlinkSync(`public/images/Brands/${req.body.logo}`);
        res.status(200).json({status:true,message:'Brand was Deleted'});
      }
    }
    )

  }
  catch(e)
  {
    res.status(200).json({status:false,message:'Server error !'});
  }
})

// select brands
router.post("/Select_Brands",function(req,res,next){
  console.log("Body responce hello body responce ",req.body);
  pool.query('SELECT * FROM brands where categoryid=?',[req.body.Categoryid],
  function(error,result){
    if(error)
    {console.log("error select brands ",error);
      res.status(200).json({status:false,message:'DB error Check DBServer'});
    }
    else
    { console.log("result of select brands ",result);
      res.status(200).json({status:true,message:'Brands Featch selected Sucessfully',data:result});
    }
  })

})
module.exports = router;