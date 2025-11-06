import ProductSkeleton from "../Skeleton/ProductSkeleton";
import Container from "./Container";
import Star from "./Star";

const Product = ({ productInfo, isloading, isError }) => {
  if (isloading) {
    return (
      <Container>
        <div className="mt-10">
          <div className="flex items-center justify-between flex-wrap gap-y-4">
            {[...new Array(8)].map((_, index) => (
              <div key={index}>
                <ProductSkeleton />
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
  if (isError) {
    return <div>eroor here </div>;
  }

  return (
    <div className="flex justify-between items-center flex-wrap">
      {productInfo.data.products.slice(0, 8).map((product) => (
        <div key={product.id} className="mt-10">
          <div className="p-5 border border-gray_50 max-w-[245px] rounded">
            <div className="flex flex-col items-start justify-start gap-y-3">
              <span className="py-[5px] px-[10px] bg-danger_500">HOT</span>
              <img
                src={product.thumbnail}
                alt=""
                className="w-[202px] h-[172px] object-cover"
              />

              <div className="flex items-center">
                <Star rating={product.rating} />
                <span>({product.reviews?.length})</span>
              </div>
              {/* text */}
              <h2 className="w-full truncate">{product.title}</h2>
              <div className="flex items-center gap-x-2">
                <del>$1600</del>
                <h3> $ {product.price}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
