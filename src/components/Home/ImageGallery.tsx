import { Gallery } from "react-grid-gallery";
import { galleryImage } from "../../data/galleryData";

const images = galleryImage.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  )
}));
const ImageGallery = () => {
  return (
    <div className="container">
      <h3 className="image-gallery-heading">Happy Customers</h3>

      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
};

export default ImageGallery;
