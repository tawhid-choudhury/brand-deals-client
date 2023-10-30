import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CartItems from "./CartItems";
import swal from "sweetalert";

const Cart = () => {
    const { user } = useContext(AuthContext)
    const [emailFiltered, setEmailFiltered] = useState([]);

    const handleEmailFilter = () => {
        fetch(`https://assignment-10-server-jym3wwvau-tawhid-tataris-projects.vercel.app/carts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setEmailFiltered(data)
            })
    }
    useEffect(() => {
        handleEmailFilter();
    }, []);

    // console.log(emailFiltered);

    const handleDelete = (cartId) => {
        console.log(cartId);
        fetch(`https://assignment-10-server-jym3wwvau-tawhid-tataris-projects.vercel.app/carts/${cartId}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remainingItems = emailFiltered.filter(item => item._id !== cartId);
                    setEmailFiltered(remainingItems);
                    swal("deleted")
                }
            })
    }

    return (
        <div className="py-10 px-5 lg:px-10">
            <h1 className="text-3xl font-semibold text-center">Your Cart</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden sm:block">Image</th>
                            <th>Name</th>
                            <th className="hidden lg:block">Brand</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            emailFiltered.map(item => <CartItems key={item._id} item={item} handleDelete={handleDelete}></CartItems>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Cart;