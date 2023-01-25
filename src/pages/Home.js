import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardDatas } from "../data";
const Home = () => {
  const [cards, setCards] = useState(CardDatas);
  console.log(cards);
  return (
    <div>
      <section className="CardSection">
        <div className="Container">
          <div className="Cards">
            {cards.map((card) => {
              const { id, title, FontawsomeIcon } = card;
              return (
                <Link className="learnMore" to={title}>
                  <article key={id}>
                    <i className={FontawsomeIcon}> </i>
                    <h4> {title} </h4>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="cardSec">
        {cards.map((card) => {
          const { id, title, FontawsomeIcon } = card;
          return (
            <article key={id}>
              <i className={FontawsomeIcon}> </i>
              <h3> {title} </h3>
              <Link className="learnMore" to={title}>
                Learn More
              </Link>
            </article>
          );
        })}
      </section> */}
    </div>
  );
};

export default Home;
