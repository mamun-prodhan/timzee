import discount1 from "../../assets/discount1.webp";

const Discount = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-[#030D1D]">
      <div className="relative w-full h-[240px] border-[20px] border-[#000000] overflow-hidden">
        <img
          className="w-full h-[240px] object-cover"
          src="https://timzee-demo.myshopify.com/cdn/shop/files/Untitled-1.jpg?v=1614294897&width=1500"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 space-y-3">
          <h3 className="text-xl md:text-2xl">Flash Sale</h3>
          <h1 className="text-2xl md:text-4xl font-bold">Men's Watch</h1>
          <p className="text-lg">25% Discount</p>
        </div>
      </div>
      <div className="relative w-full h-[240px] border-[20px] border-[#000000] overflow-hidden">
        <img
          className="w-full h-[240px] object-cover"
          src="https://timzee-demo.myshopify.com/cdn/shop/files/promo2_c5444c07-50e6-4452-90ed-99ca49a106fc.png?v=1614300803&width=1500"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 space-y-3">
          <h3 className="text-xl md:text-2xl">Flash Sale</h3>
          <h1 className="text-2xl md:text-4xl font-bold">Womens's Watch</h1>
          <p className="text-lg">40% Discount</p>
        </div>
      </div>
      <div className="relative w-full h-[240px] border-[20px] border-[#000000] overflow-hidden">
        <img
          className="w-full h-[240px] object-cover"
          src="https://timzee-demo.myshopify.com/cdn/shop/files/promo3_e10c824c-b077-4e67-be09-c11067066cf5.png?v=1614300803&width=1500"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white z-10 space-y-3">
          <h3 className="text-xl md:text-2xl">Flash Sale</h3>
          <h1 className="text-2xl md:text-4xl font-bold">Couples's Watch</h1>
          <p className="text-lg">30% Discount</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
