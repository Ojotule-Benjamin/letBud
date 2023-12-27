import React from "react";

interface RentDetailsModalProps {
  onClose: () => void;
  unitDetails: any; // Update type accordingly
}

const RentDetailsModal: React.FC<RentDetailsModalProps> = ({
  onClose,
  unitDetails,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="modal bg-white w-full max-w-md p-6 rounded-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-4">
          {/* Customize your modal content using unitDetails */}
          <div>{JSON.stringify(unitDetails)}</div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary_main text-white rounded-md hover:bg-primary_dark"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentDetailsModal;
