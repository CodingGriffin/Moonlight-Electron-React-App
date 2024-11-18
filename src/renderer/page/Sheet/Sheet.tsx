import SheetComponent from '../../component/Sheet';
import './style.css';

interface SheetProps {
  result: any; // Adjust according to your data structure
}

function Sheet({ result }: SheetProps) {
  return (
    <div className="flex flex-col rounded-3xl mx-8 p-10 sheet-bg">
      <div className="flex flex-row justify-between my-5">
        {result?.map((item: any) => {
          return <SheetComponent sheet={item} />;
        })}
      </div>
    </div>
  );
}

export default Sheet;
