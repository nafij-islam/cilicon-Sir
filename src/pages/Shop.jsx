import { BreadCrumb } from "@/components/commonComponents/BreadCrumb";
import CategoryItem from "@/components/commonComponents/CategoryItem";
import Container from "@/components/commonComponents/Container";
import CategoryItemList from "@/components/Shop/Left/category/CategoryItem";
import CategoryList from "@/components/Shop/Left/category/CategoryList";
import PriceRange from "@/components/Shop/Left/PriceRange/PriceRange";
import { useCategory } from "@/hooks/useCategory";

const Shop = () => {
  const {
    isPending: categoryListPending,
    error: categoryListError,
    data: categoryListData,
  } = useCategory();
  if (categoryListPending) {
    return <h1>loding ...</h1>;
  }
  if (categoryListError) {
    return <h1>error </h1>;
  }

  const popularBrands = [
    { name: "Apple", checked: true },
    { name: "Microsoft", checked: true },
    { name: "Dell", checked: false },
    { name: "Symphony", checked: false },
    { name: "Sony", checked: false },
    { name: "LG", checked: true },
    { name: "One Plus", checked: false },
    { name: "Google", checked: true },
    { name: "Samsung", checked: false },
    { name: "HP", checked: true },
    { name: "Xiaomi", checked: false },
    { name: "Panasonic", checked: true },
    { name: "Intel", checked: false },
  ];

  const popularTags = [
    { name: "Game", selected: false },
    { name: "iPhone", selected: false },
    { name: "TV", selected: false },
    { name: "Asus Laptops", selected: false },
    { name: "Macbook", selected: false },
    { name: "SSD", selected: false },
    { name: "Graphics Card", selected: true },
    { name: "Power Bank", selected: false },
    { name: "Smart TV", selected: false },
    { name: "Speaker", selected: false },
    { name: "Tablet", selected: false },
    { name: "Microwave", selected: false },
    { name: "Samsung", selected: false },
  ];

  return (
    <div>
      <div>
        <BreadCrumb />
      </div>
      <Container>
        <div className="grid grid-cols-[30%70%] h-screen">
          <div className="h-full">
            <CategoryList>
              <CategoryItemList cItem={[...categoryListData.data]} />
            </CategoryList>
            {/* price Range */}
            <PriceRange />
          </div>
          <div className="right h-full bg-primary_100">2</div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
