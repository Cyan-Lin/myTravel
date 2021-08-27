import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div>
      <section className="section-cards">
        <h2 className="heading-secondary">
          Check out these EPIC Destinations!
        </h2>
        <div className="cards__container">
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
              btnText="Check for more"
              slogan="Awaken To A Different World"
            />
            <CardItem
              src="images/img-11.jpg"
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
              btnText="Check for more"
              slogan="Awaken To A Different World"
            />
            <CardItem
              src="images/img-12.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
              btnText="Check for more"
              slogan="Awaken To A Different World"
            />
            <CardItem
              src="images/img-13.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/services"
              btnText="Check for more"
              slogan="Awaken To A Different World"
            />
            <CardItem
              src="images/img-14.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services"
              btnText="Check for more"
              slogan="Awaken To A Different World"
            />
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Cards;
