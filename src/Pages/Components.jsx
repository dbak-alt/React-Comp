import React, { useState } from 'react';
import '../styles/component.css'; // Import your CSS file for styling

// Import your components
import Button from '../Components/Button';
// Import more components as needed

const componentList = [
  {
    name: 'Button',
    description: 'A simple button component.',
    example: <Button label="Click Me" onClick={() => alert('Button clicked!')} />,
  },
  // Add more components here
];

function Components() {
  const [selectedComponent, setSelectedComponent] = useState(componentList[0]); // Default to the first component

  return (
    <div className="components-container">
      <div className="sidebar">
        <h2>Components</h2>
        <ul>
          {componentList.map((component, index) => (
            <li key={index} onClick={() => setSelectedComponent(component)}>
              {component.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h2>{selectedComponent.name}</h2>
        <p>{selectedComponent.description}</p>
        <div className="example-container">
          {selectedComponent.example}
        </div>
      </div>
    </div>
  );
}

export default Components;
