import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from "./img/_n01.jpg";
import slideImg2 from "./img/_n02.jpg";
import slideImg3 from "./img/_n03.jpg";

function Slider() {
  return (
    <Carousel>
      <div>
        <img src={slideImg1} alt="" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={slideImg2} alt="" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={slideImg3} alt="" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
}

export default Slider;
