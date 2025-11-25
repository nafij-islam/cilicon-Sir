import { BreadCrumb } from "@/components/commonComponents/BreadCrumb";
import Container from "@/components/commonComponents/Container";
import ErrorPage from "@/components/commonComponents/error";
import Product from "@/components/commonComponents/Product";
import CategoryItemList from "@/components/Shop/Left/category/CategoryItem";
import CategoryList from "@/components/Shop/Left/category/CategoryList";
import PriceRange from "@/components/Shop/Left/PriceRange/PriceRange";
import SearchTab from "@/components/Shop/Right/SearchTab";
import {
  useCategory,
  usegetproductbycategory,
  useproduct,
} from "@/hooks/useCategory";
import { useState } from "react";
import { FaCross } from "react-icons/fa";

const Shop = () => {
  const [searchitemCategory, setsearchitemCategory] = useState(null);
  const [priceFilterData, setpriceFilerData] = useState({});
  const {
    isPending: categoryListPending,
    error: categoryListError,
    data: categoryListData,
  } = useCategory();
  const {
    isPending: proudctPending,
    error: productError,
    data: productData,
  } = useproduct();
  const {
    isPending: filtePending,
    error: filterError,
    data: filtercdata,
    refetch,
  } = usegetproductbycategory(searchitemCategory);

  if (categoryListPending) {
    return <h1>loding ...</h1>;
  }
  if (categoryListError) {
    return <ErrorPage message={isError.message} onRefetch={refetch} />;
  }

  const popularBrands = [
    { name: "Apple", checked: true },
    { name: "Microsoft", checked: true },
    { name: "Dell", checked: false },
    { name: "Symphony", checked: false },
    { name: "Sony", checked: false },
    { name: "LG", checked: true },
    { name: "One Plus", checked: false },
    { name: "Google", checked: true },
    { name: "Samsung", checked: false },
    { name: "HP", checked: true },
    { name: "Xiaomi", checked: false },
    { name: "Panasonic", checked: true },
    { name: "Intel", checked: false },
  ];

  const popularTags = [
    { name: "Game", selected: false },
    { name: "iPhone", selected: false },
    { name: "TV", selected: false },
    { name: "Asus Laptops", selected: false },
    { name: "Macbook", selected: false },
    { name: "SSD", selected: false },
    { name: "Graphics Card", selected: true },
    { name: "Power Bank", selected: false },
    { name: "Smart TV", selected: false },
    { name: "Speaker", selected: false },
    { name: "Tablet", selected: false },
    { name: "Microwave", selected: false },
    { name: "Samsung", selected: false },
  ];
  const handleCategory = (item) => {
    setsearchitemCategory(item);
  };

  // price range filte
  const PriceRangeFn = (prange) => {
    const [minValue, maxValue] = prange;
    const filterValue = productData.data.products.filter(
      (p) => p.price >= minValue && p.price <= maxValue
    );
    setpriceFilerData({ ...productData, data: { products: filterValue } });
  };

  // calculate min and max value
  const sortedArray = productData.data.products.sort((a , b)=>a.price -b.price )
  const minValue = sortedArray[0]
  const maxValue = sortedArray[sortedArray.length -1]

  // price fileter 
  const getPriceRange = (range)=> {
    const [min, max] =range
    const minValue = min == 'under' ? Number(0) : Number(min) ;
    const maxValue = Number(max)
    const filterValue = productData.data.products.filter(
      (p) => p.price >= minValue && p.price <= maxValue
    );
    setpriceFilerData({ ...productData, data: { products: filterValue } });

  }
  

  return (
    <div>
      <div>
        <BreadCrumb />
      </div>
      <Container>
        <div className={`grid grid-cols-[20%80%] gap-x-5`}>
          <div className="h-full py-10">
            <CategoryList>
              <CategoryItemList
                cItem={[...categoryListData.data]}
                Categoryfn={handleCategory}
              />
            </CategoryList>
            {/* price Range */}
            <PriceRange PriceRangeFn={PriceRangeFn} getPriceRange = {getPriceRange} />
          </div>
          {/* right side  */}
          <div className="py-10 h-full">
            <SearchTab />
            <div className="bg-gray_50 py-4 my-4 flex justify-between px-4 items-center">
              <div className="flex items-center gap-x-4">
                <span>Active Filters:</span>
                <div className="flex items-center gap-x-3">
                  {["asd", "slkf"].map((item) => (
                    <div className="flex items-center gap-x-2">
                      <span>Electronics Devices </span>
                      <span>
                        {" "}
                        <FaCross />{" "}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* total item */}
              <span>65,867 Results found.</span>
            </div>

            {/* product side */}
            <Product
              productInfo={
                filtercdata
                  ? filtercdata
                  : priceFilterData?.data?.products?.length > 1
                  ? priceFilterData
                  : productData
              }
              isloading={proudctPending }
              isError={productError}
              productWidth={"255"}
              paritalItemLoad={30}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
