import BrandSlider from './BrandSlider';
import ImageSlider from './ImageSlider';
import FocusOnSelect from '../Pages/FocusOnSelect';
import SwipeToSlide from './SwipeToSlide';
import LuxurySlider from './LuxurySlider';
import BestSeller from './BestSeller';
import '../index.css';
import Footer from './Footer';

const Home = () => {

    let divStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        justifyContent: 'space-evenly',
        gap: '10px', // Adjust the gap between columns as needed
        padding: '10px' // Adjust the padding as needed
    };
    let divStyle2 = {
        width: '93%',
        padding: '10px',
        margin: '0 auto' // Center the container
    };

    return (
        <>
            <div style={divStyle2}>
                <div>
                    <ImageSlider />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <img style={{ textAlign: 'center', width: '1400px'}} src='https://images-static.nykaa.com/uploads/831ad69a-26b7-40e4-b174-f55eba404009.gif?tr=w-1800,cm-pad_resize' alt='' />
                </div>
                <br />
                <br />
                <div>
                    <img style={{ textAlign: 'center', width: '1400px'}} src='https://images-static.nykaa.com/uploads/ee78dba3-985e-4873-82cb-653f24a8b8a5.gif?tr=w-1800,cm-pad_resize' alt='' />
                </div>

                <div>
                    <div className='text'>
                        <h2>Best-In-Class Sun Care</h2>
                    </div>
                    <div>
                        <img style={{ textAlign: 'center',height:'400px' ,width: '1400px' }} src='https://images-static.nykaa.com/uploads/24dd9259-fb48-4395-a39d-8877c1cdfa10.gif?tr=w-1800,cm-pad_resize' />
                    </div>
                    <div>
                        <BrandSlider />
                    </div>
                </div>

                <div>
                    <div className='text'>
                        <h1>Focus On :</h1>
                        <h2>Today's Standout Labels</h2>
                    </div>

                    <div>
                        <FocusOnSelect />
                    </div>
                    <div>
                        <SwipeToSlide />
                    </div>
                    <div>
                        <LuxurySlider />
                    </div>
                </div>

                <div>
                    <div style={{ textAlign: 'center' }}>
                        <img style={{ width: '1300px', height: '350px' }} src='https://images-static.nykaa.com/uploads/96924b52-a3c3-465a-9f30-b53cbe943e7d.jpg?tr=cm-pad_resize,w-1800' alt='' />
                    </div>
                    <div style={divStyle} className='grid'>

                        <div>
                            <img src='https://images-static.nykaa.com/uploads/7efb5b7c-7f35-4d2a-9e92-25a7dc024102.png?tr=cm-pad_resize,w-300' alt='' />
                        </div>
                        <div>
                            <img src='https://images-static.nykaa.com/uploads/e356d1aa-c30a-45d3-93c6-3070b330e6c2.png?tr=cm-pad_resize,w-300' alt='' />
                        </div>
                        <div>
                            <img src='https://images-static.nykaa.com/uploads/10890608-3ee2-46a0-9e0f-c42fd2690b40.png?tr=cm-pad_resize,w-300' alt='' />
                        </div>
                        <div>
                            <img src='https://images-static.nykaa.com/uploads/8d30fe68-8f0f-4612-83b0-bea2e5b2a41f.png?tr=cm-pad_resize,w-300' alt='' />
                        </div>
                        <div>
                            <img src='https://images-static.nykaa.com/uploads/92029f29-2cef-4d86-8a4f-a1c5613f2758.png?tr=cm-pad_resize,w-300' alt='' />
                        </div>
                        <div>
                            <img src='https://images-static.nykaa.com/uploads/8d30fe68-8f0f-4612-83b0-bea2e5b2a41f.png?tr=cm-pad_resize,w-300' alt='' />
                        </div>

                    </div>
                </div>

                <div>
                    <div className='text'>
                        <h1>Hot List</h1>
                        <p>Nykaa Best Bestsellers</p>
                    </div>
                    <div>
                        <BestSeller />
                    </div>
                </div>

                <div>
                    <div style={{textAlign:'center'}}>
                        <img style={{ width: '1400px'}} src='https://images-static.nykaa.com/uploads/ae176e1d-1036-4c8e-aade-1cafea6a7436.gif' alt='' />
                    </div>
                </div>

                <div style={divStyle} className='grid'>
                    <div>
                        <img src='https://images-static.nykaa.com/uploads/56c5d73a-1df0-458b-a3b7-4f97d14b64b3.jpg?tr=cm-pad_resize,w-300' alt='' />
                        <p>Shower Gels</p>
                    </div>
                    <div>
                        <img src='https://images-static.nykaa.com/uploads/8ed4cdf4-dbeb-42d8-9789-22c691f740eb.jpg?tr=cm-pad_resize,w-300' alt='' />
                        <p>Face wash</p>
                    </div>
                    <div>
                        <img src='https://images-static.nykaa.com/uploads/f5e7f886-ed1c-4637-8c9a-f559f50e615c.jpg?tr=cm-pad_resize,w-300' alt='' />
                        <p>Face Moisturiser</p>
                    </div>
                    <div>
                        <img src='https://images-static.nykaa.com/uploads/638bc51f-fded-4ea4-a764-5e9054b6b13f.jpg?tr=cm-pad_resize,w-300' alt='' />
                        <p>Conditioners</p>
                    </div>
                    <div>
                        <img src='https://images-static.nykaa.com/uploads/dc019837-c113-48d4-ae11-220367a683bb.jpg?tr=cm-pad_resize,w-300' alt='' />
                        <p>Face Moisturiser</p>
                    </div>
                    <div>
                        <img src='https://images-static.nykaa.com/uploads/6e86de37-aae7-4866-b9a7-ab7a3541ebe5.jpg?tr=cm-pad_resize,w-300' alt='' />
                        <p>Shampoos</p>
                    </div>
                </div>
                <div>
                    <div style={{textAlign:'center'}}>
                        <img style={{ width: '1000px', height: '190px' }} src='https://images-static.nykaa.com/uploads/c802253f-4056-42bb-aa92-387bde3b454f.jpg?tr=cm-pad_resize,w-1800' alt='' />
                    </div>
                </div>
                <div>
                    <BestSeller />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default Home;
