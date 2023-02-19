import React, { useState } from "react";
import MediaData from "../AllData/MediaData.json";
import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";
const Media = () => {
  const [model, setModel] = useState(false);
  const [temppicture, setTemppicture] = useState("");
  const getImg = (picture) => {
    setTemppicture(picture);
    setModel(true);
  };
  return (
    <div>
      <h2>মানিকগঞ্জ গ্যালারী</h2>
      <div className={model ? "model open" : "model"}>
        <img src={temppicture} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <h3>This is Gallery page</h3>
      <div className="gallery">
        {MediaData &&
          MediaData.map((imgData) => {
            return (
              <div className="imageDesign" key={imgData.id} onClick={() => getImg(imgData.picture)}>
                <img src={imgData.picture} />
                <h4>{imgData.descp}</h4>
              </div>
            );
          })}
      </div>

      {/* <section className="MediaCardSection">
        <div className="MediaContainer">
          <div className="Cards">
            <Link className="linkBtn" to="ভিডিও">
              <article>
                <i className="fa-solid fa-clapperboard"> </i>
                <h4>ভিডিও</h4>
              </article>
            </Link>
            <Link className="linkBtn">
              <article>
                <i className="fa-solid fa-photo-film"> </i>
                <h4>পিকচার</h4>
              </article>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Media;
