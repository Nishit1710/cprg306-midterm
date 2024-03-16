import React, { useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleAPICall = async () => {
    try {
      const passcode = "ehen2rfow";
      const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;
      const response = await fetch(url);
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={handleAPICall}
        >
          Submit
        </button>
      </div>

      {secretCode && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Secret Code:</h2>
          <p className="text-gray-800">{secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
