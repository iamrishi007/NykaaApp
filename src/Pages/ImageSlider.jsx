import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../ImageSlider.css';  // Ensure this line is present to import the updated CSS

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://images-static.nykaa.com/uploads/205c8f02-bce5-44c5-8782-0de832ea2407.gif?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/91981ec6-6418-4633-aafe-6fedb12085ad/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/27cbc2a2-adbc-417f-b467-b89632857940/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/cf10b879-ee24-4251-a5cc-966563d3e2f7/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/7f39c326-fbe8-4e42-a7ef-df55330ad246/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/c2c71289-13e4-4c87-9619-301521f5b950/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/c2c71289-13e4-4c87-9619-301521f5b950/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/ac1f173e-c91d-4ba7-bbf3-c14c573bedfd/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/cb520c3b-a865-4e1e-befa-61bd3e351632/default.jpg?tr=w-900,cm-pad_resize" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
