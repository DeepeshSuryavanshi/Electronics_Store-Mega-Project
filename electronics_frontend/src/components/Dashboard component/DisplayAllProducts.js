// sweetalert
import Swal from "sweetalert2";
// Import MUI Compponents //table material
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormControl,InputLabel,select,MenuItem,Select, Grid, Button, TextField, Avatar } from "@mui/material";
// useNavigate 
import { useNavigate } from "react-router-dom";
// post data API CAll server
import { postData } from "../../services/FeatchNodeServices";
// icon
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import MaterialTable from "@material-table/core";
// getdata import
import { getData, serverURL } from "../../services/FeatchNodeServices";
// useState
import { useState, useEffect } from "react";
// Contant media contant
import categoryicon from "../../assets/add.png"
// make CSS Style
import { makeStyles } from "@mui/styles";
// Dilog materials
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
var useStyles = makeStyles({
  reportroot: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "",
  },
  reportbox: {
    width: "720px",
    height: "550px",
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
  right: {
    display: "flex",
    justifyContent: "right ",
    alignItems: "center",
  },
});

export default function DisplayAllProducts() {
  var navigate=useNavigate()
  // // constant of Data of update form , Brands
  const [Brandsid, setBrandsid] = useState("");
  const [Categoryid, setCategoryid] = useState("");
  const [productid,setproductid] = useState("")
  const [Productname, setProductname] = useState("");
  const [image,setimage] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  const [temPicture, setTemPictFure] = useState("");
  const [image2,setimage2]=useState("");
  // list data variable
  const [Brandlist,setBrandlist] = useState([])
  const [Cateegorylist,setCateegorylist]= useState([])
  // Display Statu of edit display icon
  const [statusCamera, setstatusCamera] = useState(false);
  const [statusBtn, setstatusBtn] = useState(false);
  const [open,setOpen] = useState(false);
  //edit upDate category  data form rowData
  const handleOpen = (rowData) => {
    setproductid(rowData.productid)
    setBrandsid(rowData.brandsid);
    setCategoryid(rowData.Categoryid);
    setProductname(rowData.productname); 
    setimage({ filename: `${serverURL}/images/${rowData.image}`, bytes: "" });
    setimage2({ filename:rowData.image, bytes: "" });
    setTemPictFure(`${serverURL}/images/${rowData.image}`);
    setOpen(true);
    featchallBrands(rowData.Categoryid);
  };
   // Brands fill
   const featchallBrands=async(cid)=>{
    console.log('categoryid for body brands featch ');
    var result=await postData('Brand/Select_Brands',{Categoryid:cid});
    setBrandlist(result.data);
  };
  // Brand form of pop up /////////////////////////////////
  const BrandForm = () => {
    //image set function
    const handleimage = (event) => {
      setimage({
        Bytes: event.target.files[0],
        filename: URL.createObjectURL(event.target.files[0]),
      });
      setstatusBtn(true);
    };
    //cancle button
    const hancleCancle = () => {
      setstatusBtn(false);
      setimage({ filename: temPicture, Bytes: "" });
    };
    //save button
    const handleSave = () => {
        handleEidtimage();
    };

    // button Save&cancle component
    const SaveCanclebtn = () => {
      return (
        <div>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={hancleCancle}>Cancle</Button>
        </div>
      );
    };
   
    // fill  All category section
   const featchAllCateegory=async()=>{
    var result=await getData('Category/Dispaly_all_category');
    setCateegorylist(result.data);
  };
   // Brands fill
   const featchallBrands=async(categoryid)=>{
    var result=await postData('Brand/Select_Brands',{Categoryid:categoryid});
    setBrandlist(result.data);
  };
  useEffect(function(){
    featchAllCateegory();   
  },[])
  function handlechange(event){
    setCategoryid(event.target.value)
    featchallBrands(event.target.value);
  }
  //  fill category
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
    var useStyle = useStyles();
    return (
      <div className={useStyle.box}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={useStyle.right}>
            {statusBtn ? <SaveCanclebtn /> : <></>}
            <Button
              onMouseLeave={() => setstatusCamera(false)}
              onMouseEnter={() => setstatusCamera(true)}
              style={{ position: "relative" }}
              component="label"
              onFocus={() => handleError("", "image")}
            >
              {statusCamera ? (
                <div
                  style={{
                    display: "flex",
                    bottom: 10,
                    right: 10,
                    position: "absolute",
                    zIndex: 2,
                    backgroundColor: "#ffff",
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <AddAPhotoIcon style={{ color: "black" }} />
                </div>
              ) : (
                <></>
              )}
              <input
                hidden
                onChange={handleimage}
                type="file"
                accept="images/*"
                multiple
              />
              <Avatar
                src={image.filename}
                sx={{ width: 100, height: 100, borderRadius: 1 }}
                alt="Brand"
                variant="round"
              />
            </Button>
            <div
              style={{
                display: "flex",
                paddingLeft: "15px",
                paddingTop: "5px",
                color: "#D32F2F",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "20px",
              }}
            >
              {errors.image}
            </div>
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={Productname}
              onFocus={() => handleError("", "ProductName")}
              error={errors.CategoryName}
              helperText={errors.CategoryName}
              label="Brand Name"
              onChange={(event) => setProductname(event.target.value)}
              fullWidth
            />
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
     {errors.Productname}
   </div>
          </Grid>
          
          <Grid item xs={12} >

<FormControl fullWidth>
<InputLabel >Category</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={Categoryid}
label="Age"
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
     {errors.CategoryID}
   </div>
</FormControl>

</Grid>
<Grid item xs={12} >

<FormControl fullWidth>
<InputLabel >Brands</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={Brandsid}
label="Age"
onChange={(event)=>setBrandsid(event.target.value)}
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
             
        </Grid>
      </div>
    );
  };
////////////////////////////////product FormEnd\\\\\\\\\\\\\\\\\\\\\\\\\\

// set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (Productname.length == 0) {
      handleError("please input productname", "Productname");
      error = true;
    }
    if (Categoryid.length == 0) {
      handleError("please input Category","Category");
      error = true;
    }
    if (image.filename.length == 0) {
      handleError("please select Image", "image");
      error = true;
    }
    if (Brandsid.length == 0) {
      handleError("please select Brand", "Brand");
      error = true;
    }
    return error;
  };
  // submiot button
  const handleSubmit = async () => {
    var error = validation();
    console.log("errors check", errors);
    console.log("error == true", error);
    if (error == false) {
      var body = {Productname:Productname,Categoryid: Categoryid, Brandsid:Brandsid,productid:productid};
      var responce = await postData("Products/edit_product_data", body);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Product",
          text: responce.message,
          toast: true,
        });
        featchAllProduct();;
        handleClose();
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
  // picture update function
  const handleEidtimage = async () => {
    setstatusBtn(false);
    var error = validation();
    console.log("errors check", errors);
    console.log("error == true", error);
    if (error == false) {
      var formData = new FormData();
      formData.append("productid",productid);
      formData.append("image", image.Bytes);
      formData.append("image2",image2.filename);
      var responce = await postData("Products/edit_product_image", formData);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Product",
          text: responce.message,
          toast: true,
        });
        featchAllProduct();;
        handleClose();
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
  //delete function
  const handleDelete = (rowData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        var result =await postData("Products/Product_Delete", {
          productid: rowData.productid,
          image:rowData.image
        });
        if (result.status) {
          featchAllProduct();
          handleClose();
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: result.message,
            toast: true,
          });
        } else {
          featchAllProduct();;
          handleClose();
          Swal.fire({
            icon: "error",
            title: "Not Deleted",
            text: result.message,
            toast: true,
          });
        }
      }
    });
  };
  // Brands edit Function dilog
  const showproductDialog = () => {
    return (
      <Dialog open={open}>
        <DialogTitle>Update Product Detail</DialogTitle>
        <DialogContent>{BrandForm()}</DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleSubmit}>Edit Data</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };
  // close  calegory popup
  const handleClose = () => {
    setOpen(false);
  };

  var classes = useStyles();
  const [productlist, setproductlist] = useState([]);
  var featchAllProduct = async () => {
    var responce = await getData("Products/Display_all_Products");
    setproductlist(responce.data);
  };
  useEffect(function () {
    featchAllProduct();
  }, []);
  function DisplayAllProducts() {
    return (
      <MaterialTable
        title="Product's List"
        columns={[
          { title: "ID", field: "productid" },
          { title: "Product-Name", field: "productname" },
          { title: "BrandsName", render:(rowData)=><div>{rowData.brandsid}/{rowData.brandname}</div> },
          { title: "CategoryName",render:(rowdata)=><div>{rowdata.Categoryid}/{rowdata.categoryname}</div>},
          {
            title: "image",
            render: (rowData) => (
              <img
                src={`${serverURL}/images/${rowData.image}`}
                width={60}
              ></img>
            ),
          },
        ]}
        data={productlist}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Category",
            onClick: (event, rowData) => handleOpen(rowData),
          },
          {
            icon: "delete",
            tooltip: "delete Category",
            onClick: (event, rowData) => handleDelete(rowData),
          },
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) =>navigate('/Dashboard/Products'),
          },
        ]}
      />
    );
  }

  return (
    <div className={classes.reportroot}>
      <div className={classes.reportbox}>
        {DisplayAllProducts()}
        {showproductDialog()}
      </div>
    </div>
  );
}
