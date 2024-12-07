import Header from '../../component/Header';
import ResultTable from '../../component/ResultTable';
import ResultTableDiv from '../../component/ResultTableDiv';
// import filterSvg from '../../../../assets/images/button_icon/filter.svg';
// import downloadSvg from '../../../../assets/images/button_icon/download.svg';

// const XLSX = require('xlsx');

interface HistoryProps {
  result: any; // Adjust according to your data structure
  favorite: (id: any) => void;
}
function SheetDetail({ result, favorite }: HistoryProps) {
  // const handleExportButton = async () => {
  //   const googelSheetUri = await exportResult(result);
  //   window.open(googelSheetUri, '_blank');
  // };

  // const downloadResult = () => {
  //   const wb = XLSX.utils.book_new();

  //   // Convert the array of objects to a worksheet
  //   const ws = XLSX.utils.json_to_sheet(result);

  //   // Append the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   // Generate a download link for the Excel file
  //   XLSX.writeFile(wb, 'data.xlsx');
  // };

  return (
    <div>
      <Header title="sheet detail" />
      <div className="rounded-3xl pb-10 sm:my-2 mx-2 lg:my-10 mx-5 bg-white shadow-xl">
        <ResultTable
          data={result.map((item: any[]) => {
            return item[0];
          })}
          favorite={favorite}
        />
      </div>
    </div>
  );
}

export default SheetDetail;
