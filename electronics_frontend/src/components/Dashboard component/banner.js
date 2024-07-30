// import uSeState
import { useState } from "react";
// image import
import categoryicon from "../../assets/add.png"
// sweetalert
import Swal from "sweetalert2";
// Import MUI Compponents
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Grid, Button, TextField, Avatar } from "@mui/material";
// impport styles components
import { makeStyles } from "@mui/styles";
// post data API CAll server
import { postData } from "../../services/FeatchNodeServices";
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
    height: "270px",
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

export default function Banner() {
  // constant of Data, category
  const [Bannername, setBannername] = useState("");
  const [files, setFiles] = useState({ Bytes: "", filename: "" });
  const [errors, seterrors] = useState({});
  // handleReset
  const handleReset = () => {
    setBannername("");
    setFiles({ Bytes: "", filename: "" });
  };
  // set errors message
  const handleError = (error, label) => {
    seterrors((prev) => ({ ...prev, [label]: error }));
  };
  // validation
  const validation = () => {
    var error = false;
    if (Bannername.length == 0) {
      handleError("please input Bannername", "CategoryName");
      error = true;
    }
    if (files.filename.length == 0) {
      handleError("please select Image", "image");
      error = true;
    }
    return error;
  };
  //image set function
  const handleimage = (event) => {
    setFiles({
      Bytes: event.target.files[0],
      filename: URL.createObjectURL(event.target.files[0]),
    });
  };

  // submiot button
  const handleSubmit = async () => {
    var error = validation();
    // console.log("errors check", errors);
    // console.log("error == true", error);
    // console.log("data of const",Bannername,Files);
    // console.log("fornData check See >>>",formData);
    if (error == false) {
      var formData = new FormData();
      formData.append("bannername", Bannername);
      formData.append("files",files.Bytes);
      var responce = await postData("banner/submit_banner",formData);
      if (responce.status) {
        Swal.fire({
          icon: "success",
          title: "Banner",
          text: responce.message,
          toast: true,
        });
        handleReset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Banner",
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
          <Grid item xs={12}>
       <Heading image={categoryicon} caption="New Banner" list="list"  link="/Display_all_Category" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={Bannername}
              onFocus={() => handleError("", "CategoryName")}
              error={errors.Bannername}
              helperText={errors.Bannername}
              label="Bannername"
              onChange={(event) => setBannername(event.target.value)}
              fullWidth
            />
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
              Banner Image
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
          <Grid item xs={6} className={useStyle.center}>
            <Avatar src={files.filename} alt="Category" variant="round" />
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
