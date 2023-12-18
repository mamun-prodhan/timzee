import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar/MenuBar";

const Root = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <Outlet></Outlet>
      <h2>footer</h2>
    </div>
  );
};

export default Root;
