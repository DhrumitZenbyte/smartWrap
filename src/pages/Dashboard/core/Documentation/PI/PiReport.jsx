import React from 'react';
import { useNavigate } from 'react-router-dom';

const PiReport = () => {
  const navigate = useNavigate();

  const handleGenerateDomestic = () => {
    navigate("/dashboard/pi-domestic-report/generate") // Replace with your actual path
  };

  const handleGenerateExport = () => {
    navigate("/dashboard/pi-export-report/generate") // Replace with your actual path
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div>PiReport</div>
      <div>
        <button 
          onClick={handleGenerateDomestic} 
          className="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Generate PI Domestic
        </button>
        <button 
          onClick={handleGenerateExport} 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
        >
          Generate PI Export
        </button>
      </div>
    </div>
  );
}

export default PiReport;
