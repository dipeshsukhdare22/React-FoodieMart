import React from 'react';
import './Menuitems.css';
import { menu_list } from '../assets/assets';

const Menuitems = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium animi at expedita ut quaerat rem?</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} className='explore-menu-list-item'>
                            <img  src={item.menu_image} alt={item.menu_name} /> {/* Updated alt text */}
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr/>
        </div>
    );
}

export default Menuitems;
