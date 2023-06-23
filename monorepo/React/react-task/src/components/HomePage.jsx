import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import options from '../services/optionsData';


function HomePage({setCurrentStep}) {

  useEffect(() => {
    setCurrentStep(1); 
  }, [setCurrentStep]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-300 ">
      <ul className="w-full max-w-screen-sm ">
        {options.map((option) => (
          <li key={option.id} className="mb-2 flex items-center">
            <Link
              to={`/option/${option.id}`}
              className="flex items-center w-full h-10 bg-gray-200 rounded-md px-4 py-2 shadow-md hover:bg-gray-300 focus:bg-gray-300"
            >
              <img
                src={option.photo}
                alt={option.name}
                className="w-8 h-8 mr-2 rounded-full"
              />
              <span>{option.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
