
import Slider from "react-slick";
import '../BrandSlider.css'



function BrandSlider() {
     var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
                         infinite: true,
                         dots: true
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         initialSlide: 2
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               }
          ]
     };
     return (
          <div className="slider-container">
               <Slider {...settings}>
                    <div className='slider'>
                         <img src='https://images-static.nykaa.com/uploads/3a0e1874-da44-43dc-8f7a-e6e91d63aa7d.jpg?tr=w-360,cm-pad_resize' alt='' />
                       
                    </div>
                    <div>
                         <img src='https://images-static.nykaa.com/uploads/5601ff05-cbe5-4db0-b02d-9c3fd5dada9c.jpg?tr=w-360,cm-pad_resize' alt='' />
                         
                    </div>
                    <div>
                         <img src='https://images-static.nykaa.com/uploads/2fc32209-5c27-4e0c-8de1-5f39422dfa2d.jpg?tr=w-360,cm-pad_resize' alt='' />
                        
                    </div>
                    <div>
                         <img src='https://images-static.nykaa.com/uploads/2fd09e89-8960-4163-8f67-b2d1ac9245d5.jpg?tr=w-360,cm-pad_resize' alt='' />
                         
                    </div>
                    <div>
                         <img src='https://images-static.nykaa.com/uploads/a531796d-a9b2-440e-a80b-05e671896874.jpg?tr=w-360,cm-pad_resize' alt='' />
                       
                    </div>
                    <div>
                         <img src='https://images-static.nykaa.com/uploads/3a0e1874-da44-43dc-8f7a-e6e91d63aa7d.jpg?tr=w-360,cm-pad_resize' alt='' />
                        
                    </div>
                    <div>
                         <img src='https://images-static.nykaa.com/uploads/dfb069c2-50e6-41b0-bf74-364b8a9dfa82.jpg?tr=w-360,cm-pad_resize' alt='' />
                     
                    </div>
                   
               </Slider>
          </div>
     );
}

export default BrandSlider;
