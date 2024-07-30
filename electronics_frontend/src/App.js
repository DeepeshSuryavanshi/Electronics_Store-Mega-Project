import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Dashbord from "./components/Dashbord";
import Home from "../src/components/UI Interface/Component/Screens/home";
import ProductPurchasescreen from "./components/UI Interface/Component/Screens/Productpurchasescreen";
import Cart from "./components/UI Interface/Component/Screens/Cart";
import Cartscreen from "./components/UI Interface/Component/Screens/Shopping";
import OtpComponent from "./components/UI Interface/Component/user/OtpComponent";
import MyAcocunt from "./components/UI Interface/Component/Screens/MyAccount";
import ProductFilterScreen from "./components/UI Interface/Component/Screens/ProductFilterScreen";
import LoginComponent from "./components/UI Interface/Component/user/logincomponent";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={<Adminlogin />}
            path="/Adminlogin"
            caption="Adminlogin"
          />
          <Route
            element={<Dashbord />}
            path="/Dashboard/*"
            caption="Dashbord"
          />
          <Route element={<Home />} path="/" caption="Home" />
          <Route
            element={<ProductPurchasescreen />}
            path="/purchase"
            caption="purchase"
          />
        <Route element={<ProductFilterScreen/>} path="/productfilterscreen" />
        <Route element={<OtpComponent/>}  path="/otp"/>
        <Route element={<Cart/>} path="/Cart" />
        <Route element={<Cartscreen/>} path="/useraccount" />
        <Route element={<MyAcocunt/>} path="/myaccount" />
        <Route element={<LoginComponent status={true} />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
