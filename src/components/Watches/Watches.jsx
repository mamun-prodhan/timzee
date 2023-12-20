const Watches = ({ data }) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative max-w-[650px] h-auto md:h-[280px] overflow-hidden transition-transform transform-gpu group-hover:scale-100 duration-1000">
        <img
          src={data.photo}
          alt="Card Image"
          className="object-cover w-full h-full transition-transform transform-gpu group-hover:scale-150 duration-1000"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 duration-1000">
          <div className="p-[40px] text-center">
            <h2 className="text-2xl font-semibold text-[#FFFFFF]">
              {data.title}
            </h2>
            <p className="text-[#AAA5A5] text-lg ">{data.details}</p>
            <button className="mt-5 px-6 py-3 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
