import Container from "@/components/commonComponents/Container";
import Product from "@/components/commonComponents/Product";
import { imageProvider } from "@/helpers/imgProvider";
import { useCategory, useproduct } from "@/hooks/useCategory";

const ProductVariant = () => {
const { isPending, error, data } = useCategory();
const productdata  = useproduct();

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
                {data?.data?.slice(0, 5).map((item) => (
                  <h3 className="cursor-pointer body_sm_600">{item}</h3>
                ))}
              </div>
            </div>
            {/* tails */}
            <div className="flex  flex-wrap justify-between gap-y-4 ">
              {productdata?.data?.data?.products.slice(0,8)?.map((item) => (
                <Product productInfo={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductVariant