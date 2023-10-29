import PropTypes from 'prop-types';

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = ({ product }) => {
    console.log(product);
    const full_stars = product.rating;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= full_stars) {
            stars.push(<AiFillStar key={i} />);
        } else {
            stars.push(<AiOutlineStar key={i} />);
        }
    }
    return (
        <div>
            <div className="card card-compact max-w-sm h-[600px] bg-base-100 shadow-xl">
                <figure className="h-full bg-white"><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="flex text-xl items-center">Rating: &nbsp; {stars}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Type: {product.type}</p>
                    <div className="flex items-center">
                        <p className="font-bold text-3xl my-5">{product.price}$</p>
                        <button className="btn btn-accent btn-outline">Details</button>
                    </div>
                    <button className="btn btn-warning btn-outline">Update</button>
                </div>
            </div>
        </div>
    );
};


Product.propTypes = {
    product: PropTypes.object,
};

export default Product;