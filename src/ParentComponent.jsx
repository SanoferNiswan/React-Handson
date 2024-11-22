import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChildComponent from './ChildComponent';
import ChildClassComponent from './ChildClassComponent';
import './styles.css';
import App from './App';

const ParentComponent = () => {
  const [message] = useState("Hello from Parent!");
  const [childMessage, setChildMessage] = useState("");

  const handleChildMessage = (msg) => {
    setChildMessage(msg);
  };

  return (
    <div className="center-container">
      <h2>Parent Component</h2>
      <p>Message from Child: {childMessage}</p>
      <ChildComponent parentMessage={message} sendToParent={handleChildMessage} />
      <ChildClassComponent parentMessage={message} sendToParent={handleChildMessage} />
      
      <button><Link to="/forms">Go to Dynamic Form</Link></button>
      <button><Link to="/list">render list</Link></button>
      <button><Link to="/unique">unique keys</Link></button>
      <button><Link to="/book">List of book</Link></button>
      <button><Link to="/list-render">List render advanced</Link></button>
    </div>
  );
};

export default ParentComponent;
