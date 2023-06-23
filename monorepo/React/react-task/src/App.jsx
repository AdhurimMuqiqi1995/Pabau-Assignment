import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, HomePage, OptionPage, NotFoundPage} from "./components";

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  return (
      <Router>
      <div className="flex flex-col">
        <div className='w-full h-1'>
          <Header currentStep={currentStep} />
        </div>
          <Routes>
            <Route path="/" element={<HomePage setCurrentStep={setCurrentStep} />} />
            <Route path="/option/:id" element={<OptionPage setCurrentStep={setCurrentStep} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
