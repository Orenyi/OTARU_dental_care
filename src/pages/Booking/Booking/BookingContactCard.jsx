import { LuPhoneCall } from "react-icons/lu";

const BookingContactCard = () => (
  <a href="tel:08167527125">
    <div className="bg-[#bbebd3] p-10 mt-10 rounded-2xl flex items-center gap-5">
      <LuPhoneCall className="text-[45px] text-black" />
      <div>
        <h4 className="font-semibold text-black text-[18px]">
          You can Call Us
        </h4>
        <p className="text-black">+2348167527125</p>
      </div>
    </div>
  </a>
);

export default BookingContactCard;
