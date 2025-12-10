import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const BookingForm = ({
  formRef,
  sendEmail,
  startDate,
  setStartDate,
  time,
  setTime,
  isSunday
}) => {
  
  return (
    
    <form
    
      ref={formRef}
      onSubmit={sendEmail}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
    >
      {/* --- Name --- */}
      <div className="flex flex-col gap-y-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Your Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border rounded-md p-2 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-y-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="border rounded-md p-2 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-y-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          name="phone"
          required
          placeholder="Enter Phone Number"
          className="border rounded-md p-2 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
        />
      </div>

      {/* Appointment Type */}
      <div className="flex flex-col gap-y-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Appointment For <span className="text-red-600">*</span>
        </label>
        <select
          name="appointment"
          required
          defaultValue=""
          className="border rounded-md p-2 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
        >
          <option value="" disabled hidden>Select Treatment</option>
          <option>Child Dental</option>
          <option>Crowns & Bridges</option>
          <option>Denture Services</option>
          <option>Filling of Teeth</option>
          <option>Scaling</option>
          <option>Surgical Extraction</option>
          <option>Teeth Bleaching</option>
          <option>Tooth Implant</option>
        </select>
      </div>

      {/* Date Picker */}
      <div className="flex flex-col gap-y-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Preferred Date <span className="text-red-600">*</span>
        </label>

        <div className="relative">
          <FaRegCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[16px] z-10" />

          <DatePicker
            selected={startDate}
            onChange={setStartDate}
            filterDate={(date) => !isSunday(date)}
            minDate={new Date()}
            name="date"
            required
            placeholderText="Select Appointment Date"
            dateFormat="dd/MM/yyyy"
            className="border rounded-md p-2 pl-10 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
          />
        </div>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-y-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Preferred Time <span className="text-red-600">*</span>
        </label>

        <div className="relative">
          <FaRegClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-[16px] z-10" />

          <DatePicker
            selected={time}
            onChange={setTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            minTime={new Date(0, 0, 0, 8, 0)}
            maxTime={new Date(0, 0, 0, 22, 0)}
            name="time"
            required
            dateFormat="h:mm aa"
            placeholderText="Select Time"
            className="border rounded-md p-2 pl-10 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-y-2 md:col-span-2">
        <label className="text-[15px] md:text-[16px] lg:text-[18px]">
          Special Notes
        </label>

        <textarea
          name="notes"
          rows="6"
          className="border rounded-md p-2 outline-none focus:ring-1 focus:ring-[#28C870] w-full text-[13px]"
        ></textarea>
      </div>

      {/* Submit */}
      <div className="md:col-span-2 flex justify-end">
        <button className="bg-[#28C870] px-6 py-3 rounded-3xl text-white uppercase font-medium hover:scale-95 transition">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
