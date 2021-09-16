import { useEffect, useContext } from 'react';
import { siteContext, ImageTypes } from '../context/siteContext';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import DisplayGrid from '../components/DisplayGrid';
import Link from 'next/link';

interface HomeProps {
  data: ImageTypes[];
}

const HomePage: React.FC<HomeProps> = ({ data }) => {
  const { setImages } = useContext(siteContext);

  useEffect(() => {
    setImages(data.filter((image) => image.media_type === 'image'));
  }, []);

  return (
    <>
      <header className="header">
        <Link href="/">
          <a>
            <h1 className="header__heading">Spacestagram</h1>
          </a>
        </Link>
        <h2 className="header__subheading">
          Your source for out-of-this-world photos.
        </h2>
      </header>
      <DisplayGrid />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let today = new Date();
  let tenDaysAgo = new Date(today);
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 20);

  const formatDate = (date: Date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  };

  // let todayFormatted = formatDate(today);
  let twentyDaysAgoFormatted = formatDate(tenDaysAgo);

  const api = process.env.NASA_API_KEY;

  const res = await axios.get(
    `https://api.nasa.gov/planetary/apod?start_date=${twentyDaysAgoFormatted}&api_key=${api}`
  );
  const data = res.data;

  return {
    props: { data },
  };
};

export default HomePage;
