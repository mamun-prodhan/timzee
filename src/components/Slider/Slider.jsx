import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from "../../assets/slider__1.webp";
import slider2 from "../../assets/slider__2.webp";
import slider3 from "../../assets/slider__3_2000x_1.webp";

const Slider = () => {
  return (
    <div>
      <Swiper spaceBetween={0} slidesPerView={1}>
        <SwiperSlide className="relative">
          <img
            className=" top-0 left-0 w-full h-[600px] md:h-[600px] lg:h-full object-cover"
            src={slider1}
            alt=""
          />
          <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2  text-white max-w-[600px]">
            <h2 className="text-[40px] md:text-[45px] lg:text-[70px]">
              Alertzy
            </h2>
            <p className="text-[20px] text-[#CCA471]">
              Exclusive Offer-20% Off This Week
            </p>
            <p className="max-w-[553px] text-[16px] md:text-[18px] my-[18px] md:my-[30px]">
              Expanding the offering is the choice between a leather strap or a
              metal bracelet, bringing the total new look. Black-tone stainless
              steel case with a black rubber strap. Scratch free sapphire
              crystal.
            </p>
            <div className="flex items-center gap-[8px] md:gap-[20px] mb-[18px] md:mb-[30px]">
              <p className="text-[20px]">Starting @</p>
              <p className="md:text-[45px] text-[25px]">$250.00</p>
            </div>
            <button className="px-5 md:px-10 py-2 md:py-4 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
              Explore Services
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className=" top-0 left-0 w-full h-[600px] md:h-[600px] lg:h-full object-cover"
            src={slider3}
            alt=""
          />
          <div className="absolute top-1/2 right-[30%] transform translate-x-1/2 -translate-y-1/2  text-white max-w-[600px]">
            <h2 className="text-[40px] md:text-[45px] lg:text-[70px]">
              Gertious
            </h2>
            <p className="text-[20px] text-[#CCA471]">Exclusive of Sales Tax</p>
            <p className="max-w-[553px] text-[16px] md:text-[18px] my-[18px] md:my-[30px]">
              The watch bracelet gives a much far colder personality.Dress watch
              style. Swiss made luxury watch. Stainless steel case with a brown
              leather strap. Scratch resistant sapphire crystal.
            </p>
            <div className="flex items-center gap-[8px] md:gap-[20px] mb-[18px] md:mb-[30px]">
              <p className="text-[20px]">Starting @</p>
              <p className="md:text-[45px] text-[25px]">$350.00</p>
            </div>
            <button className="px-[38px] md:py-[10px] bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
              Explore Services
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className=" top-0 left-0 w-full h-[600px] md:h-[600px] lg:h-full object-cover"
            src={slider2}
            alt=""
          />
          <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2  text-white max-w-[600px]">
            <h2 className="text-[40px] md:text-[45px] lg:text-[70px]">
              Gorgeous
            </h2>
            <p className="text-[20px] text-[#CCA471]">Exclusive of Sales Tax</p>
            <p className="max-w-[553px] text-[16px] md:text-[18px] my-[18px] md:my-[30px]">
              The watch bracelet gives a much far colder personality.Dress watch
              style. Swiss made luxury watch. Stainless steel case with a brown
              leather strap. Scratch resistant sapphire crystal.
            </p>
            <div className="flex items-center gap-[8px] md:gap-[20px] mb-[18px] md:mb-[30px]">
              <p className="text-[20px]">Starting @</p>
              <p className="md:text-[45px] text-[25px]">$100.00</p>
            </div>
            <button className="px-[38px] md:py-[10px] bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
              Explore
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
