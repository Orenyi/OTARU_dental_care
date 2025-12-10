const BookingSuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
    <div className="bg-white p-8 rounded-2xl text-center">
      <div className="mx-auto w-16 h-16 bg-[#28C870] rounded-full flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /> </svg>
      </div>
      <h2 className="text-2xl font-semibold text-[#28C870] mt-4">Success!</h2>
      <p>Your appointment has been submitted successfully.</p>

      <button
        onClick={onClose}
        className="mt-6 bg-[#28C870] text-white px-6 py-2 rounded-xl hover:scale-95"
      >
        Close
      </button>
    </div>
  </div>
);

export default BookingSuccessModal;
