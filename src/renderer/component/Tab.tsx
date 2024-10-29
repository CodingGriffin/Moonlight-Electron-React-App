import React, { useState } from 'react';

function TabComponent() {
  // Define the tabs and their corresponding content
  const initialTabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const [tabs, setTabs] = useState(initialTabs);

  // State to keep track of the active tab index
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Function to handle tab change
  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTabIndex(index);
  };

  const addTab = () => {
    setTabs([...tabs, { label: 'newTab', content: 'Content for NewTab' }]);
  };

  return (
    <div>
      <div className="tabs flex flex-row">
        {tabs.map((tab, index) => (
          <div
            className="px-6 py-3 tab"
            onClick={() => handleTabChange(index)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={index}
            style={{
              color: activeTabIndex === index ? 'white' : '#5b5b5c',
              borderBottomColor: '#3300ff',
              borderStyle: activeTabIndex === index ? 'solid' : '',
              borderBottomWidth: activeTabIndex === index ? '3px' : '0',
            }}
          >
            {tab.label}
          </div>
        ))}
        <div
          className="px-6 py-3 tab"
          onClick={() => addTab()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          +
        </div>
      </div>
      <h2>{tabs[activeTabIndex].label}</h2>
      <p>{tabs[activeTabIndex].content}</p>
    </div>
  );
}

export default TabComponent;
