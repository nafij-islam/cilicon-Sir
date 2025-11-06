import Container from "@/components/commonComponents/Container";
import Product from "@/components/commonComponents/Product";
import { imageProvider } from "@/helpers/imgProvider";
import {
  useCategory,
  usegetproductbycategory,
  useproduct,
} from "@/hooks/useCategory";
import { useState } from "react";

const ProductVariant = () => {
  const { data } = useCategory();
  const {
    isPending: isProductLoading,
    error: producterror,
    data: productData,
  } = useproduct();
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    isPending: isCategoryLoading,
    error: categoryerror,
    data: categoryData,
  } = usegetproductbycategory(selectedCategory);

  // handleCategoryMenu
  const handleCategoryMenu = (item) => {
    setSelectedCategory(item);
  };

  return (
    <div>
      <Container>
        <div className="grid grid-cols-[20%78%] justify-between">
          <div>
            <picture>
              <img
                src={imageProvider.produtVariantBanner}
                alt={imageProvider.produtVariantBanner}
              />
            </picture>
          </div>
          <div className="">
            {/* head */}
            <div className="flex justify-between items-center">
              <h2>Featured Products</h2>
              <div className="flex gap-x-4 items-center">
                <h2 className="cursor-pointer body_sm_600">All Product</h2>
                {data?.data?.slice(0, 8).map((item) => (
                  <h3
                    className="cursor-pointer body_sm_600"
                    onClick={() => handleCategoryMenu(item)}
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>
            {/* tails */}
            <div className="flex  flex-wrap justify-between gap-y-4 ">
              {selectedCategory ? (
                <Product
                  isloading={isCategoryLoading}
                  isError={categoryerror}
                  productInfo={categoryData}
                />
              ) : (
                <Product
                  isloading={isProductLoading}
                  isError={producterror}
                  productInfo={productData}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductVariant;
