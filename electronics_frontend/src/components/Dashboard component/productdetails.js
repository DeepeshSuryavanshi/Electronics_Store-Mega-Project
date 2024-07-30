// import uSeState
import { useEffect, useState } from "react";
// image import
import categoryicon from "../../assets/add.png";
// sweetalert
import Swal from "sweetalert2";
// import quill
import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
// Import MUI Compponents
import { DropzoneArea } from "material-ui-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import {
  FormControl,
  InputLabel,
  select,
  MenuItem,
  Select,
  Grid,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
// impport styles components
import { makeStyles } from "@mui/styles";
// post data API CAll server
import { postData, getData } from "../../services/FeatchNodeServices";
import Heading from "./Heading";
var useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "auto",
    backgroundColor: "",
  },
  box: {
    width: "50%",
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
});

export default function Productdetails() {
  // constant of Data, Brand
  const [Categoryid, SetCategoryid] = useState("");
  const [Brandid, SetBrandid] = useState("");
  const [Productid, setProductid] = useState("");
  const [modelno, setmodelno] = useState("");
  const [color, setcolor] = useState("");
  const [price, setprice] = useState("");
  const [offerprice, setofferprice] = useState("");
  const [rating,setrating] = useState("");
  const [HSNcode, setHSNcode] = useState("");
  const [stock, setstocks] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");
  //const [Image, setImage] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  // memo for quill
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
  // List item data variable
  const [Brandlist, setBrandlist] = useState([]);
  const [Cateegorylist, setCategorylist] = useState([]);
  const [productlist, setproductlist] = useState([]);
  // Dropzone constant
  const [files, setfiles] = useState([]);
  // Categoryfill
  const featchAllCateegory = async () => {
    var result = await getData("Category/Dispaly_all_category");
    setCategorylist(result.data);
  };
  // Brands fill
  const featchallBrands = async (cid) => {
    console.log("body for brand select", cid);
    var result = await postData("Brand/Select_Brands", { Categoryid: cid });
    setBrandlist(result.data);
  };
  // product fill
  const featchallproduct = async (brandid) => {
    console.log("featch all product call");
    var result = await postData("Products/featch_product_for_detail", {
      Brandid: brandid,
      categoryid: Categoryid,
    });
    setproductlist(result.data);
  };
  //
  function setbrand(event) {
    SetBrandid(event.target.value);
    featchallproduct(event.target.value);
  }
  useEffect(function () {
    featchAllCateegory();
  }, []);
  // filol Category
  const fillallCategory = () => {
    return Cateegorylist.map((item) => {
      return <MenuItem value={item.Categoryid}>{item.Categoryname}</MenuItem>;
    });
  };
  // fill Brands
  const fillallBrands = () => {
    return Brandlist.map((item) => {
      return <MenuItem value={item.brandsid}>{item.brandname}</MenuItem>;
    });
  };
  // fill product
  const fillallproduct = () => {
    return productlist.map((item) => {
      return <MenuItem value={item.productid}>{item.productname}</MenuItem>;
    });
  };
  // Categoryidset  featch Brands
  function handlechange(event) {
    SetCategoryid(event.target.value);
    featchallBrands(event.target.value);
  }
  // handleReset
  const handleReset = () => {
    // list contain variable
    setBrandlist([]);
    setproductlist([]);
    // data varible
    SetCategoryid("");
    SetBrandid("");
    setProductid("");
    setmodelno("");
    setdescription("");
    setcolor("");
    setprice("");
    setofferprice("");
    setrating("");
    setHSNcode("");
    setstocks("");
    setstatus("");
    setfiles([])
    //setImage([]);
  };
  // set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (Categoryid.length === 0) {
      handleError("Please Select Category", "Category");
      error = true;
    }
    if (Brandid.length === 0) {
      handleError("Please Select Brand", "Brand");
      error = true;
    }
    if (Productid.length === 0) {
      handleError("please input Product", "product");
      error = true;
    }
    if (modelno.length === 0) {
      handleError("Please Enter Model no.", "modelno");
      error = true;
    }
    if (color.length === 0) {
      handleError("Please Enter Color.", "color");
      error = true;
    }
    if (HSNcode.length === 0) {
      handleError("Please Enter HSN Code.", "HSNcode");
      error = true;
    }
    if (price.length === 0) {
      handleError("Please Enter Price.", "price");
      error = true;
    }
    if (offerprice.length === 0) {
      handleError("Please Enter OfferPrice.", "offerprice");
      error = true;
    }
    if (rating.length === 0) {
      handleError("Please Enter Rating.", "rating");
      error = true;
    }
    if (stock.length === 0) {
      handleError("Please Enter Stock.", "stock");
      error = true;
    }
    if (status.length === 0) {
      handleError("Please Enter Status", "status");
      error = true;
    }
    if (description.length === 0) {
      handleError("Please Enter Description.", "description");
      error = true;
    }
    if (files.length === 0) {
      handleError("please select Image", "files");
      error = true;
    }
    return error;
  };
  //image set function
  // const handleimage = (event) => {
  //   // setImage({
  //   //   Bytes: event.target.files[0],
  //   //   filename: URL.createObjectURL(event.target.files[0]),
  //   // });

  // };

  // submiot button
  const handleSubmit = async () => {
    // alert("Submit fire XXXXXX");
    var error = validation();
    console.log("errors check", errors);
    console.log("error == true >>no ", error);
    if (error == false) {
      var formData = new FormData();
      formData.append("categoryid", Categoryid);
      formData.append("brandid", Brandid);
      formData.append("productid", Productid);
      formData.append("modelno", modelno);
      formData.append("color", color);
      formData.append("HSNcode", HSNcode);
      formData.append("price", price);
      formData.append("offerprice", offerprice);
      formData.append("rating",rating);
      formData.append("stock", stock);
      formData.append("status", status);
      formData.append("description", description);
      files.map((file, index) => {
        formData.append('image' + index, file);
      });
      console.log(formData);
      var responce = await postData("productdetails/submit_productdetails", formData)
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Productdetails",
          text: responce.message,
          toast: true,
        });
        handleReset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Productdetails",
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
            <Heading
              image={categoryicon}
              caption="Product-Details"
              list="list"
              link={"/Display_all_Productdetails"}
            />
          </Grid>
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
                value={Brandid}
                label="Brand"
                onChange={setbrand}
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
                value={Productid}
                label="Product"
                onChange={(event) => {
                  setProductid(event.target.value);
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

          <Grid item xs={4}>
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
          <Grid item xs={4}>
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
              value={rating}
              onFocus={() => handleError("", "rating")}
              error={errors.rating}
              helperText={errors.rating}
              label="rating"
              onChange={(event) => setrating(event.target.value)}
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
          <Grid item xs={12} className={useStyle.center}>
            <DropzoneArea
              acceptedFiles={["image/*"]}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) => setfiles(files)}
              // onClick={(files) => setImage(files)}
              filesLimit={7}
            />
          </Grid>
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
