import React from "react";
import "./ImgContainer.css";

function ImgContainer(props) {
  return (
    <React.Fragment>
      <div className="aboutImg">
        <figure className="aboutImgPicWrap">
          <img src={props.img} alt="Travel" />
        </figure>
        <div className="aboutImgInfo">
          <h5 className="aboutImgText">{props.imageText}</h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImgContainer;
