// import { useState } from "react";
import swal from "sweetalert";

const AddProduct = () => {

    // const [errorText, setErrorText] = useState("")

    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        if (!name) {
            swal("Warning", "Enter name please", "warning")
            return;
        }
        const brand = form.brand.value;
        if (!brand) {
            swal("Warning", "select brand please", "warning")
            return;
        }
        const rating = parseInt(form.rating.value);
        if (!rating) {
            swal("Warning", "select rating please", "warning")
            return;
        }
        const type = form.type.value;
        if (!type) {
            swal("Warning", "Enter type please", "warning")
            return;
        }
        const price = form.price.value;
        if (!price) {
            swal("Warning", "Enter price please", "warning")
            return;
        }
        const shortDes = form.shortDes.value;
        if (!shortDes) {
            swal("Warning", "Enter shortDes please", "warning")
            return;
        }
        const img = form.img.value;
        if (!img) {
            swal("Warning", "Enter image URL please", "warning")
            return;
        }
        const newProduct = { name, brand, rating, type, price, shortDes, img }

        console.log(newProduct);

        fetch('https://assignment-10-api.vercel.app/products', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("Complete!", `ADDED ${name}!`, "success")
            }).catch((err) => {
                swal("Error:", `${err}`, "error");
            })

    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form className="w-full max-w-7xl" onSubmit={handleAdd}>
                <div className="grid md:grid-cols-2 gap-7">
                    <div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                        </div>


                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Brand Name:</span>
                            </label>
                            <select name="brand" className="select select-bordered w-full" defaultValue={""}>
                                <option disabled value="">
                                    Select from below
                                </option>
                                <option value="nike">Nike</option>
                                <option value="adidas">Adidas</option>
                                <option value="puma">Puma</option>
                                <option value="newBalance">New Balance</option>
                                <option value="underArmour">Under Armour</option>
                                <option value="reebok">Reebok</option>
                                <option value="fila">Fila</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" placeholder="Type" name="type" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name="price" className="input input-bordered w-full" />
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" placeholder="Short Description" name="shortDes" className="input input-bordered w-full" />
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div className="rating rating-lg">
                                <input type="radio" name="rating" value="1" className="mask mask-star" />
                                <input type="radio" name="rating" value="2" className="mask mask-star" />
                                <input type="radio" name="rating" value="3" className="mask mask-star" />
                                <input type="radio" name="rating" value="4" className="mask mask-star" />
                                <input type="radio" name="rating" value="5" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" placeholder="Image URL" name="img" className="input input-bordered w-full" />
                </div>

                <input type="submit" value="Add" className="btn btn-block  btn-accent my-7 " />

            </form>
        </div>
    );
};

export default AddProduct;