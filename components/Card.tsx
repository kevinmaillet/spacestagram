import { useState } from 'react';
import Image from 'next/image';
import { IoPlanet } from '@react-icons/all-files/io5/IoPlanet';
import { IoPlanetOutline } from '@react-icons/all-files/io5/IoPlanetOutline';

interface CardProps {
  url: string;
  title: string;
  summary: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ url, title, summary, date }) => {
  const [like, setLike] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleEvent = () => {
    setLike(!like);
    if (!like) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 1.5 * 1000);
    }
  };

  return (
    <article className="card">
      <div className="card__image-container">
        <a href={url} target="_blank" rel="noreferrer">
          <Image
            src={url}
            alt={title}
            layout="fill"
            placeholder="blur"
            blurDataURL={url}
            objectFit="cover"
            className="card__image"
          />
        </a>
      </div>
      <h2 className="card__title">{title}</h2>
      <h3 className="card__date">{date}</h3>
      <p className="card__text">{summary}</p>
      <div className="card__like-container">
        <button
          className="card__button"
          onClick={handleEvent}
          aria-labelledby="like-button"
        >
          <span id="like-button" hidden>
            Like
          </span>
          {like ? (
            <IoPlanet size={25} aria-hidden="true" focusable="false" />
          ) : (
            <IoPlanetOutline size={25} aria-hidden="true" focusable="false" />
          )}
        </button>
        <p
          className={`card__animation ${
            animate ? `card__animation--animate` : ``
          }`}
        >
          Liked!
        </p>
      </div>
    </article>
  );
};

export default Card;
