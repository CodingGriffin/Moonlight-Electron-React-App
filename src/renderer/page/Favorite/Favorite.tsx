import ResultTable from '../../component/ResultTable';
import filterSvg from '../../../../assets/images/button_icon/filter.svg';
import downloadSvg from '../../../../assets/images/button_icon/download.svg';
import './style.css';

const XLSX = require('xlsx');

interface HistoryProps {
  result: any; // Adjust according to your data structure
  favorite: (id: any) => void;
}

function Favorite({ result, favorite }: HistoryProps) {
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
    <div className="rounded-3xl pb-10 favorite-bg mx-10">
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
            className="flex flex-row items-center mx-5 h-10 button-download"
            type="button"
            onClick={downloadResult}
          >
            <img className="mr-5" src={downloadSvg} alt="export" />
            <span className="text-black">Download</span>
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
      <ResultTable data={result} favorite={favorite} />
    </div>
  );
}

export default Favorite;
