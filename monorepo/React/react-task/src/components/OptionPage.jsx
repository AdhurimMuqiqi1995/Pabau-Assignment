import React ,{useEffect}  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { options } from '../services/optionsData';

function OptionPage({setCurrentStep}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  const selectedOption = options.find((option) => option.id === parseInt(id));

  useEffect(() => {
    setCurrentStep(2);  
  }, [setCurrentStep]);


  return (
    <div className="mt-[200px] mx-auto w-80 text-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Service:</h2>
      <p className="text-lg">{selectedOption && selectedOption.name}</p>
      <button
        onClick={handleBackButton}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
      >
        Back
      </button>
    </div>
  );
}

export default OptionPage;
