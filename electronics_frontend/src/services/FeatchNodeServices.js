// axios for server connection node backend
import axios from "axios";
// server URL of node backend
const serverURL = "http://192.168.31.168:5000";
const postData = async (url, body) => {
  try {
    // console.log("call backend server data=>", "URL", url, "Body", body);
    var responce = await axios.post(`${serverURL}/${url}`,body);
    var data = responce.data;
    // console.log("responce from server :", data);
    return data;
  } catch (e) {
    // console.log("server call problem error.return >>> ", e);
    return null;
  }
};
//getdata
const getData = async (url) => {
  try {
    // console.log("call backend server data=>", "URL", url);
    var responce = await axios.get(`${serverURL}/${url}`);
    var data = responce.data;
    // console.log("responce from server:", responce);
    return data;
  } catch (e) {
    // console.log("server call problem error.return >>> ", e);
    return null;
  }
};
export { serverURL, postData, getData };
