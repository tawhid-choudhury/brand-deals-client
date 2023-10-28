import { SiNike, SiAdidas, SiPuma, SiNewbalance, SiUnderarmour, SiReebok } from "react-icons/si";
const Cards = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 py-10 px-5 lg:px-10">
            {/* card-1 */}
            <div className="card bg-base-100 shadow-2xl hover:bg-base-300">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">NIKE</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiNike></SiNike></h1>
            </div>

            {/* card-2 */}
            <div className="card  bg-base-100 shadow-2xl hover:bg-base-300">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">ADIDAS</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiAdidas></SiAdidas></h1>
            </div>

            {/* card-3 */}
            <div className="card bg-base-100 shadow-2xl hover:bg-base-300">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">PUMA</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiPuma></SiPuma></h1>
            </div>

            {/* card-3 */}
            <div className="card bg-base-100 shadow-2xl hover:bg-base-300">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">NEW BALANCE</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiNewbalance></SiNewbalance></h1>
            </div>

            {/* card-3 */}
            <div className="card bg-base-100 shadow-2xl hover:bg-base-300">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">UNDER ARMOUR</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiUnderarmour></SiUnderarmour></h1>
            </div>

            {/* card-3 */}
            <div className="card bg-base-100 shadow-2xl hover:bg-base-300">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">REEBOK</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiReebok></SiReebok></h1>
            </div>
        </div>
    );
};

export default Cards;