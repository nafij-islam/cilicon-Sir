import Star from "./Star";

const Product = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <div key={productInfo.id}>
      <div className="p-5 border border-gray_50 max-w-[245px] rounded">
        <div className="flex flex-col items-start justify-start gap-y-3">
          <span className="py-[5px] px-[10px] bg-danger_500">HOT</span>
          <img
            src={productInfo.thumbnail}
            alt=""
            className="w-[202px] h-[172px] object-cover"
          />

          <div className="flex items-center">
            <Star rating={productInfo.rating} />
            <span>({productInfo.reviews?.length})</span>
          </div>
          {/* text */}
          <h2 className="w-full truncate">{productInfo.title}</h2>
          <div className="flex items-center gap-x-2">
            <del>$1600</del>
            <h3> $ {productInfo.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product