"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../school.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
// import Slide from "./Slide";

const slides = ["/illustrations/offer.svg", "/illustrations/offer.svg", "/illustrations/offer.svg"];

function SchoolImageSlider() {
  return (
    <div className={styles.schoolImageSlider}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        // modules={[Autoplay, Pagination, Navigation]}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide} alt="test" width={200} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SchoolImageSlider;
