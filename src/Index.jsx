import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ParentComponent from './ParentComponent.jsx';
import List from './List.jsx';
import Unique from './Unique.jsx';
import ListRender from './ListRender.jsx';
import Forms from './Forms.jsx';
import App from './App.jsx';
const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/list" element={<List />} />
        <Route path="/unique" element={<Unique />} />
        <Route path="/list-render" element={<ListRender />} />
        <Route path="/forms" element={<Forms />} /> 
        <Route path="/book" element={<App />} />
      </Routes>
    </div>
  );
};

export default Index;
