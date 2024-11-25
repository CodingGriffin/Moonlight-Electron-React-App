import ResultTable from '../../component/ResultTable';
import filterSvg from '../../../../assets/images/button_icon/filter.svg';
import downloadSvg from '../../../../assets/images/button_icon/download.svg';
import DropdownExportButton from '../../component/DropdownExportButton';
import Header from '../../component/Header';

const XLSX = require('xlsx');

interface HistoryProps {
  result: any; // Adjust according to your data structure
  favorite: (id: any) => void;
  exportResult: (data: any) => Promise<string>;
}
function Favorite({ result, favorite, exportResult }: HistoryProps) {
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
    // <div className="rounded-3xl pb-10 history-bg mx-10">
    //   <div className="py-10 px-8 flex justify-between">
    //     <h2 className="flex">Search Results</h2>
    //     <div className="flex">
    //       <button
    //         className="flex flex-row items-center mr-5 h-10 button-filter"
    //         type="button"
    //       >
    //         <img className="mr-5" src={filterSvg} alt="filter" />
    //         <span className="text-md">Filter</span>
    //       </button>
    //       <button
    //         className="flex flex-row items-center mx-5 h-10 button-download"
    //         type="button"
    //         onClick={downloadResult}
    //       >
    //         <img className="mr-5" src={downloadSvg} alt="export" />
    //         <span className="text-black">Download</span>
    //       </button>
    //       <button
    //         className="flex flex-row items-center ml-5 h-10 button-export"
    //         type="button"
    //         onClick={handleExportButton}
    //       >
    //         <img className="mr-5" src={downloadSvg} alt="export" />
    //         <span className="text-black">Export</span>
    //       </button>
    //     </div>
    //   </div>
    //   <ResultTable data={result} favorite={favorite} />
    // </div>
    <div>
      <Header title={"Favorite"} />
      <div className="flex justify-between sm:py-3 px-2 mx-3 lg:py-10 px-8 mx-5">
          <h2 className="flex font-bold pl-2">Search Results</h2>
          <div className="flex">
            <button
              className="flex flex-row items-center border border-gray-500 hover:bg-gray-500 hover:text-white font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:text-xs px-2 py-1.5 mr-3 lg:text-sm px-5 py-2.5 mb-2 "
              type="button"
            >
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2 fill-current dark:text-white'>
                <path d="M4 7.32263C4 7.19002 4.05268 7.06285 4.14645 6.96908C4.24021 6.87531 4.36739 6.82263 4.5 6.82263H7.5C7.63261 6.82263 7.75979 6.87531 7.85355 6.96908C7.94732 7.06285 8 7.19002 8 7.32263C8 7.45524 7.94732 7.58242 7.85355 7.67619C7.75979 7.76995 7.63261 7.82263 7.5 7.82263H4.5C4.36739 7.82263 4.24021 7.76995 4.14645 7.67619C4.05268 7.58242 4 7.45524 4 7.32263ZM2 4.32263C2 4.19002 2.05268 4.06285 2.14645 3.96908C2.24021 3.87531 2.36739 3.82263 2.5 3.82263H9.5C9.63261 3.82263 9.75979 3.87531 9.85355 3.96908C9.94732 4.06285 10 4.19002 10 4.32263C10 4.45524 9.94732 4.58242 9.85355 4.67619C9.75979 4.76995 9.63261 4.82263 9.5 4.82263H2.5C2.36739 4.82263 2.24021 4.76995 2.14645 4.67619C2.05268 4.58242 2 4.45524 2 4.32263ZM0 1.32263C0 1.19002 0.0526785 1.06285 0.146447 0.969079C0.240215 0.87531 0.367392 0.822632 0.5 0.822632H11.5C11.6326 0.822632 11.7598 0.87531 11.8536 0.969079C11.9473 1.06285 12 1.19002 12 1.32263C12 1.45524 11.9473 1.58242 11.8536 1.67619C11.7598 1.76995 11.6326 1.82263 11.5 1.82263H0.5C0.367392 1.82263 0.240215 1.76995 0.146447 1.67619C0.0526785 1.58242 0 1.45524 0 1.32263Z" />
              </svg>

              <span className="text-md">Filter</span>
            </button>
            <DropdownExportButton
              downloadResult={downloadResult}
              handleExportButton={handleExportButton}
            />
          </div>
        </div>
        <ResultTable data={result} favorite={favorite} />
    </div>
  );
}

export default Favorite;
