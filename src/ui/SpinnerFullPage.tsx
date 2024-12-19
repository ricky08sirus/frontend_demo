import React from "react";

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#37F5EB]"></div>
            {/* <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9E74E2]"></div> */}
            {/* <div className="w-12 h-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div> */}

        </div>
    );
};

export default Spinner;
