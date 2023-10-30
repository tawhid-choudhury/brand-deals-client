import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CartItems = ({ item, handleDelete }) => {
    const [itemDetails, setItemDetails] = useState([]);


    const handleItemFetch = () => {
        fetch(`https://assignment-10-api.vercel.app/productDetail/${item.productId}`)
            .then(res => res.json())
            .then(data => {
                setItemDetails(data);
            })
    }
    useEffect(() => {
        handleItemFetch();
    }, []);
    // console.log(itemDetails);


    return (
        <tr>
            <td className='hidden sm:table-cell'>
                <div className="avatar">
                    <div className="w-8 lg:w-24 rounded">
                        <img src={itemDetails.img} />
                    </div>
                </div>
            </td>
            <td className='font-bold'>{itemDetails.name}</td>
            <td className='font-bold hidden lg:table-cell capitalize'>{itemDetails.brand}</td>
            <td className='font-bold'>{itemDetails.price}$</td>
            <td><button onClick={() => handleDelete(item._id)} className="btn btn-error"><RxCross1 /></button></td>
        </tr>
    );
};
CartItems.propTypes = {
    item: PropTypes.object,
    handleDelete: PropTypes.func,
};

export default CartItems;