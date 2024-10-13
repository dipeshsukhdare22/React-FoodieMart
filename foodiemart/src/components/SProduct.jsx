import React from "react";

const SProduct = ({ Image, Description }) => {
    return (
        <div class="card shadow-sm">
            <img src={Image} alt="" style={{ height: "200px" }} />
            <div class="card-body">
                <p>{Description}</p>
                <button className='btn btn-primary'>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default SProduct;
