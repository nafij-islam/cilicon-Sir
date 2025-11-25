import { useGetSingleProduct } from "@/hooks/useCategory";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BreadCrumb } from "../commonComponents/BreadCrumb";

const ProductDetailsPage = () => {
    const [product, setproduct] = useState("");
    const [mainImage, setMainImage] = useState("");
    const { id } = useParams();

    // Fetch single product
    const { isPending, error, data } = useGetSingleProduct(id);

    useEffect(() => {
        if (data?.data) {
            setproduct(data.data);
            setMainImage(data.data.images[0]);
        }
    }, [data]);

    if (isPending) return <h1>Loading...</h1>;
    if (error) return <h1>Error loading product</h1>;

    return (
        <div>
            <BreadCrumb />

            <div className="bg-gray_50 py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        {/* ✔ LEFT: IMAGES */}
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <img
                                src={mainImage || data?.data?.images[0]}
                                alt="Product"
                                className="w-full h-auto rounded-lg shadow-md mb-4"
                            />

                            <div className="flex gap-4 py-4 justify-center overflow-x-auto customscrollbar">
                                {data?.data?.images?.map((img, index) => (
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

                        {/* ✔ RIGHT: DETAILS */}
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="heading2 mb-2">{product.name || "Product"}</h2>
                            <p className="body_md_400 text-gray_600 mb-4">SKU: {product.sku}</p>
                            {/* ...existing code... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;