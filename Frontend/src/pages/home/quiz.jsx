import React, { useState } from "react";

const Quiz = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/token", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      setExtractedText(data.medicine);
      setImage(URL.createObjectURL(file));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg overflow-hidden w-4/5 md:w-3/5 lg:w-2/5 p-6 relative text-center">
        {image && (
          <div className="flex justify-center items-center">
            <img src={image} alt="Uploaded Prescription" className="w-64 h-auto mr-4" />
            {extractedText && (
              <div className="text-left">
                <h2 className="text-lg font-semibold mb-2">Extracted Text:</h2>
                <p className="text-lg">{extractedText}</p>
              </div>
            )}
          </div>
        )}
        {!image && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-blue-600">ScriptScan</h1>
            <p className="text-xl mb-6">Upload a clear image of the doctor's prescription</p>
            <label htmlFor="upload" className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
              Upload Image
            </label>
            <input type="file" id="upload" className="hidden" onChange={handleImageUpload} />
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
