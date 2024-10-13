import React from 'react';
import Process1 from '../assets/Images/process1.png';
import Process2 from '../assets/Images/process2.png';
import Process3 from '../assets/Images/process3.png';
import Process4 from '../assets/Images/process4.png';
import Process5 from '../assets/Images/process5.png';
import Process6 from '../assets/Images/process6.png';
import img1 from '../assets/Images/about-img.png';
import play from '../assets/Images/play.png';
import './About.css';

const Delivery = () => {
    return (
        <div className="container px-4 py-5 delivery-process">
            <h2 className='heading text-center display-4 mt-4 fw-bold'><span>About Us</span></h2>
            <div className="About">
                <div className="container-fluid">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="About_col1 pt-md-0 pt-5">
                                <img src={img1} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="About_col2 pe-md-5 me-md-5 ps-md-5">
                                <span className="main-span">About</span>
                                <h2 className="main-h2">Food Is An Important Part</h2>
                                <h2 className="main-h2">Of A Balanced Diet</h2>
                                <p className="main-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit assumenda provident corporis temporibus inventore sed at consequatur reiciendis ipsa molestias.</p>
                                <p className="main-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium aliquid fuga officiis quasi vel id accusamus corporis soluta. Amet.</p>
                                <div className="about_col2_btns pt-4">
                                    <button className="btn2" type="button">Learn More </button>
                                    <button className="btn3 mx-2" type="button"> <img src={play} alt="" className='iconbtn' />
                                        Watch Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="col px-5 text-center">
                    <div className="mb-3">
                        <img src={Process1} className='w-50 h-50' alt="Process 1" />
                    </div>
                    <h5>Pick Your Veg</h5>
                    <p>
                        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi.
                    </p>
                </div>
                <div className=" col px-5 text-center">
                    <div className="mb-3">
                        <img src={Process2} className='w-50 h-50' alt="Process 2" />
                    </div>
                    <h5>We Deliver the Bag</h5>
                    <p>
                        Gumbo beet greens corn soko endive gumbo gourd parsley.
                    </p>
                </div>
                <div className=" col px-5 text-center">
                    <div className="mb-3">
                        <img src={Process3} className='w-50 h-50' alt="Process 3" />
                    </div>
                    <h5>You Enjoy Your Veg</h5>
                    <p>
                        Dandelion cucumber earthnut pea peanut soko zucchini.
                    </p>
                </div>
            </div>
            
            <div className="Delivery">
                <div className="container text-center">
                    <div className="row gx-0">
                        <div className="col-md-4">
                            <div className="Delivery_col">
                                <img src={Process4} alt="Working Hours" style={{ width: '24px', height: '24px' }} />
                                <h5>Today 10:00 am - 7:00 pm</h5>
                                <p>Working Hours</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="Delivery_col">
                                <img src={Process5} alt="Get Directions" style={{ width: '24px', height: '24px' }} />
                                <h5>Mumbai 100</h5>
                                <p>Get Directions</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="Delivery_col">
                                <img src={Process6} alt="Call Online" style={{ width: '24px', height: '24px' }} />
                                <h5>+ 30 (063) 833 24 15</h5>
                                <p>Call Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
