import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import DisplayGrid from '../components/DisplayGrid';
import Link from 'next/link';

export interface ImageTypes {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url: string;
}

interface HomeProps {
  data: ImageTypes[];
}

const HomePage: React.FC<HomeProps> = ({ data }) => {
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
      <DisplayGrid
        images={data.filter((image) => image.media_type === 'image').reverse()}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let today = new Date();
  let thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const formatDate = (date: Date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  };

  let thirtyDaysAgoFormatted = formatDate(thirtyDaysAgo);

  const api = process.env.NASA_API_KEY;

  const res = await axios.get(
    `https://api.nasa.gov/planetary/apod?start_date=${thirtyDaysAgoFormatted}&api_key=${api}`
  );
  const data = res.data;

  return {
    props: { data },
  };
};

export default HomePage;
