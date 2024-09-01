"use client";

// データが存在しないときの画面
const NotFound = () => {
  return (
    <div>
      <div className="text-center text-5xl font-bold m-3 text-gray-700">
        404
      </div>
      <div className="text-center text-2xl font-bold text-gray-600">
        Not Found
      </div>
    </div>
  );
};

export default NotFound;
