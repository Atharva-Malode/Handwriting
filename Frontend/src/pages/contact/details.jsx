import React from "react";

const Details = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg overflow-hidden w-3/4 md:w-2/4 lg:w-2/5 p-6 mt-20 text-center">
        <div className="mb-6">
          <p className="text-3xl font-bold mb-2 text-blue-600">Doctors Handwriting Recognition System</p>
          <p className="text-lg mb-2">Created by:</p>
          <p className="font-semibold mb-2">Ritik Thakre, Yogesh Bhat, Shreyash Shambharkar, Swapnil Moon, Vaibhav Parteti</p>
          <p className="mb-2">
            For feedback or any queries:{" "}
            <a
              href="mailto:ritikthakre2020@gmail.com"
              className="font-semibold text-blue-600 hover:underline"
            >
              ritikthakre2020@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
