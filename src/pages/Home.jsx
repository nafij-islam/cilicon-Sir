
import Banner from "@/components/home/Banner/Index";
import BottomNav from "@/components/home/BottomNav/Index";
import MiddleNav from "@/components/home/MiddleNav/Index";
import TopNav from "@/components/home/TopNav/Index";
import Header from "@components/home/Header/Index";
const Home = () => {
  return (
    <div>
      <Header />
      <TopNav/>
      <MiddleNav/>
      <BottomNav/>
      <Banner/>
    </div>
  );
}
export default Home