import { useEffect, useState } from 'react';
import Header from '../../component/Header';
import SheetGrid from '../../component/SheetGrid';

interface SheetProps {
  result: any; // Adjust according to your data structure
  combineSheets: (targetId: string, droppedId: string) => void;
}

function Sheet({ result, combineSheets }: SheetProps) {
  const [data, setData] = useState([]);
  const handleSheetsUpdate = (targetId: string, droppedId: string) => {
    combineSheets(targetId, droppedId);
    // Here you can handle the updated sheets, e.g., save to backend
  };

  useEffect(() => {
    setData(result);
    // You can perform side effects here if needed
  }, [result]);

  return (
    <div>
      <Header title="Recent Sheets" />
      <div className="flex flex-col gap-3 rounded-3xl lg:mx-8 p-10">
        <div className="min-h-screen bg-gray-100 p-8">
          <SheetGrid initialSheets={data} onSheetsUpdate={handleSheetsUpdate} />
        </div>
      </div>
    </div>
  );
}

export default Sheet;
