import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { any } from '../types/any';
import SheetItem from './SheetItem';

interface SheetGridProps {
  initialSheets: any[];
  onSheetsUpdate: (targetId: string, droppedId: string) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 20px;
  padding: 20px;
`;

function SheetGrid({ initialSheets, onSheetsUpdate }: SheetGridProps) {
  const [sheets, setSheets] = useState<any[]>(initialSheets);
  useEffect(() => {
    setSheets(initialSheets);
    // You can perform side effects here if needed
  }, [initialSheets]);
  const handleDrop = (targetId: string, droppedSheet: any) => {
    if (targetId === droppedSheet._id) return;

    setSheets((prevSheets) => {
      const updatedSheets = prevSheets.filter(
        (sheet) => sheet._id !== droppedSheet._id,
      );
      const targetIndex = updatedSheets.findIndex(
        (sheet) => sheet._id === targetId,
      );

      if (targetIndex !== -1) {
        // Merge the dropped sheet's result into the target sheet
        const targetSheet = updatedSheets[targetIndex];
        const mergedSheet = {
          ...targetSheet,
          name: `${targetSheet.name}`,
        };
        updatedSheets[targetIndex] = mergedSheet;
      }

      onSheetsUpdate(targetId, droppedSheet._id);
      return updatedSheets;
    });
  };

  return (
    <Grid>
      {sheets.map((sheet) => (
        <SheetItem
          key={sheet._id}
          sheet={sheet}
          onDrop={(droppedSheet: any) => handleDrop(sheet._id, droppedSheet)}
        />
      ))}
    </Grid>
  );
}

export default SheetGrid;
