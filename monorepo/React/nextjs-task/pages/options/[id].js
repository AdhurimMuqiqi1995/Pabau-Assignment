import React, { useContext,useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AppContext } from '../../context/AppContext';
import options from '../../services/optionsData';


const OptionPage = () => {
  const router = useRouter();

  const { setStep, selectedOption } = useContext(AppContext);
  const [optionName, setOptionName] = useState(' ');

  const handleGoBack = () => {
    router.back();  
  };

  useEffect(() => {
    if (!selectedOption) { 
      router.push('/');
      setStep(1);
    } else {
      setStep(2)
      const option = options.find((option) => option.id === selectedOption);   
      if (option) { 
        setOptionName(option.name);
      } else {
        router.push('/');
      }
    }
  }, [selectedOption, router]);
    
  return (
    <div>
      <Header />
      <div className="flex justify-center items-start mt-10 h-screen">
        <div className="max-w-xs">
          <h2 className="text-2xl mb-4 text-center">{optionName}</h2>
          <button
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OptionPage;
