import React, { useState } from 'react';
import '../styles/component.css'; // Import your CSS file for styling
import ButtonExample from '../Examples/ButtonExample';
import LoadBarExample from '../Examples/LoadBarExample';
import Button from '../Components/Button';

const componentList = [
  {
    name: 'Button',
    description: 'A simple button component.',
    example: <Button label="Click Me" onClick={() => alert('Button clicked!')} />,
    subOptions: [
      { name: 'About', content: 'The Button component is a versatile UI element...' },
      { name: 'Props', content: 'label: string, onClick: function...' },
      { name: 'Example', content: <Button label="Click Me" onClick={() => alert('Button clicked!')} /> },
    ],
  },
  {
    name: 'Loading',
    description: 'A simple loading component.',
    example: <LoadBarExample />, // Replace with your actual loading component
    subOptions: [
      { name: 'About', content: 'The Loading component shows progress...' },
      { name: 'Props', content: 'size: number, color: string...' },
      { name: 'Example', content: <LoadBarExample /> },
    ],
  },
  // Add more components with similar structure here
];

function Components() {
  const [selectedComponent, setSelectedComponent] = useState(componentList[0]); // Default to the first component
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which component is expanded
  const [selectedSubOption, setSelectedSubOption] = useState(selectedComponent.subOptions[0]); // Default to the first sub-option

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the selected component
      setSelectedSubOption(componentList[index].subOptions[0]); // Reset to the first sub-option
    }
  };

  const renderSubOptionContent = () => {
    return (
      <div className="sub-option-content">
        {typeof selectedSubOption.content === 'string' ? (
          <p>{selectedSubOption.content}</p>
        ) : (
          selectedSubOption.content
        )}
      </div>
    );
  };

  return (
    <div className="components-container">
      <div className="sidebar">
        <h2>Components</h2>
        <ul>
          {componentList.map((component, index) => (
            <li key={index}>
              <div onClick={() => toggleExpand(index)} className={selectedComponent.name === component.name ? 'selected' : ''}>
                {component.name}
              </div>
              {expandedIndex === index && (
                <ul>
                  {component.subOptions.map((subOption, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => setSelectedSubOption(subOption)}
                      className={selectedSubOption.name === subOption.name ? 'selected' : ''}
                    >
                      {subOption.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {renderSubOptionContent()}
      </div>
    </div>
  );
}

export default Components;
