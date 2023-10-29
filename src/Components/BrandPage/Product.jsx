import PropTypes from 'prop-types';

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const nav = useNavigate();
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

    const handleDetails = (id) => {
        nav(`/productDetail/${id}`)
    }

    return (
        <div>
            <div className="card card-compact max-w-sm h-[700px] bg-base-100 shadow-xl">
                <figure className="w-full h-full bg-white rounded-lg"><img className='rounded-t-xl w-full ' src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="flex text-xl items-center">Rating: &nbsp; {stars}</p>
                    <p>Brand: <span className='capitalize'>{product.brand}</span> </p>
                    <p>Type: {product.type}</p>
                    <div className="flex items-center">
                        <p className="font-bold text-3xl my-5">{product.price}$</p>
                        <button className="btn btn-warning">Update</button>
                    </div>
                    <button onClick={() => handleDetails(product._id)} className="btn btn-accent">Details</button>
                </div>
            </div>
        </div>
    );
};


Product.propTypes = {
    product: PropTypes.object,
};

export default Product;