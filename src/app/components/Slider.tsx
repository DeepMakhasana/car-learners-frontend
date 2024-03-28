"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../page.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "./Slide";

const slides = [
  {
    title: "Get 50% Off",
    subtitle: "45 Day course admission",
    note: "valid till 15-Apr",
    redirectURL: "/",
    image: "/illustrations/offer.svg",
  },
  {
    title: "Get 50% Off",
    subtitle: "45 Day course admission",
    note: "valid till 15-Apr",
    redirectURL: "/",
    image: "/illustrations/location.svg",
  },
];

function Slider() {
  return (
    <div className={styles.offerSlider}>
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
            <Slide
              title={slide.title}
              subtitle={slide.subtitle}
              note={slide.note}
              redirectURL={slide.redirectURL}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
