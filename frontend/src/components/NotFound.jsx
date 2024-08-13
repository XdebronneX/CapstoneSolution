import React from 'react';

const NotFound = () => {
  return (
    <div className="p-8 shadow-2xl rounded-lg text-center">
        <div className="text-6xl font-bold text-pink-500">404</div>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist. It might have been removed, or you may have mistyped the URL.
        </p>
    </div>
  );
};

export default NotFound;
