import React from 'react';

function Header({ currentStep }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md h-16">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold">Choose Service</h1>
          <p className="w-24 mx-auto">Step: {currentStep}/2</p>
        </div>
      </div>
    </header>
  );
}

export default Header;