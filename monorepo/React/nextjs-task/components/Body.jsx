import React, { useContext,useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';
import options from '../services/optionsData';

const Body = () => {
  const { handleSelectOption, setStep } = useContext(AppContext);

  useEffect(() => {
    setStep(1);  
  }, []);

  return (
    <main className="flex justify-center items-start mt-10 h-screen">
      <div className="max-w-xs">
        <h2 className="text-2xl mb-4 text-center">Select an option:</h2>
        <ul>
          {options.map((option) => (
            <li 
            key={option.id}
            className="mb-2 flex items-center"
            >
            <Link  href={`/options/${option.id}`}
              className="flex items-center w-full h-10 bg-gray-200 rounded-md px-4 py-2 shadow-md hover:bg-gray-300 focus:bg-gray-300"
              onClick={() => handleSelectOption(option.id)} 
            >
            {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Body;
