import { useContext } from 'react';
import { siteContext } from '../context/siteContext';
import Card from '../components/Card';

const DisplayGrid = () => {
  const { images } = useContext(siteContext);

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
