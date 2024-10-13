import React from 'react';
import Menuitems from '../components/Menuitems';
import Start from '../assets/Images/rating_starts.png';
import Product1 from '../assets/Images/product1.jpg';
import Product2 from '../assets/Images/product2.jpg';
import Product3 from '../assets/Images/product3.jpg';
import Product4 from '../assets/Images/product4.jpg';

const Products = () => {
    const products = [
        { id: 1, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product1 },
        { id: 2, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product2 },
        { id: 3, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product3 },
        { id: 4, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product4 },

        { id: 5, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product1 },
        { id: 6, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product2 },
        { id: 7, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product3 },
        { id: 8, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product4 },
        
        { id: 9, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product1 },
        { id: 10, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product2 },
        { id: 11, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product3 },
        { id: 12, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product4 },

        { id: 13, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product1 },
        { id: 14, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product2 },
        { id: 15, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product3 },
        { id: 16, name: 'Fresh Orange', price: '$4.99/-', imgSrc: Product4 },
    ];

    return (
        <>
          <section className="container my-5" id="products">
                <h1 className="heading text-center mb-4 mt-4 fw-bold">
                    Our <span className="text-dark">Products</span>
                </h1>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                            <div className="card text-center product-card">
                                <img src={product.imgSrc} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <div className="mb-2">
                                        <img src={Start} alt="Rating Stars" />
                                    </div>
                                    <button className="btn btn-primary product-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                <Menuitems/>
                </div>
            </section>
        </>
    );
};

export default Products;
