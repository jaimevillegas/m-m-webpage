import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import carousel1 from "./assets/carousel/carousel1.jpeg";
import carousel2 from "./assets/carousel/carousel2.jpeg";
import carousel3 from "./assets/carousel/carousel3.jpeg";
import carousel4 from "./assets/carousel/carousel4.jpeg";
import carousel5 from "./assets/carousel/carousel5.jpeg";

function Carousel() {
  return (
    <div className="h-full">
      <Swiper navigation={true} modules={[Navigation]} className="h-1/2">
        <SwiperSlide className="flex justify-center items-center text-center">
          <div className="flex justify-center items-center">
            <img
              src={carousel1}
              alt={carousel1}
              className="w-1/2 items-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <div>
            <img src={carousel2} alt={carousel2} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <div>
            <img src={carousel3} alt={carousel3} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <div>
            <img src={carousel4} alt={carousel4} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <div>
            <img src={carousel5} alt={carousel5} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
