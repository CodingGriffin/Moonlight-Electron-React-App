import { useNavigate } from 'react-router-dom';
import expand from '../../../assets/images/sheet/expand.svg';
import bin from '../../../assets/images/sheet/bin.svg';

interface SheetComponentProps {
  sheet: any;
}

function SheetComponent({ sheet }: SheetComponentProps) {
  const navigate = useNavigate();
  const goToDetail = (id: any) => {
    navigate(`/after/sheet/${id}`);
  };
  console.log("sheet====>", sheet);

  return (
    <div className="bg-white text-black border border-gray-400 sm:m-2 w-[10rem] h-[12rem] xl:m-3 xl:w-[13rem] xl:h-[18rem] ">
      <div
        className="text-center sm:text-lg p-5 h-[7rem] xl:text-xl xl:p-10 xl:h-48"
        onClick={() => {
          // eslint-disable-next-line no-underscore-dangle
          goToDetail(sheet._id);
        }}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        {sheet.name}
      </div>
      <div className="text-center h-12 p-3 border-t border-grey">
        Oct 14, 2014
      </div>
      <div className="flex flex-row justify-center">
        <img className="mr-2" src={expand} alt="expand" />
        <img className="ml-2" src={bin} alt="bin" />
      </div>
    </div>
  );
}

export default SheetComponent;
