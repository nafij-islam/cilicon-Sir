import { getAllProduct, getCategory, getProductbyCategory, getProductbyLimit, SingleProduct } from "@/api/Category";
import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  })

  return { isPending, error, data }
}

const useproduct = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
  });

  return { isPending, error, data }
}

const usegetproductbycategory = (categoryName) => {
  const { isPending, error, data ,refetch } = useQuery({
    queryKey: ["categoryproduct", categoryName],
    queryFn: () => getProductbyCategory(categoryName),
    enabled: !!categoryName, // only fetch if categoryName is truthy
  });


  return { isPending, error, data ,refetch };
};
const useGetProductByLimit = () => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["productskipLimit"],
    queryFn:  getProductbyLimit,
  });

  return { isPending, error, data, refetch };
};

const useGetSingleProduct = (id=1) => {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["productskipLimit"],
    queryFn:  ()=>SingleProduct(id),
  });

  return { isPending, error, data, refetch };
};


export { useCategory, usegetproductbycategory, useGetProductByLimit, useGetSingleProduct, useproduct };

