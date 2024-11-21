import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import SheetComponent from '../../component/Sheet';
import './style.css';

interface SheetProps {
  result: any; // Adjust according to your data structure
}

function Sheet({ result }: SheetProps) {
  const [parent, tapes] = useDragAndDrop<HTMLUListElement, string>([
    'Depeche Mode',
    'Duran Duran',
    'Pet Shop Boys',
    'Kraftwerk',
    'Tears for Fears',
    'Spandau Ballet',
  ]);

  return (
    <div className="flex flex-col rounded-3xl mx-8 p-10 sheet-bg">
      {/* <ul ref={parent}>
        {tapes.map((tape) => (
          <li className="cassette" data-label={tape} key={tape}>
            {tape}
          </li>
        ))}
      </ul> */}
      <div className="flex flex-row justify-between my-5">
        {result?.map((item: any) => {
          return <SheetComponent sheet={item} />;
        })}
      </div>
    </div>
  );
}

export default Sheet;
