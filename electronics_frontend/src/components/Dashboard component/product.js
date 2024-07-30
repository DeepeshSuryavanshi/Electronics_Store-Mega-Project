// import uSeState
import { useEffect, useState } from "react";
// image import
import categoryicon from "../../assets/add.png"
// sweetalert
import Swal from "sweetalert2";
// Import MUI Compponents
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormControl,InputLabel,select,MenuItem,Select, Grid, Button, TextField, Avatar } from "@mui/material";
// impport styles components
import { makeStyles } from "@mui/styles";
// post data API CAll server
import { postData,getData } from "../../services/FeatchNodeServices";
import Heading from "./Heading";
var useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "",
  },
  box: {
    width: "500px",
    height: "460px",
    backgroundColor: "#dfe6e9",
    margin: "10px",
    padding: "20px",
    borderRadius: "10px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Products(props) {
  // constant of Data, Brand
  const [Categoryid,SetCategoryid]= useState('')
  const [Brandid,SetBrandid]= useState('')
  const [Productname, setProductname] = useState("");
  const [Image, setImage] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  // List item data variable 
  const [Brandlist,setBrandlist] = useState([])
  const [Cateegorylist, setCategorylist] = useState([]);
  // Categoryfill
  const featchAllCateegory=async()=>{
    var result=await getData('Category/Dispaly_all_category');
   setCategorylist(result.data);
  };
  // Brands fill
  const featchallBrands=async(cid)=>{
    console.log("body for brand select",cid)
    var result=await postData('Brand/Select_Brands',{Categoryid:cid});
    setBrandlist(result.data);
  };
  useEffect(function(){
    featchAllCateegory();
  },[])
  // filol Category
  const fillallCategory=()=>{
    return Cateegorylist.map((item)=>{
      return <MenuItem value={item.Categoryid}>{item.Categoryname}</MenuItem>
    })
  }
  // fill Brands
  const fillallBrands=()=>{
    return Brandlist.map((item)=>{
      return <MenuItem value={item.brandsid}>{item.brandname}</MenuItem>
    })
  }
  // Categoryidset  featch Brands
  function handlechange(event){
    SetCategoryid(event.target.value)
    featchallBrands(event.target.value);
  }
  // handleReset
  const handleReset = () => {
    setProductname("");
    setImage({ Bytes: "", filename: "" });
    SetCategoryid("");
    SetBrandid("");
  };
  // set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (Productname.length == 0) {
      handleError("please input Productname", "Productname");
      error = true;
    }
    if (Image.filename.length == 0) {
      handleError("please select Image", "image");
      error = true;
    }
    if(Categoryid.length == 0){
      handleError("Please Select Category","Category")
    }
    if(Brandid.length == 0){
      handleError("Please Select Brand","Brand")
    }
    return error;
  };
  //image set function
  const handleimage = (event) => {
    setImage({
      Bytes: event.target.files[0],
      filename: URL.createObjectURL(event.target.files[0]),
    });
  };

  // submiot button
  const handleSubmit = async () => {
    var error = validation();
    console.log("errors check", errors);
    console.log("error == true", error);
    if (error == false) {
      var formData = new FormData();
      formData.append("Brandsid",Brandid)
      formData.append("Productname", Productname);
      formData.append("Categoryid",Categoryid)
      formData.append("image", Image.Bytes);
      console.log(formData)
      var responce = await postData("Products/submit_Products",formData);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Product",
          text: responce.message,
          toast: true,
        });
        handleReset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Product",
          text: responce.message,
          toast: true,
        });
      }
    }
  };

  // styles of makeStyles
  const useStyle = useStyles();
  // return Display
  return (
    <div className={useStyle.root}>
      <div className={useStyle.box}>
        <Grid container spacing={3}>
          <Grid></Grid>
          <Grid item xs={12}>
       <Heading image={categoryicon} caption="Product" list="list"  link={"/Display_all_Products"} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={Productname}
              onFocus={() => handleError("", "Productname")}
              error={errors.Productname}
              helperText={errors.Productname}
              label="Product-name"
              onChange={(event) =>setProductname(event.target.value)}
              fullWidth
            />
          </Grid>
          
         <Grid item xs={12} >

         <FormControl fullWidth>
  <InputLabel >Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Categoryid}
    label="Category"
    onChange={handlechange}
  >
    {fillallCategory()}
  </Select>
  <div          style={{
                display: "flex",
                paddingLeft: "15px",
                paddingTop: "5px",
                color: "#D32F2F",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "20px",
              }}
            >
              {errors.Category}
            </div>
</FormControl>
     
           </Grid>
           <Grid item xs={12} >

<FormControl fullWidth>
<InputLabel >Brands</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={Brandid}
label="Age"
onChange={(event)=>SetBrandid(event.target.value)}
>
{fillallBrands()}
</Select>
<div style={{
       display: "flex",
       paddingLeft: "15px",
       paddingTop: "5px",
       color: "#D32F2F",
       fontSize: "13px",
       fontWeight: "500",
       lineHeight: "20px",
     }}
   >
     {errors.Brand}
   </div>
</FormControl>

  </Grid>
           <Grid item xs={6}>
            <Button
              component="label"
                 fullWidth
                 variant="contained"
                 startIcon={<CloudUploadIcon/>}
              onFocus={() => handleError("", "image")}
            >
              <input
                hidden
                onChange={handleimage}
                type="file"
                accept="images/*"
                multiple
              />
             Upload Image
            </Button>
            <div
              style={{
                display: "flex",
                paddingLeft: "15px",
                paddingTop: "5px",
                color: "#D32F2F",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "20px",
              }}
            >
              {errors.image}
            </div>
          </Grid>
         <Grid item xs={6}  className={useStyle.center}>
         <Avatar src={Image.filename} alt="Product" variant="squre" style={{width:70,height:70}} />
         </Grid>
           <Grid item xs={6}>
            <Button
              component="label"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              component="label"
              fullWidth
              variant="contained"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
