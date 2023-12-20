import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar/MenuBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
