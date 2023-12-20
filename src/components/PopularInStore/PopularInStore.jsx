import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const PopularInStore = ({ tabs }) => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767 });
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="pt-10 md:pt-20 bg-[#000000]">
      <h2 className="text-3xl md:text-5xl text-white font-semibold text-center my-5 md:my-10">
        Popular In Store
      </h2>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`py-2 px-4 ${
                activeTab === tab.id
                  ? "border-b-2 border-[#C69C6F] text-[#C69C6F]"
                  : " text-[#9E9FA3]"
              } hover:text-[#C69C6F] transition-all`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4 text-white">
          <Swiper
            spaceBetween={50}
            modules={[Navigation]}
            slidesPerView={isSmallDevice ? 1 : 4}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? "" : "hidden"}
              >
                <div className="flex justify-between items-center">
                  {tab.content.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="p-6  flex flex-col gap-5 text-center">
                        <img
                          className="bg-[#3b3b3e] p-10"
                          src={item.image}
                          alt=""
                        />
                        <h2 className=" text-2xl">{item.name}</h2>
                        <p className="text-2xl">${item.price}.00</p>
                        <div className="flex items-center justify-center text-yellow-500">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <p>{item.brand}</p>
                        <button className="px-6 py-3 bg-[#9E9FA3] text-white text-lg uppercase md:font-semibold">
                          Add To Cart
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularInStore;
