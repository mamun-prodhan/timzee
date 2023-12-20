import Discount from "../../Discount/Discount";
import PopularInStore from "../../PopularInStore/PopularInStore";
import Slider from "../../Slider/Slider";
import img1 from "../../../assets/WHITE.png";
import img2 from "../../../assets/GREEN.png";
import img3 from "../../../assets/PURPLE.png";
import img4 from "../../../assets/RED.png";
import "./Home.css";
import LimitedEdition from "../../LimitedEdition/LimitedEdition";
import Watches from "../../Watches/Watches";
import Testimonials from "../../Testimonials/Testimonials";
import Blogs from "../../Blogs/Blogs";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Brands from "../../Brands/Brands";

const Home = () => {
  const tabs = [
    {
      id: "tab1",
      label: "CLASSIC",
      content: [
        {
          name: "Black Numeral Dial",
          price: 200,
          discount: 250,
          brand: "Timezee",
          image: img1,
        },
        {
          name: "Golden Automatic",
          price: 200,
          discount: 401,
          brand: "Fostelo",
          image: img2,
        },
        {
          name: "Golden Classical",
          price: 301,
          discount: 0,
          brand: "Ex of sale Tax",
          image: img3,
        },
        {
          name: "Numeral Semi Dial",
          price: 200,
          discount: 0,
          brand: "Fostelo",
          image: img4,
        },
      ],
    },
    {
      id: "tab2",
      label: "MODERN",
      content: [
        {
          name: "Black Numeral Dial",
          price: 200,
          discount: 250,
          brand: "Timezee",
          image: img1,
        },
        {
          name: "Golden Automatic",
          price: 200,
          discount: 401,
          brand: "Fostelo",
          image: img2,
        },
        {
          name: "Golden Classical",
          price: 301,
          discount: 0,
          brand: "Ex of sale Tax",
          image: img3,
        },
        {
          name: "Numeral Semi Dial",
          price: 200,
          discount: 0,
          brand: "Fostelo",
          image: img4,
        },
      ],
    },
    {
      id: "tab3",
      label: "SPECIAL EDITION",
      content: [
        {
          name: "Black Numeral Dial",
          price: 200,
          discount: 250,
          brand: "Timezee",
          image: img1,
        },
        {
          name: "Golden Automatic",
          price: 200,
          discount: 401,
          brand: "Fostelo",
          image: img2,
        },
        {
          name: "Golden Classical",
          price: 301,
          discount: 0,
          brand: "Ex of sale Tax",
          image: img3,
        },
        {
          name: "Numeral Semi Dial",
          price: 200,
          discount: 0,
          brand: "Fostelo",
          image: img4,
        },
      ],
    },
  ];

  const watchData = [
    {
      photo:
        "https://timzee-demo.myshopify.com/cdn/shop/files/banner_286c6b34-88cb-465a-a2e8-2a5faf8295df.jpg?v=1614295013&width=1500",
      title: "Versits",
      details:
        "Rhuyese ser sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      photo:
        "https://timzee-demo.myshopify.com/cdn/shop/files/Gallery2.jpg?v=1614300904&width=1500",
      title: "2019 Novalties",
      details:
        "Hiue wghres rhuyres magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      photo:
        "https://timzee-demo.myshopify.com/cdn/shop/files/Gallery3.jpg?v=1614300904&width=1500",
      title: "Javelin",
      details:
        "Kiures guyrese ngittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      photo:
        "https://timzee-demo.myshopify.com/cdn/shop/files/Gallery6.jpg?v=1614300904&width=1500",
      title: "Voltamic",
      details:
        "Biurese guyrese orese jittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      photo:
        "https://timzee-demo.myshopify.com/cdn/shop/files/Gallery5.jpg?v=1614300904&width=1500",
      title: "Cerutaio",
      details:
        "Ulreser tellus marquestis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.",
    },
    {
      photo:
        "https://timzee-demo.myshopify.com/cdn/shop/files/Gallery4.jpg?v=1614300904&width=1500",
      title: "Zerairo",
      details:
        "Biurese hierese ciseittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh.",
    },
  ];

  return (
    <div className="">
      <Slider></Slider>
      <Discount></Discount>
      <PopularInStore tabs={tabs}></PopularInStore>
      <div className="featured bg-fixed py-60 bg-gray-400">
        <div className="text-center">
          <h2 className="text-3xl px-5 md:px-0 md:text-5xl mb-10 font-bold text-white">
            Most Wanted Of The Year
          </h2>
          <button className="px-10 py-3 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <LimitedEdition></LimitedEdition>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {watchData.map((data, index) => (
          <Watches key={index} data={data}></Watches>
        ))}
      </div>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <NewsLetter></NewsLetter>
      <Brands></Brands>
    </div>
  );
};

export default Home;
