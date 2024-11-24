import React, { useEffect, useState } from 'react';
import ResultTable from './ResultTable';
import DropdownExportButton from './DropdownExportButton';

import filterSvg from '../../../assets/images/button_icon/filter.svg';

const XLSX = require('xlsx');

interface Result {
  name: string;
  formatted_address: string;
  industry: string;
  phoneNumber: string;
  email: string;
  website: string;
  rating: string;
  socialLinks: string[];
  isFavorite: boolean;
}
interface TabData {
  label: string;
  content: Result[];
}

interface TabComponentProps {
  data: Result[];
  exportResult: (data: any) => Promise<string>;
  favorite: (id: any) => void;
  addSheet: () => void;
}

function TabComponent({
  data,
  exportResult,
  favorite,
  addSheet,
}: TabComponentProps) {
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const downloadResult = () => {
    const wb = XLSX.utils.book_new();

    // Convert the array of objects to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate a download link for the Excel file
    XLSX.writeFile(wb, 'data.xlsx');
  };

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

  const handleAddSheetButton = () => {
    addSheet();
  };

  const handleExportButton = async () => {
    const googelSheetUri = await exportResult(data);
    window.open(googelSheetUri, '_blank');
  };

  const addTab = () => {
    setTabs([...tabs, { label: 'newTab', content: [] }]);
  };

  return (
    <div>
      {/* <div className="tabs flex flex-row">
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
      </div> */}
      <div className="py-10 px-8 flex justify-between">
        <h2 className="flex">Search Results</h2>
        {/* <div className="flex">
          <button
            className="flex flex-row items-center mr-5 h-10 button-filter"
            type="button"
          >
            <img className="mr-5" src={filterSvg} alt="filter" />
            <span className="text-md">Filter</span>
          </button>
          <button
            className="flex flex-row items-center mx-5 h-10 button-download"
            type="button"
            onClick={handleAddSheetButton}
          >
            <span className="text-black">AddSheet</span>
          </button>
          <DropdownExportButton
            downloadResult={downloadResult}
            handleExportButton={handleExportButton}
          />
        </div> */}

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            Profile
          </button>
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            Settings
          </button>
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg>
            Downloads
          </button>
        </div>

      </div>
      <ResultTable data={data} favorite={favorite} />
    </div>
  );
}

export default TabComponent;
