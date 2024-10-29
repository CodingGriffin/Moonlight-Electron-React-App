import SheetComponent from '../../component/Sheet';
import './style.css';

function Sheet() {
  return (
    <div className="flex flex-col rounded-3xl mx-8 p-10 sheet-bg">
      <div className="flex flex-row justify-between my-5">
        <SheetComponent />
        <SheetComponent />
        <SheetComponent />
        <SheetComponent />
        <SheetComponent />
      </div>
      <div className="flex flex-row justify-between my-5">
        <SheetComponent />
        <SheetComponent />
        <SheetComponent />
        <SheetComponent />
        <SheetComponent />
      </div>
    </div>
  );
}

export default Sheet;
