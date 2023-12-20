import "./NewsLetter.css";
import {
  FaTwitter,
  FaFacebookSquare,
  FaPinterest,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="news-letter-bg py-[70px] md:py-[200px] bg-cover bg-center px-10">
      <div className="flex flex-col items-center space-y-10 text-white">
        <h2 className="text-3xl md:text-5xl font-semibold">Newsletter</h2>
        <div>
          <input
            className="p-2 md:p-4 w-36 md:w-96 bg-[#000000] border border-[#9E9FA3]"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <button className="px-2 md:px-8 py-2 md:py-4 bg-[#9E9FA3] border border-[#9E9FA3]">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-center">
          Will be used in accordance with our Privacy policy
        </p>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#9E9FA3]">
            <FaTwitter />
          </div>
          <div className="p-2 bg-[#9E9FA3]">
            <FaFacebookSquare />
          </div>
          <div className="p-2 bg-[#9E9FA3]">
            <FaPinterest />
          </div>
          <div className="p-2 bg-[#9E9FA3]">
            <FaInstagram />
          </div>
          <div className="p-2 bg-[#9E9FA3]">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
