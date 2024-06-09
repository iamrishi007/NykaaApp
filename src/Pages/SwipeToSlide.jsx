
import Slider from "react-slick";

function SwipeToSlide() {
     const settings = {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 5,
          swipeToSlide: true,
          afterChange: function (index) {
               console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
               );
          }
     };
     return (
          <>
               <div>
                    <div style={{ textAlign: 'center' }}>
                         <img style={{ width: '1400px', height: '160px' }} src="https://images-static.nykaa.com/uploads/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg?tr=cm-pad_resize,w-1800" alt="" />
                    </div>

                    <div className="slider-container">
                         <Slider {...settings}>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/80b9ca03-8e75-43be-8538-bb053eeaf2cc.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/463b338f-b18b-412a-a2f6-4735b566f1f3.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/fbb7dcdd-8320-4a48-a3bc-d868afa07336.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/f34a3f6b-ce72-4169-892f-4f43e8582143.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/d0c0fb93-8e0c-4094-9eb7-1268d69e80d7.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/a4e15880-1c7e-49f6-bd26-47e287056680.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/780cb137-7555-46ba-aa9f-e9533b216b46.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/6dab596f-bea4-4e89-9753-bfd695c341e4.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/bf717669-4aa9-46a7-9966-04e9fb897279.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>
                              <div>
                                   <img src="https://images-static.nykaa.com/uploads/1abeccda-e5d8-4ce0-927d-6abb44977587.jpg?tr=cm-pad_resize,w-300" alt="" />
                              </div>


                         </Slider>
                    </div>
               </div>
          </>
     );
}

export default SwipeToSlide;
