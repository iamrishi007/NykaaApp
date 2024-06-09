
import Slider from "react-slick";

function FocusOnSelect() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2.9,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://images-static.nykaa.com/creatives/8ceb9915-c4d9-4ea9-97e5-e22846cea3da/default.jpg?tr=cm-pad_resize,w-900"  alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/e128fb17-7c17-4c4c-8238-15c21c1217fe/default.jpg?tr=cm-pad_resize,w-900"  alt="" />
        </div>
        <div>
          <img src="https://images-static.nykaa.com/creatives/8d49fb48-f2f6-423c-89e9-4cee9ee4e1ed/default.png?tr=cm-pad_resize,w-900"  alt="" />
        </div>
      

      </Slider>
    </div>
  );
}

export default FocusOnSelect;
