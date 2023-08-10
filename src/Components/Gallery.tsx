import { useState } from "react";
import ICardPicture from "../Interfaces/ICardPicture";
import data from "../../public/data.json";
import PictureCard from "./PictureCard";
import "../css/GalleryCSS.css";

const Gallery = () => {
  const [pictures] = useState<ICardPicture[]>(data);
  return (
    <div className="gallery">
      {pictures.map((picture, index) => {
        return <PictureCard key={index} picture={picture} />;
      })}
    </div>
  );
};

export default Gallery;
