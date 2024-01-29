import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import client1 from "./assets/clients/bioexplora.jpg";
import client2 from "./assets/clients/gtcingenieria.png";
import client3 from "./assets/clients/ingeocc.png";
import client4 from "./assets/clients/montinpetrol.jpg";
import client5 from "./assets/clients/pacolombia.png";
import client6 from "./assets/clients/pei.png";

function ClientsCarousel() {
  return (
    <div className=" m-0 pt-0 pb-10 px-36">
      <div className="p-10 bg-white">
        <Swiper
          slidesPerView={2}
          spaceBetween={120}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-72"
        >
          <SwiperSlide className="flex justify-center items-center text-center">
            <img src={client1} alt={client1} className=" items-center" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <img src={client2} className="" alt={client2} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <img src={client3} alt={client3} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <div>
              <img src={client4} alt={client4} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <div>
              <img src={client5} alt={client5} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center text-center">
            <div>
              <img src={client6} alt={client6} className="object-fill" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ClientsCarousel;
