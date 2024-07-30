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
import { rootShouldForwardProp } from "@mui/material/styles/styled";
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
    height: "auto",
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

export default function DisplayAllCategory() {
  var navigate=useNavigate()
  // // constant of Data of update form , Brands
  const [Brandsid, setBrandsid] = useState("");
  const [BrandName, setBrandName] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [Categoryid, setCategoryid] = useState("");
  const [logo,setlogo] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  const [temPicture, setTemPictFure] = useState("");
  const [logo2,setlogo2]=useState("");
  const [Cateegorylist,setCateegorylist]= useState([])
  // Display Statu of edit display icon
  const [statusCamera, setstatusCamera] = useState(false);
  const [statusBtn, setstatusBtn] = useState(false);
  const [open,setOpen] = useState(false);
  //edit upDate category  data form rowData
  const handleOpen = (rowData) => {
    setBrandsid(rowData.brandsid)
    setBrandName(rowData.brandname)
    setCategoryid(rowData.categoryid) 
    setCategoryName(rowData.Categoryname)
    setlogo({ filename: `${serverURL}/images/${rowData.logo}`, bytes: "" });
    setlogo2({ filename:rowData.logo, bytes: "" });
    setTemPictFure(`${serverURL}/images/${rowData.logo}`);
    setOpen(true);
  };
  
  // Brand form of pop up /////////////////////////////////
  const BrandForm = () => {
    //image set function
    const handleimage = (event) => {
      setlogo({
        Bytes: event.target.files[0],
        filename: URL.createObjectURL(event.target.files[0]),
      });
      setstatusBtn(true);
    };
    //cancle button
    const hancleCancle = () => {
      setstatusBtn(false);
      setlogo({ filename: temPicture, Bytes: "" });
    };
    //save button
    const handleSave = () => {
      handleEidtlogo();
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
  useEffect(function(){
    featchAllCateegory();
  },[])
  const fillallCategory=()=>{
    return Cateegorylist.map((item)=>{
      return <MenuItem value={item.Categoryid}>{item.Categoryname}</MenuItem>
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
                src={logo.filename}
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
              {errors.Logo}
            </div>
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={BrandName}
              onFocus={() => handleError("", "BrandName")}
              error={errors.CategoryName}
              helperText={errors.CategoryName}
              label="Brand Name"
              onChange={(event) => setBrandName(event.target.value)}
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
     {errors.BrandName}
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
onChange={(event)=>setCategoryid(event.target.value)}
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
             
        </Grid>
      </div>
    );
  };
////////////////////////////////BrandFormEnd\\\\\\\\\\\\\\\\\\\\\\\\\\

// set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (BrandName.length == 0) {
      handleError("please input BrandName", "BrandName");
      error = true;
    }
    if (Categoryid.length == 0) {
      handleError("please input Category","CategoryID");
      error = true;
    }
    if (logo.filename.length == 0) {
      handleError("please select Image", "Logo");
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
      var body = {brandname:BrandName,Categoryid: Categoryid, Brandsid:Brandsid};
      var responce = await postData("Brand/edit_Brands_data", body);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Brand",
          text: responce.message,
          toast: true,
        });
        featchAllBrands();
        handleClose();
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
  // picture update function
  const handleEidtlogo = async () => {
    setstatusBtn(false);
    var error = validation();
    console.log("errors check", errors);
    console.log("error == true", error);
    if (error == false) {
      var formData = new FormData();
      formData.append("Brandsid", Brandsid);
      formData.append("logo", logo.Bytes);
      formData.append("oldlogo",logo2.filename );
      var responce = await postData("Brand/edit_Brand_logo", formData);
      if (responce.status) {
        featchAllBrands();
        Swal.fire({
          icon: "success",
          title: "Brand",
          text: responce.message,
          toast: true,
        });
        handleClose();
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
        var result =await postData("Brand/Brand_Delete", {
          brandsid: rowData.brandsid,
          logo:rowData.logo
        });
        if (result.status) {
          featchAllBrands();
          handleClose();
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: result.message,
            toast: true,
          });
        } else {
          featchAllBrands();
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
  const showCategoryDialog = () => {
    return (
      <Dialog open={open}>
        <DialogTitle>Update Brand Detail</DialogTitle>
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
  const [Brandslist, setBrandslist] = useState([]);
  var featchAllBrands = async () => {
    var responce = await getData("Brand/Display_all_Brands");
    setBrandslist(responce.data);
  };
  useEffect(function () {
    featchAllBrands();
  }, []);
  function DisplayAllCategory() {
    return (
      <MaterialTable
        title="Brands List"
        columns={[
          { title: "ID", field: "brandsid" },
          { title: "BrandsName", field: "brandname" },
          { title: "CategoryName",render:(rowData)=><div>{rowData.categoryid}/{rowData.Categoryname}</div>},
          {
            title: "image",
            render: (rowData) => (
              <img
                src={`${serverURL}/images/brands/${rowData.logo}`}
                width={60}
              ></img>
            ),
          },
        ]}
        data={Brandslist}
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
            onClick: (event) =>navigate('/Dashboard/Brands'),
          },
        ]}
      />
    );
  }

  return (
    <div className={classes.reportroot}>
      <div className={classes.reportbox}>
        {DisplayAllCategory()}
        {showCategoryDialog()}
      </div>
    </div>
  );
}
