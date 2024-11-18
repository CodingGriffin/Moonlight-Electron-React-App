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

  return (
    <div className="w-56 h-72 bg-white text-black">
      <div
        className="text-center text-xl p-10 h-48"
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
