import React, { useEffect, useState } from 'react';
import ResultTable from './ResultTable';

import filterSvg from '../../../assets/images/button_icon/filter.svg';
import downloadSvg from '../../../assets/images/button_icon/download.svg';

interface Result {
  name: string;
  address: string;
  industry: string;
  phoneNumber: string;
  email: string;
  website: string;
  googleReview: string;
  socialLinks: string[];
}
interface TabData {
  label: string;
  content: Result[];
}

interface TabComponentProps {
  data: Result[];
}

function TabComponent({ data }: TabComponentProps) {
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const newTabLabel = 'New Tab';

    setTabs((prevTabs) => {
      const updatedTabs = [...prevTabs];
      if (updatedTabs[activeTabIndex]) {
        updatedTabs[activeTabIndex].content = data;
      } else {
        updatedTabs.push({
          label: newTabLabel,
          content: data,
        });
      }
      return updatedTabs;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleTabChange = (index: React.SetStateAction<number>) => {
    setActiveTabIndex(index);
  };

  const addTab = () => {
    setTabs([...tabs, { label: 'newTab', content: [] }]);
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
            Tab{index + 1}
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
      <div className="py-10 px-8 flex justify-between">
        <h2 className="flex">Search Results</h2>
        <div className="flex">
          <button
            className="flex flex-row items-center mr-5 h-10 button-filter"
            type="button"
          >
            <img className="mr-5" src={filterSvg} alt="filter" />
            <span className="text-md">Filter</span>
          </button>
          <button
            className="flex flex-row items-center ml-5 h-10 button-export"
            type="button"
          >
            <img className="mr-5" src={downloadSvg} alt="export" />
            <span className="text-black">Export</span>
          </button>
        </div>
      </div>
      <ResultTable data={data} />
    </div>
  );
}

export default TabComponent;
