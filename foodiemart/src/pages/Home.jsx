import React, { useState } from 'react'
import './Home.css';
import Header from '../components/Header';
import Menuitems from '../components/Menuitems';
import About from '../pages/About';
import Features from '../pages/Features';
import Products from './Products';
// import FoodDisplay from '../components/FoodDisplay';
import ProductSlider from '../components/Productslider';


const Home = () => {
    const [categories, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <About />
            <Features />
            <Products />
            <ProductSlider />
            <Menuitems categories={categories} setCategory={setCategory} />
            {/* <FoodDisplay categories={categories} setCategory={setCategory} /> */}
            
        </div>
    )
}

export default Home