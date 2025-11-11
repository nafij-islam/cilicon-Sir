import Banner from "@/components/home/Banner/Index";
import BestProducts from "@/components/home/BestProduct/Index";
import Category from "@/components/home/Category/Index";
import Features from "@/components/home/Features/Index";
import ProductVariant from "@/components/home/ProductVariant/Index";

const Home = () => {
  return (
    <div>
   
      <Banner />
      <Features />
      <Category />
      <ProductVariant />
      <BestProducts />
     
    </div>
  );
};
export default Home;
