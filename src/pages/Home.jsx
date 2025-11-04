
import Banner from "@/components/home/Banner/Index";
import BottomNav from "@/components/home/BottomNav/Index";
import Category from "@/components/home/Category/Index";
import Features from "@/components/home/Features/Index";
import MiddleNav from "@/components/home/MiddleNav/Index";
import ProductVariant from "@/components/home/ProductVariant/Index";
import TopNav from "@/components/home/TopNav/Index";
import Header from "@components/home/Header/Index";
const Home = () => {
  return (
    <div>
      <Header />
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <Banner />
      <Features />
      <Category />
      <ProductVariant />
    </div>
  );
};
export default Home