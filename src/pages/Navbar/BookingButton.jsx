import { React } from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BookingButton = ({ className = "", onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); // ✅ run parent closeMenu function
    navigate("/booking");   // navigate after closing
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#28C870] px-6 py-3 rounded-3xl text-white uppercase font-medium text-[14px] flex items-center gap-1 hover:scale-95 transition-all ${className}`}
    >
      Schedule Appointment <RiCalendarScheduleLine />
    </button>
  );
};

export default BookingButton;
