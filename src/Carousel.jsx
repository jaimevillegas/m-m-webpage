import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import carousel1 from "./assets/carousel/carousel1.jpeg";
import carousel2 from "./assets/carousel/carousel2.jpeg";
import carousel3 from "./assets/carousel/carousel3.jpeg";
import carousel4 from "./assets/carousel/carousel4.jpeg";
import carousel5 from "./assets/carousel/carousel5.jpeg";
import carousel6 from "./assets/carousel/carousel6.jpeg";

function Carousel() {
  return (
    <div className=" m-0 pb-10 lg:px-36">
      <div className="p-10 bg-white">
        <Swiper
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-96"
        >
          <SwiperSlide className="flex justify-center items-center text-center">
            <img src={carousel1} alt={carousel1} className=" items-center" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <img src={carousel2} className="" alt={carousel2} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <img src={carousel3} alt={carousel3} />
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
          <SwiperSlide className="flex justify-center items-center text-center">
            <div>
              <img src={carousel6} alt={carousel6} className="object-fill" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
