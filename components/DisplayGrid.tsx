import { useContext } from 'react';
import { siteContext, ImageTypes } from '../context/siteContext';
import Card from '../components/Card';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';

const DisplayGrid = () => {
  const { images } = useContext(siteContext);

  const displayImages = images?.map((image) => {
    return (
      <Card
        url={image.url}
        title={image.title}
        summary={image.explanation}
        date={image.date}
      />
    );
  });

  console.log(images);
  return <main className="display-grid">{displayImages}</main>;
};

export default DisplayGrid;
