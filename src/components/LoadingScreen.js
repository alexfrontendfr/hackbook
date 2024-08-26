import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-600 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Loading Hackbook</h2>
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
