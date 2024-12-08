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
      <div className="sm:pt-3 px-1 lg:pt-8 px-8 shadow-sm rounded-t-3xl dark:bg-gray-800">
        <div className='flex flex-row justify-between'>
          <h2 className="flex font-bold sm:text-xl pl-2 lg:pl-2 lg:text-2xl">Search Results</h2>
        </div>
        <div className="flex flex-row justify-end mt-3 pb-3 -mb-8">
          <div>
            <button
              className="inline-flex w-full justify-center items-center gap-x-0.5 rounded-sm bg-white px-3 py-2 font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 sm:text-xs lg:text-sm"
              type="button"
              onClick={handleAddSheetButton}
            >
              <span>AddSheet</span>
            </button>
          </div>
          <FilterBtn
            filterWebsite={filterWebsite}
            filterEmail={filterEmail}
            filterAddress={filterAddress}
            filterPhone={filterPhone}
          />
          
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
