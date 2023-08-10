import PictureCard from "./PictureCard";
import "../css/GalleryCSS.css";
import { useSelector } from "react-redux";
import ICardPicture from "../Interfaces/ICardPicture";

const Gallery = () => {
  const pictures = useSelector((state) => state.pictures.value);
  console.log(pictures);
  return (
    <div className="gallery">
      {pictures.map((picture: ICardPicture, index: number) => {
        return <PictureCard key={index} picture={picture} />;
      })}
    </div>
  );
};

export default Gallery;
