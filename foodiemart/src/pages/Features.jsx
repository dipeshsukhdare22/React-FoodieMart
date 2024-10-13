import React from 'react'
import Delivery1 from '../assets/Images/delivery1.png';
import Delivery2 from '../assets/Images/delivery2.png';
import Delivery3 from '../assets/Images/delivery3.png';
import './About.css';

const features = () => {
    return (
        <div>
            <section className='features container px-4 py-5' id='features'>
                <h2 className='heading text-center display-4 mt-4 fw-bold'>Our <span>Features</span></h2>
                <div className='box-container row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3'>
                    <div className='box mb-3'>
                        <img src={Delivery1} className='w-50 h-50' alt="Delivery 1" />
                        <h3>Picks the meals</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ullam incidunt, sit dolor neque adipisci.</p>
                        <button className='btn'>Read More</button>
                    </div>
                    <div className='box mb-3'>
                        <img src={Delivery2} className='w-50 h-50' alt="Delivery 1" />
                        <h3>Choose how often</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ullam incidunt, sit dolor neque adipisci.</p>
                        <button className='btn'>Read More</button>
                    </div>
                    <div className='box mb-3'>
                        <img src={Delivery3} className='w-50 h-50' alt="Delivery 1" />
                        <h3>Fastest Delivery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ullam incidunt, sit dolor neque adipisci.</p>
                        <button className='btn'>Read More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default features