import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Header = () => {
 const { step,total } = useContext(AppContext);

 return (
   <header className="bg-gray-800 py-4">
     <div className="container flex flex-col items-center justify-center px-4">
       <h1 className="text-white text-lg text-center mb-2">Your Choices</h1>
       <h2 className="text-white text-lg text-center">
         Step {step}/{total}
       </h2>
     </div>
   </header>
 );
};

export default Header;
