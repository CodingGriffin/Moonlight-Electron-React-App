import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { any } from '../types/any';

interface SheetItemProps {
  sheet: any;
  onDrop: (droppedSheet: any) => void;
}

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px;
    background: #e0e2fe;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s;
    position: relative;
    color: black;
    margin: 10px;
  }

  .card:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #4bb8ff;
  }

  .card .blob {
    height: 10px;
    width: 75%;
    border-radius: 0 0 30px 30px;
    margin: 0 auto;
    background-color: #4bb8ff;
    visibility: visible;
    transition: all 0.3s;
  }

  .card:hover .blob {
    height: 0;
  }

  .card .img {
    display: flex;
    margin: 30px auto 10px auto;
    width: 70px;
    height: 70px;
    background-color: #4bb8ff;
    border-radius: 50%;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  .card:hover .img {
    width: 100%;
    height: 70%;
    border-radius: 10px 0 0;
    margin: 0 auto;
    background-color: #f0f0f0;
    z-index: 99999;
  }

  .card h2 {
    padding: 15px 10px;
    font-size: 25px;
    transition: all 0.1s;
    z-index: -99;
    line-height: 17px;
  }

  .card span {
    font-size: 18px;
  }

  .card:hover h2 {
    opacity: 0;
    width: 100%;
    position: absolute;
    transition: all 0.5s;
  }

  .card > p {
    opacity: 0;
    transition: all 0.75s;
  }

  .card:hover > p {
    position: absolute;
    bottom: 15px;
    left: 30px;
    opacity: 1;
    transition: all 0.1s;
  }

  .card.drag-over {
    transform: scale(1.05);
    border: 2px dashed #4bb8ff;
  }
`;

function SheetItem({ sheet, onDrop }: SheetItemProps) {
  const navigate = useNavigate();
  const date = new Date(sheet.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const formattedDate = date.toLocaleDateString('en-US', options);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('application/json', JSON.stringify(sheet));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const droppedSheet = JSON.parse(
      e.dataTransfer.getData('application/json'),
    ) as any;
    onDrop(droppedSheet);
  };

  return (
    <StyledWrapper>
      <div
        className="card"
        onClick={() => navigate(`/after/sheet/${sheet._id}`)}
        onKeyDown={(e) =>
          e.key === 'Enter' && navigate(`/after/sheet/${sheet._id}`)
        }
        role="button"
        tabIndex={0}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="blob" />
        <span className="img" />
        <div className="text-2xl font-bold">{sheet.name}</div>
        <p>{formattedDate}</p>
      </div>
    </StyledWrapper>
  );
}

export default SheetItem;
