import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import RegistrationForm from "Components/RegistrationForm";
import RegistrationFormStep2 from "Components/RegistrationFormStep2";
import RegistrationFormStep3 from "Components/RegistrationFormStep3";
import ConfirmationPage from "Components/ConfirmationPage";


function App() {
  return (
    <Router>
      <Routes>
        {/* <div className="App">
          <RegistrationForm></RegistrationForm>
        </div> */}
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/RegistrationFormStep2" element={<RegistrationFormStep2 />} />
        <Route path="/RegistrationFormStep3" element={<RegistrationFormStep3 />} />
        <Route path="/ConfirmationPage" element={<ConfirmationPage />} />
      </Routes>
    </Router>

  );
}

export default App;
