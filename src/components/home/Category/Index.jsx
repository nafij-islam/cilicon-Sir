import CategoryItem from "@/components/commonComponents/CategoryItem";
import Container from "@/components/commonComponents/Container";
import { useCategory } from "@/hooks/useCategory";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Category = () => {
  const { isPending, error, data } = useCategory();
  if (isPending) {
    return (
      <div>
        <Container>
          <div>hfsd</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <Container>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          autoplay={true}
          slidesPerView={6}
          centeredSlides={false}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
        >
          {data?.data?.map((item, index) => (
            <div key={index}>
              <SwiperSlide>
                <CategoryItem item={item} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Category;
