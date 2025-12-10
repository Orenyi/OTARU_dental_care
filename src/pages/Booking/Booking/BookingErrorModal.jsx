const BookingErrorModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl text-center">
      <div className="mx-auto w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
        ✕
      </div>
      <h2 className="text-2xl font-semibold text-red-500 mt-4">Failed!</h2>
      <p>Something went wrong. Please try again.</p>

      <button
        onClick={onClose}
        className="mt-6 bg-red-500 text-white px-6 py-2 rounded-xl hover:scale-95"
      >
        Close
      </button>
    </div>
  </div>
);

export default BookingErrorModal;
