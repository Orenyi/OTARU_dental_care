import React, { useState, useRef } from "react";
import BookingForm from "./BookingForm";
import BookingSuccessModal from "./BookingSuccessModal";
import BookingErrorModal from "./BookingErrorModal";
import BookingContactCard from "./BookingContactCard";
import BookingMap from "./BookingMap";
import emailjs from "emailjs-com";

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef();

  const isSunday = (date) => date.getDay() === 0;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ufjungg",
        "template_9203tjj",
        formRef.current,
        "5s4hdnR5QUShLv73l"
      )
      .then(
        () => {
          setShowSuccess(true);
          formRef.current.reset();
          setStartDate(null);
          setTime(null);
        },
        () => setShowError(true)
      );
  };

  return (
    <section className="px-4 md:px-6 xl:px-10 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        <div>
          <h4 className="uppercase text-[17px]">Book Here</h4>

          <h2 className="text-[35px] font-semibold leading-tight">
            We’re One Step Away From Caring for
            <span className="text-[#28C870]"> Your Smile</span>
          </h2>

          <BookingForm
            formRef={formRef}
            sendEmail={sendEmail}
            startDate={startDate}
            setStartDate={setStartDate}
            time={time}
            setTime={setTime}
            isSunday={isSunday}
          />
        </div>

        <div className="flex flex-col gap-10">
          <BookingContactCard />
          <BookingMap />
        </div>
      </div>

      {showSuccess && <BookingSuccessModal onClose={() => setShowSuccess(false)} />}
      {showError && <BookingErrorModal onClose={() => setShowError(false)} />}
    </section>
  );
};

export default Booking;
