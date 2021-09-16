import React from 'react';
import Card from '../components/Card';
import { ImageTypes } from '../pages/index';

interface DisplayGridProps {
  images: ImageTypes[];
}

const DisplayGrid: React.FC<DisplayGridProps> = ({ images }) => {
  const displayImages = images?.map((image) => {
    return (
      <Card
        key={image.title}
        url={image.url}
        title={image.title}
        summary={image.explanation}
        date={image.date}
      />
    );
  });

  return <main className="display-grid">{displayImages}</main>;
};

export default DisplayGrid;
