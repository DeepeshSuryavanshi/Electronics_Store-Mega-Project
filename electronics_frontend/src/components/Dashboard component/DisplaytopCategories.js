// useNavigate 
import { useNavigate } from "react-router-dom";
// post data API CAll server
import { postData } from "../../services/FeatchNodeServices";
// sweetalert
import Swal from "sweetalert2";
// icon
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Grid, TextField, Avatar, unstable_ClassNameGenerator } from "@mui/material";
//table material
import MaterialTable from "@material-table/core";
// getdata import
import { getData, serverURL } from "../../services/FeatchNodeServices";
// useState
import { useState, useEffect } from "react";
// make CSS Style
import { makeStyles } from "@mui/styles";
// Dilog materials
import {
  Button,
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

export default function DisplayAlltopCategory() {
  var navigate=useNavigate()
  // // constant of Data, category
  const [CategoryName, setCategoryName] = useState("");
  const [Image, setImage] = useState({ Bytes: "", filename: "" });
  const [Image2, setImage2] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  const [Categoryid, setCategoryid] = useState("");
  const [temPicture, setTemPictFure] = useState("");
  // Display Statu of edit display icon
  const [statusCamera, setstatusCamera] = useState(false);
  const [statusBtn, setstatusBtn] = useState(false);
  const [open,setOpen] = useState(false);
  //edit upDate category  data form rowData
  const handleOpen = (rowData) => {
    setCategoryid(rowData.Categoryid);
    setCategoryName(rowData.Categoryname);
    setImage({ filename: `${serverURL}/images/${rowData.image}`, bytes: "" });
    setImage2({ filename:rowData.image, bytes: "" });
    setTemPictFure(`${serverURL}/images/${rowData.image}`);
    setOpen(true);
  };
  // Category form of pop up /////////////////////////////////
  const CategoryForm = () => {
    //image set function
    const handleimage = (event) => {
      setImage({
        Bytes: event.target.files[0],
        filename: URL.createObjectURL(event.target.files[0]),
      });
      setstatusBtn(true);
    };
    //cancle button
    const hancleCancle = () => {
      setstatusBtn(false);
      setImage({ filename: temPicture, Bytes: "" });
    };
    //save button
    const handleSave = () => {
      handleEidtpicture();
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
                src={Image.filename}
                sx={{ width: 100, height: 100, borderRadius: 1 }}
                alt="Category"
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
              value={CategoryName}
              onFocus={() => handleError("", "CategoryName")}
              error={errors.CategoryName}
              helperText={errors.CategoryName}
              label="Category"
              onChange={(event) => setCategoryName(event.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    );
  };
  ////////////////////////////////CategoryFormEnd\\\\\\\\\\\\\\\\\\\\\\\\\\
  // set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (CategoryName.length == 0) {
      handleError("please input Category", "CategoryName");
      error = true;
    }
    if (Image.filename.length == 0) {
      handleError("please select Image", "image");
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
      var body = { Categoryname: CategoryName, Categoryid: Categoryid };
      var responce = await postData("Category/edit_category_data", body);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Category",
          text: responce.message,
          toast: true,
        });
        featchAllCateegory();
        handleClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Category",
          text: responce.message,
          toast: true,
        });
      }
    }
  };
  // picture update function
  const handleEidtpicture = async () => {
    setstatusBtn(false);
    var error = validation();
    console.log("errors check", errors);
    console.log("error == true", error);
    if (error == false) {
      var formData = new FormData();
      formData.append("Categoryid", Categoryid);
      formData.append("image", Image.Bytes);
      formData.append("image2", Image2.filename);
      var responce = await postData("Category/edit_category_picture", formData);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Category",
          text: responce.message,
          toast: true,
        });
        featchAllCateegory();
        handleClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Category",
          text: responce.message,
          toast: true,
        });
      }
    }
  };

  // Category edit Function dilog
  const showCategoryDialog = () => {
    return (
      <Dialog open={open}>
        <DialogTitle>UpDate Category</DialogTitle>
        <DialogContent>{CategoryForm()}</DialogContent>
        <DialogActions>
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
  const [Category, setCategory] = useState([]);
  var featchAllCateegory = async () => {
    var responce = await getData("topcategories/Dispaly_all_category");
    setCategory(responce.data);
  };
  useEffect(function () {
    featchAllCateegory();
  }, []);
  function DisplayAllCategory() {
    return (
      <MaterialTable
        title="Top Categories List"
        columns={[
          { title: "ID", field: "topcategoriesid" },
          { title: "CategoryName", field: "topcategoriesname" },
          {
            title: "image",
            render: (rowData) => (
              <img
                src={`${serverURL}/images/TopCategories/${rowData.topcategoriesimage}`}
                width={60}
              ></img>
            ),
          },
        ]}
        data={Category}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Category",
            onClick: (event, rowData) => handleOpen(rowData),
          },
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: (event) =>navigate('/Dashboard/topCategories'),
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
