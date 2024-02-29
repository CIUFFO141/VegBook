import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Card from './components/card';
import InfoRecipe from './components/InfoRecipe';

function App() {
  return (
    <Router>
      <div className="max-w-screen-xl mx-auto">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Card />} />
        <Route path="recipe/:id" element={<InfoRecipe />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
