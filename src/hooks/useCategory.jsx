import { getAllProduct, getCategory, getProductbyCategory } from "@/api/Category";
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
  const { isPending, error, data } = useQuery({
    queryKey: ["categoryproduct", categoryName],
    queryFn: () => getProductbyCategory(categoryName),
    enabled: !!categoryName, // only fetch if categoryName is truthy
  });


  return { isPending, error, data };
};

export { useCategory, useproduct, usegetproductbycategory };

