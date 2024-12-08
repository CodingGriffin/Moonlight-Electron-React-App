import { useEffect, useState } from 'react';
import ResultTable from '../../component/ResultTable';
import DropdownExportButton from '../../component/DropdownExportButton';
import Header from '../../component/Header';
import FilterBtn from '../../component/filterBtn';

const XLSX = require('xlsx');

interface HistoryProps {
  data: any; // Adjust according to your data structure
  favorite: (id: any) => void;
  exportResult: (data: any) => Promise<string>;
}
function History({ data, favorite, exportResult }: HistoryProps) {
  const [result, setResult] = useState<any[]>([]);
  const [address, setAddress] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [website, setWebsite] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleExportButton = async () => {
    const googelSheetUri = await exportResult(result);
    window.open(googelSheetUri, '_blank');
  };

  const downloadResult = () => {
    const wb = XLSX.utils.book_new();

    // Convert the array of objects to a worksheet
    const ws = XLSX.utils.json_to_sheet(result);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate a download link for the Excel file
    XLSX.writeFile(wb, 'data.xlsx');
  };

  return (
    <div>
      <Header title="History" />
      <div className='bg-white dark:bg-gray-700 my-12 pb-6 rounded-3xl mx-8 shadow-xl'>
        <div className="flex justify-between sm:py-4 px-1 mx-3 lg:py-10 px-8 mx-5">
          <h2 className="flex font-bold sm:text-xl pl-2 lg:pl-2 lg:text-2xl">Search Results</h2>
          <div className="flex">
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
        <ResultTable data={result} favorite={favorite} />
      </div>
    </div>
  );
}

export default History;
