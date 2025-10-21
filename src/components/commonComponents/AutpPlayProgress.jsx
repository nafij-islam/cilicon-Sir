import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AutpPlayProgress = ({ image, progressStyle }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {[...new Array(6)].map((_, index) => (
          <SwiperSlide key={index} className="h-full">
            <picture>
              <img
                src={image}
                alt="Banner"
                className="w-full h-full object-cover"
              />
            </picture>
          </SwiperSlide>
        ))}

        {/* Progress Circle Overlay */}
        <div className="absolute bottom-4 right-4 z-50 flex items-center justify-center">
          <svg
            ref={progressCircle}
            className="w-12 h-12 rotate-[-90deg]"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke={progressStyle || "white"}
              strokeWidth="4"
              fill="none"
              strokeDasharray="125.6"
              strokeDashoffset="calc(125.6 * var(--progress, 1))"
              style={{ transition: "stroke-dashoffset 0.3s linear" }}
            />
          </svg>
          <span
            ref={progressContent}
            className={`absolute text-${progressStyle} text-sm font-bold`}
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default AutpPlayProgress;
