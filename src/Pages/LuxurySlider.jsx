import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../ImageSlider.css';  // Ensure this line is present to import the updated CSS

function LuxurySlider() {
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
                         <img src="https://images-static.nykaa.com/uploads/ce89d39c-b116-42bb-92ba-e3cf058ba6f1.png?tr=cm-pad_resize,w-900" alt="" />
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/uploads/5f7465bc-538f-4905-bc73-63d8509c704d.jpg?tr=cm-pad_resize,w-900" alt="" />
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/uploads/2745242a-30e2-4daf-b67f-85f95778f4c7.jpg?tr=cm-pad_resize,w-900" alt="" />
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/uploads/92aea9d5-cf84-493d-94a2-494587bcbd9c.jpg?tr=cm-pad_resize,w-900" alt="" />
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/uploads/4ad2b93f-80f6-4b53-baf0-da08fff40e70.jpg?tr=cm-pad_resize,w-900" alt="" />
                    </div>

               </Slider>
          </div>
     );
}

export default LuxurySlider;
