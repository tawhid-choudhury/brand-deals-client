import { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetail = () => {
    const { user } = useContext(AuthContext)
    const product = useLoaderData();
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
        <div className="py-10 px-5 lg:px-10">
            <div className="flex flex-col justify-between lg:flex-row gap-10">
                <div className="lg:max-w-[40%]">
                    <img src={product.img} alt="" className="w-full rounded-xl" />
                </div>
                <div className="lg:max-w-[50%]">
                    <h1 className="text-3xl font-semibold">{product.name}</h1>
                    <p className="flex text-3xl items-center py-4  text-warning">{stars}</p>
                    <p className="my-10">{product.shortDes}</p>
                    <p className="p-4 font-semibold text-2xl border-2 rounded-lg my-3">Brand: <span className='capitalize'>{product.brand}</span> </p>
                    <p className="p-4 font-semibold text-2xl border-2 rounded-lg my-3">Type: {product.type}</p>
                    <p className="p-4 font-semibold text-2xl border-2 rounded-lg my-3">Price: {product.price}$</p>
                    <p className="mt-10">Viewing as {user.displayName || user.email}</p>
                    <button className="btn btn-warning mt-5 btn-block">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;