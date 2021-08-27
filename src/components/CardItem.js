import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, text, label, path, btnText, slogan }) {
  return (
    <>
      <li className="cards__item">
        <figure
          className="cards__photo-item cards__photo-item--front"
          data-category={label}
        >
          <img src={src} alt="Epic destination" className="cards__photo" />
          <figcaption className="cards__caption">{text}</figcaption>
        </figure>
        <div className="cards__photo-item cards__photo-item--back">
          <span className="cards__slogan">{slogan}</span>
          <Link className="btn btn--medium" to={path}>
            {btnText}
          </Link>
        </div>
      </li>
    </>
  );
}

export default CardItem;
