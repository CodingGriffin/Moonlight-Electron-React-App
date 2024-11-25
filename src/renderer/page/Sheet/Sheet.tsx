import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import SheetComponent from '../../component/Sheet';
import Header from '../../component/Header';

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
    <div>
      <Header title={"Recent Sheets"}/>
      <div className="flex flex-col gap-3 rounded-3xl lg:mx-8 p-10">
        {/* <ul ref={parent}>
          {tapes.map((tape) => (
            <li className="cassette" data-label={tape} key={tape}>
              {tape}
            </li>
          ))}
        </ul> */}
        <div className="flex flex-row">
          {result?.map((item: any) => {
            return <SheetComponent sheet={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sheet;
