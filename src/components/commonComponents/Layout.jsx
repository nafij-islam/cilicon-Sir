import { Outlet } from "react-router";
import BottomNav from "../home/BottomNav/Index";
import Header from "../home/Header/Index";
import MiddleNav from "../home/MiddleNav/Index";
import TopNav from "../home/TopNav/Index";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
        {/* to menu */}
      <div>
        <Header />
        <TopNav />
        <MiddleNav />
        <BottomNav />
      </div>
      {/* outlet info */}
      <Outlet/>
      {/* footer */}
       <Footer/>
    </div>
  );
};

export default Layout;
