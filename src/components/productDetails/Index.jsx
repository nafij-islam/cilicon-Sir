import { addToCart } from "@/features/addtocart";
import { sucessToast } from "@/helpers/Toast";
import { useGetSingleProduct } from "@/hooks/useCategory";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { BreadCrumb } from "../commonComponents/BreadCrumb";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isPending, error, data } = useGetSingleProduct(id);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    if (data?.data) {
      setProduct(data.data);
      setMainImage(data.data.images?.[0]);
    }
  }, [data]);

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading product</h1>;

  const handleAddtoCart = (pr) => {
    dispatch(addToCart(pr));
    sucessToast("add to cart sucessfully" +pr.title)
  };

  return (
    <div>
      <BreadCrumb />

      <div className="bg-gray_50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* LEFT: IMAGES */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={data?.thumbnail}
                alt={product.title}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />

              <div className="flex gap-4 py-4 justify-center overflow-x-auto customscrollbar">
                {product?.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setMainImage(img)}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                ))}
              </div>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="w-full md:w-1/2 px-4">
              {/* Title */}
              <h2 className="heading2 mb-2">{product.title}</h2>
              <p className="body_md_400 text-gray_600 mb-1">
                SKU: {product.sku}
              </p>
              <p className="text-sm text-gray-500 mb-4 capitalize">
                Category: {product.category}
              </p>

              {/* Price + Discount */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-semibold text-primary">
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="px-3 py-1 rounded bg-red-100 text-red-600 text-sm">
                    -{product.discountPercentage}%
                  </span>
                )}
              </div>

              {/* Stock + Availability */}
              <p className="text-lg mb-2">
                <span className="font-semibold">Availability:</span>{" "}
                {product.availabilityStatus}
              </p>
              <p
                className={`mb-4 text-sm ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                Stock: {product.stock}
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Add to Cart Button */}
              <button
                className="bg-black text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-primary/80 transition mb-6 cursor-pointer"
                onClick={() => handleAddtoCart(product)}
              >
                Add to Cart
              </button>

              {/* Other Info */}
              <div className="space-y-4">
                <p>
                  <strong>Shipping:</strong> {product.shippingInformation}
                </p>
                <p>
                  <strong>Warranty:</strong> {product.warrantyInformation}
                </p>
                <p>
                  <strong>Return Policy:</strong> {product.returnPolicy}
                </p>

                <div>
                  <strong>Dimensions:</strong>
                  <p className="text-sm text-gray-600">
                    {product.dimensions?.width}W × {product.dimensions?.height}H
                    × {product.dimensions?.depth}D
                  </p>
                </div>

                <p>
                  <strong>Weight:</strong> {product.weight} g
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded bg-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Reviews ({product.reviews?.length})
                </h3>
                <div className="space-y-4">
                  {product.reviews?.map((review, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 bg-white shadow-sm"
                    >
                      <p className="font-semibold">{review.reviewerName}</p>
                      <p className="text-yellow-500 text-sm">
                        ⭐ {review.rating}
                      </p>
                      <p className="text-gray-700 mt-1">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
