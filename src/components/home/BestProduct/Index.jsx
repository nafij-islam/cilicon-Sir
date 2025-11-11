import BestSelllingProductConent from "@/components/commonComponents/BestSelllingProductConent";
import Container from "@/components/commonComponents/Container";
import ErrorPage from "@/components/commonComponents/error";
import { useGetProductByLimit } from "@/hooks/useCategory";

const BestProducts = () => {
  const { isPending, error, data, refetch } = useGetProductByLimit();
  if (error) {
    return <ErrorPage error={error} onRefetch={refetch} />;
  }

  if (isPending) {
    return <h1>loading ...</h1>;
  }

  const bestProduct = [
    {
      id: 1,
      start: 0,
      end: 3,
      title: "FLASH SALE TODAY",
    },
    {
      id: 2,
      start: 3,
      end: 6,
      title: "BEST SELLERS",
    },
    {
      id: 3,
      start: 6,
      end: 9,
      title: "TOP RATED",
    },
    {
      id: 4,
      start: 9,
      end: 12,
      title: "NEW ARRIVAL",
    },
  ];
  return (
    <div className="py-40">
      <Container>
        <div className="grid grid-cols-4 items-center gap-x-4 justify-between ">
          {bestProduct?.map((item) => (
            <div key={item.id}>
              <BestSelllingProductConent
                productList={data.data.products.slice(item.start, item.end)}
                title={item.title || "FLASH SALE TODAY"}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestProducts;
