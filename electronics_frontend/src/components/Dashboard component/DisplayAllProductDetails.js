// sweetalert
import Swal from "sweetalert2";
// Import MUI Compponents //table material
import { FormControl,InputLabel,FormControlLabel,
     select,FormLabel,MenuItem,Select, Grid, Button, TextField,
     RadioGroup,Radio, Avatar } from "@mui/material";
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
// ReactQuill
import ReactQuill from "react-quill";
import { DropzoneArea } from "material-ui-dropzone";
// Usememo react property Dropzone area 
import { useMemo } from "react";
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
    width: "auto",
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

// main function export
export default function DisplayAllProducts() {
  
  // DropZoneArea Modules
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link", "video"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
      },
    }),
    []
  );
  var navigate=useNavigate()
  // // constant of Data of update form , Brands
  const [Brandsid, setBrandsid] = useState("");
  const [Categoryid, setCategoryid] = useState("");
  const [productid,setproductid] = useState("")
  const [Productdetail, setProductdetail] = useState("")
  const [modelno, setmodelno] = useState("");
  const [color, setcolor] = useState("");
  const [price, setprice] = useState("");
  const [offerprice, setofferprice] = useState("");
  const [HSNcode, setHSNcode] = useState("");
  const [stock, setstocks] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");
  const [errors, seterrors] = useState({});
  const [temPicture, setTemPictFure] = useState("");
  const [image2,setimage2]=useState([]);
  // list data variable
  const [productlist,setproductlist]=useState([])
  const [allBrand,setallBrand] = useState([]);
  const [Brandlist,setBrandlist] = useState([])
  const [Cateegorylist,setCateegorylist]= useState([])
  // Display Statu of edit display icon
  const [statusCamera, setstatusCamera] = useState(false);
  const [statusBtn, setstatusBtn] = useState(false);
  const [open,setOpen] = useState(false);
  //edit upDate category  data form rowData
  const handleOpen = (rowData) => {
    setproductid(rowData.productid)
    setBrandsid(rowData.brandid);
    setCategoryid(rowData.categoryid);
    setProductdetail(rowData.productdetailsid); 
    setmodelno(rowData.modelno);
    setcolor(rowData.color);
    setdescription(rowData.description);
    setHSNcode(rowData.HSNcode);
    setprice(rowData.price);
    setofferprice(rowData.offerprice);
    setstatus(rowData.status);
    setstocks(rowData.stock);
    //setimage({ filename: `${serverURL}/images/${rowData.image}`, bytes: "" });
    //setimage2({ filename:rowData.image, bytes: "" });
    //setTemPictFure(`${serverURL}/images/${rowData.image}`);
    setOpen(true);
    featchallBrands(rowData.categoryid);
    featchallproduct(rowData.categoryid,rowData.brandid);
  };
   // Brands fill
   const featchallBrands=async(cid)=>{
    console.log('categoryid for body brands featch ');
    var result=await postData('Brand/Select_Brands',{Categoryid:cid});
    setBrandlist(result.data);
  };
   // product fill
   const featchallproduct = async (cid,bid) => {
    console.log("featch all product call");
    var result = await postData("Products/featch_product_for_detail", {
      Brandid:  bid,
      categoryid: cid,
    });
    setproductlist(result.data);
  };
  // Brand form of pop up /////////////////////////////////
  const BrandForm = () => {

    //image set function
    const handleimage = (event) => {
      // setimage({
      //   Bytes: event.target.files[0],
      //   filename: URL.createObjectURL(event.target.files[0]),
      // });
      setstatusBtn(true);
    };
    //cancle button
    const hancleCancle = () => {
      setstatusBtn(false);
     // setimage({ filename: temPicture, Bytes: "" });
    };
    //save button
    const handleSave = () => {
        handleEidtimage();
    };

    
    // fill  All category section
   const featchAllCateegory=async()=>{
    var result=await getData('Category/Dispaly_all_category');
    setCateegorylist(result.data);
  }
  useEffect(function(){
    featchAllCateegory();  
  },[])
  // Category handle !
  function handlechange(event){
    setCategoryid(event.target.value)
    featchallBrands(event.target.value)
  }
  // brand handle !
  function handlebrands(event){
    setBrandsid(event.target.value);
    var categoryid=Categoryid;
    featchallproduct(categoryid,event.target.value)

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
  // producduct fill area 
  const fillallproduct=()=>{
    return productlist.map((item)=>{
    return <MenuItem value={item.productid}>{item.productname}</MenuItem>      
    }) 
  }
    var useStyle = useStyles();
    return (
      <div className={useStyle.box}>
                <Grid container spacing={3}>
             <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Categoryid}
                label="Category"
                onChange={handlechange}
              >
                {fillallCategory()}
              </Select>
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
                {errors.Category}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Brands</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Brandsid}
                label="Brand"
                onChange={handlebrands}
              >
                {fillallBrands()}
              </Select>
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
                {errors.Brand}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productid}
                label="Product"
                onChange={(event) => {
                  setproductid(event.target.value);
                }}
              >
                {fillallproduct()}
              </Select>
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
                {errors.product}
              </div>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={modelno}
              onFocus={() => handleError("", "modelno")}
              error={errors.modelno}
              helperText={errors.modelno}
              label="Model no."
              onChange={(event) => setmodelno(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Color"
              fullWidth
              value={color}
              onChange={(event) => setcolor(event.target.value)}
              onFocus={() => handleError("", "color")}
              error={errors.color}
              helperText={errors.color}
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={HSNcode}
              onFocus={() => handleError("", "HSNcode")}
              error={errors.HSNcode}
              helperText={errors.HSNcode}
              label="HSN Code"
              onChange={(event) => setHSNcode(event.target.value)}
              fullWidth
            ></TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField
              value={price}
              onFocus={() => handleError("", "price")}
              error={errors.price}
              helperText={errors.price}
              label="Price"
              onChange={(event) => setprice(event.target.value)}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={offerprice}
              onFocus={() => handleError("", "offerprice")}
              error={errors.offerprice}
              helperText={errors.offerprice}
              label="offer Price"
              onChange={(event) => setofferprice(event.target.value)}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={stock}
              onFocus={() => handleError("", "stock")}
              error={errors.stock}
              helperText={errors.stock}
              label="Stack"
              onChange={(event) => setstocks(event.target.value)}
              fullWidth
            ></TextField>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Grid>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={status}
                  onChange={(event) => setstatus(event.target.value)}
                >
                  <FormControlLabel
                    value="continue"
                    control={<Radio />}
                    label="Continue"
                  />
                  <FormControlLabel
                    value="Discontinued"
                    control={<Radio />}
                    label="Discontinued"
                  />
                </RadioGroup>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "0px",
                    paddingTop: "0px",
                    color: "#D32F2F",
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "20px",
                  }}
                >
                  {errors.status}
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div>
              <h4>Description</h4>
            </div>
            <ReactQuill
              theme="snow"
              value={description}
              modules={modules}
              onChange={setdescription}
            />
            <div
              style={{
                display: "flex",
                paddingLeft: "0px",
                paddingTop: "0px",
                color: "#D32F2F",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "20px",
              }}
            >
              {errors.description}
            </div>
          </Grid>
          {/* <Grid item xs={12} className={useStyle.center}>
            <DropzoneArea
              acceptedFiles={["image/*"]}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) => setfiles(files)}
              // onClick={(files) => setImage(files)}
              filesLimit={7}
            />
          </Grid> */}
          <Grid item xs={12}>
            {/* <Button
               onClick={handleimage}
              startIcon={<CloudUploadIcon/>}
              onFocus={() => handleError("", "image")}
            >Upload Image
            </Button> */}
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
              {errors.files}
            </div>
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
    if (productid.length == 0) {
      handleError("please input productname", "Productname");
      error = true;
    }
    if (Categoryid.length == 0) {
      handleError("please input Category","Category");
      error = true;
    }
    // if (images.filename.length == 0) {
    //   handleError("please select Image", "image");
    //   error = true;
    // }
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
      var body = {Productid:productid,Categoryid: Categoryid, Brandsid:Brandsid,productid:productid};
      var responce = await postData("Products/edit_product_data", body);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Product",
          text: responce.message,
          toast: true,
        });
        featchAllProductdetails();
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
      // formData.append("image", image.Bytes);
      formData.append("image2",image2.filename);
      var responce = await postData("Products/edit_product_image", formData);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Product",
          text: responce.message,
          toast: true,
        });
        featchAllProductdetails();
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
          featchAllProductdetails();
          handleClose();
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: result.message,
            toast: true,
          });
        } else {
          featchAllProductdetails();
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
  const [productdetailslist, setpproductdetailslist] = useState([]);
  var featchAllProductdetails = async () => {
    var responce = await getData("Productdetails/Display_productdetails");
    setpproductdetailslist(responce.data);
  };
  useEffect(function () {
    featchAllProductdetails();
  }, []);
  function DisplayAllProducts() {
    return (
      <MaterialTable
        title="Productdetails's List"
        columns={[
          { title: "ID", field: "productdetailsid" },
          { title: "Product-Name", field: "productname" },
          { title: "BrandsName -ID", render:(rowData)=><div>{rowData.brandid}-{rowData.brandname}</div> },
          { title: "CategoryName -ID",render:(rowdata)=><div>{rowdata.categoryid}-{rowdata.categoryname}</div>},
          { title: "Model No./HNS Code",render:(rowData)=><div>{rowData.modelno} || {rowData.HSNcode}</div>},
          { title: "Color", field:"color"},
          { title: "Price/OfferPrice",render:(rowData)=><div>&#8377;<s>{rowData.price}</s>/&#8377;{rowData.offerprice}</div>},
          { title: "Sock-Status",render:(rowData)=><div>{rowData.stock}/{rowData.status}</div>},
        ]}
        data={productdetailslist}
        actions={[
          {icon: "photooutlined",
            tooltip: "Edit photo",
            onClick: (event, rowData) => handleOpen(rowData),
          },
          {icon: "edit",
            tooltip: "Edit Category",
            onClick: (event, rowData) => handleOpen(rowData),
          },
          {icon: "delete",
            tooltip: "delete Category",
            onClick: (event, rowData) => handleDelete(rowData),
          },
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) =>navigate('/Dashboard/Productdetails'),
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
