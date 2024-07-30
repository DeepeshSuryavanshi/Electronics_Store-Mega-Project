// import uSeState
import { useEffect, useState } from "react";
// image import
import categoryicon from "../../assets/add.png"
// sweetalert
import Swal from "sweetalert2";
// Import MUI Compponents
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
    height: "370px",
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

export default function Brands() {
  // constant of Data, Brand
  const [BrandName, setBrandName] = useState("");
  const [Image, setImage] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  const [Categorylist, setCategorylist] = useState([]);
  const [Categoryid,SetCategoryid]= useState('')
  // Categoryfill
  const featchAllCateegory=async()=>{
    var result=await getData('Category/Dispaly_all_category');
   setCategorylist(result.data);
  };
  useEffect(function(){
    featchAllCateegory();
  },[])
  const fillallCategory=()=>{
    return Categorylist.map((item)=>{
      return <MenuItem value={item.Categoryid}>{item.Categoryname}</MenuItem>
    })
  }
  // handleReset
  const handleReset = () => {
    setBrandName("");
    setImage({ Bytes: "", filename: "" });
    SetCategoryid("");
  };
  // set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (BrandName.length == 0) {
      handleError("please input Brand", "BrandName");
      error = true;
    }
    if (Image.filename.length == 0) {
      handleError("please select Image", "image");
      error = true;
    }
    if(Categoryid.length == 0){
      handleError("Please Select Category","Category")
      error = true;
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
      formData.append("Brandname", BrandName);
      formData.append("Categoryid",Categoryid)
      formData.append("image", Image.Bytes);
      var responce = await postData("Brand/submit_Brand", formData);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Brand",
          text: responce.message,
          toast: true,
        });
        handleReset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Brand",
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
       <Heading image={categoryicon} caption="Brands" list="list"  link={"/Display_all_Brands"} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={BrandName}
              onFocus={() => handleError("", "BrandName")}
              error={errors.BrandName}
              helperText={errors.BrandName}
              label="Brand"
              onChange={(event) => setBrandName(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              component="label"
                 fullWidth
                 variant="contained"
                 startIcon={<CloudUploadIcon />}
              onFocus={() => handleError("", "image")}
            >
              <input
                hidden
                onChange={handleimage}
                type="file"
                accept="images/*"
                multiple
              />
              Chose LOGO Here
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
         <Avatar src={Image.filename} alt="Brand" variant="round" style={{width:70,height:70}} />
         </Grid>
         <Grid item xs={12} >

         <FormControl fullWidth>
  <InputLabel >Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Categoryid}
    label="Age"
    onChange={(event)=>SetCategoryid(event.target.value)}
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
