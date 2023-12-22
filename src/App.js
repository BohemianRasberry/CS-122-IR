import './App.css';
import PageHome from './PageHome';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Corrected import statement
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
