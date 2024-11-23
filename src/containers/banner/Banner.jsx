// Banner.js
import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title ">Welcome to Our Restaurant, Experience the taste of gourmet dining in every bite.</h1>
        <button className="banner__button">Oreder Now</button>
      </div>
    </section>
  );
};

export default Banner;
