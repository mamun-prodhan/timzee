import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const Blogs = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="bg-[#030D1D] px-5 pb-[100px]">
      <h2 className="text-white text-center text-3xl md:text-5xl py-10 md:py-24 font-semibold">
        Recent Blogs
      </h2>
      <div className=" max-w-[1400px] mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={isSmallDevice ? 1 : 2}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-8 max-w-[585px] mx-auto">
              <p className="text-[#fff]">July 5, 2019</p>
              <h2 className="text-white text-2xl">
                3 Favourite Dial Rolex Watches
              </h2>
              <button className="mt-5 px-6 py-2 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
                View All Products
              </button>
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/articles/blog8.jpg?v=1562317604&width=720"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-8 max-w-[585px] mx-auto">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/articles/blog9.jpg?v=1562317292&width=720"
                alt=""
              />
              <p className="text-[#fff]">July 5, 2019</p>
              <h2 className="text-white text-2xl">
                3 Favourite Dial Rolex Watches
              </h2>
              <button className="mt-5 px-6 py-2 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
                View All Products
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-8 max-w-[585px] mx-auto">
              <p className="text-[#fff]">July 5, 2019</p>
              <h2 className="text-white text-2xl">
                3 Favourite Dial Rolex Watches
              </h2>
              <button className="mt-5 px-6 py-2 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
                View All Products
              </button>
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/articles/blog10.jpg?v=1562317129&width=720"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-8 max-w-[585px] mx-auto">
              <img
                src="https://timzee-demo.myshopify.com/cdn/shop/articles/blog12.jpg?v=1562316997&width=720"
                alt=""
              />
              <p className="text-[#fff]">July 5, 2019</p>
              <h2 className="text-white text-2xl">
                3 Favourite Dial Rolex Watches
              </h2>
              <button className="mt-5 px-6 py-2 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
                View All Products
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
