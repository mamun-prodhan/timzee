import "./LimitedEdition.css";

const LimitedEdition = () => {
  return (
    <div className="bg-[#02030A] p-[50px] limitedEdition bg-cover bg-center">
      <div className=" max-w-[826px]">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#FFFFD8] mb-[13px]">
          Roman or Numeral
        </h2>
        <p className="text-[#AAA5A5] mt-4 mb-8">
          Limited Edition of 200 pieces world-wide. Watch Big Bang,
          361.PE.2010.RW.1104 The stainless steel case and band are thick and
          prominent, creating a durable feel on the wrist. However, the dial is
          much more whimsical.
        </p>
        <p className="text-[#AAA5A5]">
          Accurate and Comfortable Imported Japanese quartz movement ensures
          precise time keeping. Its classic design of multi display watches and
          comfortable silicone material can provide to users excellent outdoor
          experiences.
        </p>
        <button className="mt-5 px-10 py-3 bg-[#9E9FA3] text-white text-[18px] uppercase md:font-semibold">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default LimitedEdition;
