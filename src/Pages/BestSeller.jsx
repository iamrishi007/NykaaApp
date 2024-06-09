import React, { Component } from "react";
import Slider from "react-slick";
import '../ImageSlider.css'
function BestSeller() {
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
          <div className="slider-container">
               <Slider {...settings}>
                    <div>
                         <img src="https://images-static.nykaa.com/uploads/2a6b31cb-5fe7-40d3-a123-c510cd422bc8.jpg?tr=cm-pad_resize,w-450" alt="" />
                         <p>Ordinary Niacinamide</p>
                         <p>MRP:₹550</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/3/d35416c885190821020.jpg" alt="" />
                         <p>PIXI Glow Tonic Exfoliating </p>
                         <p>MRP:₹500</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8904245711351_1.jpg" alt="" />
                         <p> Niacinamide</p>
                         <p>MRP:₹100</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/2/d2f525bNYKAC00000651_1.jpg" alt="" />
                         <p>Nykaa All Day Matte </p>
                         <p>MRP:₹550</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/1/3/138bc4f4902430917957_2002241.jpg?tr=w-344,h-344,cm-pad_resize" alt="" />
                         <p>Ordinary Niacinamide</p>
                         <p>MRP:₹550</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/uploads/2a6b31cb-5fe7-40d3-a123-c510cd422bc8.jpg?tr=cm-pad_resize,w-450" alt="" />
                         <p>Niacinamide</p>
                         <p>MRP:₹550</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/1/3/138bc4f4902430917957_2002241.jpg?tr=w-344,h-344,cm-pad_resize" alt="" />
                         <p>Olay Retinol 24</p>
                         <p>MRP:₹1299</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/d/6d6054dDOTKE00000013_1220324.jpg" alt="" />
                         <p>Ordinary Niacinamide</p>
                         <p>MRP:₹550</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/2/f/2f20bedTHECI00000083_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="" />
                         <p>Barrier Support Serum</p>
                         <p>MRP:1800</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/b/8/b861cdd887167485495_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="" />
                         <p>Estee Lauder Advanced Night </p>
                         <p>MRP:₹4300</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/9/5/95b010e192333042809_1.jpg" alt="" />
                         <p>Advanced Night </p>
                         <p>MRP:₹4400</p>
                    </div>
                    <div>
                         <img src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/2/226e9aePHIAA00000024_PAR%20(1).jpg" alt="" />
                         <p>Philips BHS336/00 Kerashine</p>
                         <p>MRP:₹1599</p>
                    </div>

               </Slider>
          </div>
     );
}

export default BestSeller;
