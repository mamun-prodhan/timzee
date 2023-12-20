import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Testimonials = () => {
  return (
    <div className="bg-[#000] pt-20">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-10 items-center px-10 md:px-5 py-10 md:py-20 max-w-[850px] mx-auto">
            <h2 className=" text-2xl md:text-4xl text-center font-semibold text-[#AAA5A5]">
              Leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet
              nibh
            </h2>
            <p className="text-white">Andrew Mark</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-10 items-center px-10 md:px-5 py-10 md:py-20 max-w-[850px] mx-auto">
            <h2 className="text-2xl md:text-4xl text-center font-semibold text-[#AAA5A5]">
              Leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet
              nibh
            </h2>
            <p className="text-white">Andrew Mark</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
