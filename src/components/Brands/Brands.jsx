import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const Brands = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="bg-[#030D1D] py-[70px] md:py-[100px] px-5">
      <h2 className="text-white text-center mb-16 text-3xl md:text-5xl font-semibold">
        The Great Experience
      </h2>
      <div className=" max-w-[1400px] mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={isSmallDevice ? 1 : 4}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/files/client1_6e709373-d4d6-4fee-905c-f47825f2b2a6.png?v=1614300918&width=1500"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/files/client3_50109f47-cc2b-438c-80d1-d5a6d59c4064.png?v=1614300918&width=1500"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/files/client2_f5e7538d-5a02-406d-9b6f-8fabc6e087f4.png?v=1614300918&width=1500"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/files/client4_ff7c56f6-25ab-4616-904a-e1c7b2812066.png?v=1614300918&width=1500"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/files/client2_f5e7538d-5a02-406d-9b6f-8fabc6e087f4.png?v=1614300918&width=1500"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
