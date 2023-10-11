import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import NavSecond from "./SecondNav";

export default function Layout() {
  return (
    <>
    
      <Outlet />
    
    </>
  );
}