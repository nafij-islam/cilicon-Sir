import { Link } from "react-router";
import { VirtuosoGrid } from "react-virtuoso";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import Container from "./Container";
import Star from "./Star";

const Product = ({ productInfo, isloading, isError, productWidth = "245" }) => {
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

  if (isError) return <div>Error here</div>;

  return (
    <div className="w-full">
      <VirtuosoGrid
        style={{ height: "1000px" }}
        data={productInfo.data.products}
        listClassName="grid grid-cols-4 gap-4 overflow-x-hidden"
        itemClassName="w-full"
        itemContent={(index, product) => (
          <div className="p-5 border border-gray_50 rounded" key={product.id}>
            <div className="flex flex-col items-start gap-y-3">
              <span className="py-[5px] px-[10px] bg-danger_500">HOT</span>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.thumbnail}
                  className="w-[202px] h-[172px] object-cover cursor-pointer"
                />
              </Link>
              <div className="flex items-center">
                <Star rating={product.rating} />
                <span>({product.reviews?.length})</span>
              </div>

              <h2 className="truncate">{product.title}</h2>

              <div className="flex items-center gap-x-2">
                <del>$1600</del>
                <h3>$ {product.price}</h3>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Product;
