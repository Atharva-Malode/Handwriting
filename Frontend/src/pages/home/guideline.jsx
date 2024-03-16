import React, { useState } from "react";
import { Link } from "react-router-dom";

const guidelineData = [
  "Upload a clear image of the doctor's prescription.",
  "Crop the image to include only the prescription part.",
  "The recognition model is in the building phase, expect some errors.",
  "Prescriptions will be processed to extract text.",
  "Review the extracted text for accuracy.",
  "New improvements to the recognition model will be implemented regularly.",
  "You may attempt to upload multiple images for analysis.",
  "Your feedback is valuable for improving recognition accuracy.",
  "Check for any misinterpretations in the extracted prescription.",
  "Thank you for contributing to ScriptScan's development!",
];



const Guidelines = () => {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  
  const handleGetStarted = () => {
    console.log(language); 
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg overflow-hidden w-3/4 md:w-2/4 lg:w-2/5 p-6 mt-20">
        <h1 className="text-3xl font-bold mb-4 md:text-center text-blue-600">
          Project usage Guidelines
        </h1>
        <div className="overflow-y-auto max-h-72 mb-6">
          <ul className="list-disc pl-6">
            {guidelineData.map((guideline, index) => (
              <li key={index} className="mb-2">
                {guideline}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          </div>
          <div className="flex-shrink-0">
            <Link
              to={{ pathname: "/quiz", state: { language: language } }}
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;