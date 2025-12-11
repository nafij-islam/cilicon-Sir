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
import { getAllPriceRange, getAllTagList, gotMinimumMax, sortProduct } from "@/lib/lib";
import { useEffect, useState } from "react";
import { FaCross } from "react-icons/fa";


const Shop = () => {
  const [searchitemCategory, setsearchitemCategory] = useState(null);
  const [priceFilterData, setpriceFilerData] = useState({});
  const [fileteralldata, setfileteralldata] = useState([]);
  const [Tags, setTags] = useState([]);
  // const [] =
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

  // category wise search api
  const {
    isPending: filtePending,
    error: filterError,
    data: filtercdata,
    refetch,
  } = usegetproductbycategory(searchitemCategory);

  // useEffect for handleing all api side effect
  useEffect(() => {
    if (filtercdata) {
      setfileteralldata(filtercdata);
    } else if (productData) {
      setfileteralldata(productData);
      const tagList =  getAllTagList(productData);
      setTags(tagList)
    }
  }, [productData, filtercdata]);

  if (categoryListPending || proudctPending) {
    return <h1>loding ...</h1>;
  }
  if (categoryListError) {
    return <ErrorPage message={isError.message} onRefetch={refetch} />;
  }


  const handleCategory = (item) => {
    setsearchitemCategory(item);
  };

  // price range filte
  const PriceRangeFn = (prange) => {
    const filterValue = productData.data.products.filter(
      (p) => p.price >= 1 && p.price <= Number(prange)
    );

    setfileteralldata({
      ...productData,
      data: { products: sortProduct(filterValue) },
    });
  };

  // price fileter
  const getPriceRange = (range) => {
    if (range.includes("all")) {
      // calculate min and max value
      const filterValue = getAllPriceRange(productData);
      setfileteralldata({ ...productData, data: { products: filterValue } });
    } else {
      const [min, max] = range;
      const minValue = min == "under" ? Number(0) : Number(min);
      const maxValue = Number(max);
      const filterValue = productData.data.products.filter(
        (p) => p.price >= minValue && p.price <= maxValue
      );
      setfileteralldata({ ...productData, data: { products: filterValue } });
    }
  };

  const toggleBrand = (index) => {
    const updated = [...brands];
    updated[index].checked = !updated[index].checked;
    setBrands(updated);
    getAllTagList(productData)
  };

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
            {productData && (
              <PriceRange
                rangeValue={gotMinimumMax(productData)}
                PriceRangeFn={PriceRangeFn}
                getPriceRange={getPriceRange}
              />
            )}

            {/* search bry popularBrands */}
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold mb-3">Popular Brands</h3>

              <div className="flex flex-col gap-2">
                {Tags.map((tag) => (
                  <label
                    key={tag.name}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={tag.checked}
                      onChange={() => toggleTag(tag.id)}
                    />
                    <span>{tag.name}</span>
                  </label>
                ))}
              </div>
            </div>
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
              productInfo={fileteralldata}
              isloading={proudctPending}
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
