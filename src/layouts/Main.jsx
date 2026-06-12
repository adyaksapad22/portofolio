import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      <NavBar />
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Main;
