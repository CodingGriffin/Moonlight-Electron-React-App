import React, { useEffect, useState } from 'react';
import ResultTable from './ResultTable';
import DropdownExportButton from './DropdownExportButton';
import FilterBtn from './filterBtn';

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
  const [result, setResult] = useState<Result[]>([]);
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [address, setAddress] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [website, setWebsite] = useState(false);

  const downloadResult = () => {
    const wb = XLSX.utils.book_new();

    // Convert the array of objects to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate a download link for the Excel file
    XLSX.writeFile(wb, 'data.xlsx');
  };

  const filterAddress = async () => {
    await setAddress(!address);
    if (email) {
      data = data.filter((item) => {
        return item.email;
      });
    }
    if (website) {
      data = data.filter((item) => {
        return item.website !== 'Website not available';
      });
    }
    if (!address) {
      data = data.filter((item) => {
        return item.formatted_address;
      });
    }
    if (phone) {
      data = data.filter((item) => {
        return item.phoneNumber !== 'Phone number not available';
      });
    }
    await setResult(data);
  };

  const filterPhone = async () => {
    await setPhone(!phone);
    if (email) {
      data = data.filter((item) => {
        return item.email;
      });
    }
    if (website) {
      data = data.filter((item) => {
        return item.website !== 'Website not available';
      });
    }
    if (address) {
      data = data.filter((item) => {
        return item.formatted_address;
      });
    }
    if (!phone) {
      data = data.filter((item) => {
        return item.phoneNumber !== 'Phone number not available';
      });
    }
    await setResult(data);
  };

  const filterEmail = async () => {
    await setEmail(!email);
    if (!email) {
      data = data.filter((item) => {
        return item.email;
      });
    }
    if (website) {
      data = data.filter((item) => {
        return item.website !== 'Website not available';
      });
    }
    if (address) {
      data = data.filter((item) => {
        return item.formatted_address;
      });
    }
    if (phone) {
      data = data.filter((item) => {
        return item.phoneNumber !== 'Phone number not available';
      });
    }
    await setResult(data);
  };

  const filterWebsite = async () => {
    await setWebsite(!website);
    if (!website) {
      data = data.filter((item) => {
        return item.website !== 'Website not available';
      });
    }
    if (email) {
      data = data.filter((item) => {
        return item.email;
      });
    }
    if (address) {
      data = data.filter((item) => {
        return item.formatted_address;
      });
    }
    if (phone) {
      data = data.filter((item) => {
        return item.phoneNumber !== 'Phone number not available';
      });
    }
    await setResult(data);
    console.log("this is the filtered data by website", data, website);
  };

  useEffect(() => {
    setResult(data);
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
  }, [data, website]);

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
      <div className="flex justify-between sm:py-3 px-2 lg:py-10 px-8">
        <h2 className="flex font-bold pl-2">Search Results</h2>
        <div className="flex">
          {/* <button
            className="flex flex-row items-center border border-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:text-xs px-2 py-1.5 lg:text-sm px-5 py-2.5 mb-2 "
            type="button"
          >
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2 fill-current dark:text-white'>
              <path d="M4 7.32263C4 7.19002 4.05268 7.06285 4.14645 6.96908C4.24021 6.87531 4.36739 6.82263 4.5 6.82263H7.5C7.63261 6.82263 7.75979 6.87531 7.85355 6.96908C7.94732 7.06285 8 7.19002 8 7.32263C8 7.45524 7.94732 7.58242 7.85355 7.67619C7.75979 7.76995 7.63261 7.82263 7.5 7.82263H4.5C4.36739 7.82263 4.24021 7.76995 4.14645 7.67619C4.05268 7.58242 4 7.45524 4 7.32263ZM2 4.32263C2 4.19002 2.05268 4.06285 2.14645 3.96908C2.24021 3.87531 2.36739 3.82263 2.5 3.82263H9.5C9.63261 3.82263 9.75979 3.87531 9.85355 3.96908C9.94732 4.06285 10 4.19002 10 4.32263C10 4.45524 9.94732 4.58242 9.85355 4.67619C9.75979 4.76995 9.63261 4.82263 9.5 4.82263H2.5C2.36739 4.82263 2.24021 4.76995 2.14645 4.67619C2.05268 4.58242 2 4.45524 2 4.32263ZM0 1.32263C0 1.19002 0.0526785 1.06285 0.146447 0.969079C0.240215 0.87531 0.367392 0.822632 0.5 0.822632H11.5C11.6326 0.822632 11.7598 0.87531 11.8536 0.969079C11.9473 1.06285 12 1.19002 12 1.32263C12 1.45524 11.9473 1.58242 11.8536 1.67619C11.7598 1.76995 11.6326 1.82263 11.5 1.82263H0.5C0.367392 1.82263 0.240215 1.76995 0.146447 1.67619C0.0526785 1.58242 0 1.45524 0 1.32263Z" />
            </svg>

            <span className="text-md">Filter</span>
          </button> */}
          <FilterBtn
            filterWebsite={filterWebsite}
            filterEmail={filterEmail}
            filterAddress={filterAddress}
            filterPhone={filterPhone}
          />
          <div>
            <button
              className="flex flex-row items-center py-2 bg-purple-700 text-white hover:bg-purple-800 font-medium rounded-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 sm:text-sm px-2 mx-2 lg:text-sm px-5 mb-2"
              type="button"
              onClick={handleAddSheetButton}
            >
              <span>AddSheet</span>
            </button>
          </div>
          <DropdownExportButton
            downloadResult={downloadResult}
            handleExportButton={handleExportButton}
          />
        </div>
      </div>
      <ResultTable data={result} favorite={favorite}  />
    </div>
  );
}

export default TabComponent;
