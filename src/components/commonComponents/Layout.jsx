import { Outlet } from "react-router";
import BottomNav from "../home/BottomNav/Index";
import Header from "../home/Header/Index";
import MiddleNav from "../home/MiddleNav/Index";
import TopNav from "../home/TopNav/Index";
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
       <div>
        <footer className="h-[20vh] bg-black"></footer>
      </div>
    </div>
  );
};

export default Layout;
