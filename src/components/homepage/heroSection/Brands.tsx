import daraz from "../../../assets/homepage/daraz.png";
import alibaba from "../../../assets/homepage/alibaba.png";
import amazon from "../../../assets/homepage/amazon.png";
import paramount from "../../../assets/homepage/paramount.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import "./styles.css";

import { Navigation } from "swiper/modules";

const Brands = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        draggable
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img className="h-20 w-40 grayscale" src={daraz} alt="daraz" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-20 w-40 grayscale" src={alibaba} alt="alibaba" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-16 w-32 grayscale" src={amazon} alt="amazon" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-20 w-40 grayscale"
            src={paramount}
            alt="paramount"
          />
        </SwiperSlide>
      </Swiper>
    </>
    // <div className="grid grid-cols-4 justify-center gap-20 pl-10">
    //   <img className="h-20 w-40 grayscale" src={daraz} alt="daraz" />
    //   <img className="h-20 w-40 grayscale" src={alibaba} alt="alibaba" />
    //   <img className="h-16 w-32 grayscale" src={amazon} alt="amazon" />
    //   <img className="h-20 w-40 grayscale" src={paramount} alt="paramount" />
    // </div>
  );
};

export default Brands;
