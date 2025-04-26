import React from "react";
import Logo from "/img/logo.png"; // Make sure this is the correct path

const LogoSpinner = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900">
      {/* Logo */}
      <img src={Logo} alt="Logo" className="w-30 h-34 mb-6 object-contain" />

      {/* Animated Loading Progress Bar */}
      <div className="w-2/3 max-w-sm h-2 bg-cyan-100 rounded-full overflow-hidden">
        <div className="loading-bar h-full bg-blue-600"></div>
      </div>
    </div>
  );
};

export default LogoSpinner;
