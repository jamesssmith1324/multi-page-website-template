import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cardsItem">
        <Link
          className="cardsItemLink"
          to={{ pathname: props.path, state: props.data }}>
          <figure className="cardsItemPicWrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="cardsItemImg" />
          </figure>
          <div className="cardsItemInfo">
            <h5 className="cardsItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
