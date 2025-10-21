import AutpPlayProgress from "@/components/commonComponents/AutpPlayProgress";
import Container from "@/components/commonComponents/Container";
import { imageProvider } from "@/helpers/imgProvider";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div className="h-[400px] py-8 mb-20">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full gap-x-5">
          {/* Left Side Swiper */}
          <div className="w-[70%] h-full">
            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, EffectCards, Autoplay]}
              effect={"cards"}
              grabCursor={true}
              className="h-full"
            >
              {[...new Array(6)].map((_, index) => (
                <SwiperSlide key={index} className="h-full">
                  <picture>
                    <img
                      src={imageProvider.bannerOne}
                      alt="Banner"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side Progress Boxes */}
          <div className="w-[30%] h-full flex flex-col">
            <div className="flex-1">
              <AutpPlayProgress
                image={imageProvider.bannertwo}
                progressStyle="white"
              />
            </div>
            <div className="flex-1">
              <AutpPlayProgress
                progressStyle="black"
                image={imageProvider.bannerthree}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
