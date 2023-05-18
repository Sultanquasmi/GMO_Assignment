import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FirstPage from '../src/Components/Pages/FirstPage/firstPage';
import SecondPage from '../src/Components/Pages/SecondPage/secondPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/*" element={<Navigate to="/first" />} />
      </Routes>
      
    </Router>
  );
};

export default App;

