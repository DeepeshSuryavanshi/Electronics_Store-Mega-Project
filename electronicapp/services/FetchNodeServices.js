import axios from 'axios';
const serverURL = `http://192.168.31.168:5000`;

// PostData to Server
const PostData = async (url, body) => {
  try {
    // console.log("PostData",serverURL,url);
    var response = await axios.post(`${serverURL}/${url}`, body);
    var data = response.data;
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
// GetData from Server
const GetData = async url => {
  try {
    var response = await axios.get(`${serverURL}/${url}`);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export {serverURL, PostData, GetData};
