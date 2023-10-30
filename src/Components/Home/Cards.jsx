import { SiNike, SiAdidas, SiPuma, SiNewbalance, SiUnderarmour, SiReebok, SiFila } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Cards = () => {
    const nav = useNavigate();
    const handleGoToBrandpage = (brandName) => {
        nav(`/products/${brandName}`)
    }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 py-10 px-5 lg:px-10">
            {/* card-1 */}
            <div onClick={() => handleGoToBrandpage("nike")} className="card  bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">NIKE</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiNike></SiNike></h1>
            </div>

            {/* card-2 */}
            <div onClick={() => handleGoToBrandpage("adidas")} className="card  bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">ADIDAS</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiAdidas></SiAdidas></h1>
            </div>

            {/* card-3 */}
            <div onClick={() => handleGoToBrandpage("puma")} className="card  bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">PUMA</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiPuma></SiPuma></h1>
            </div>

            {/* card-4 */}
            <div onClick={() => handleGoToBrandpage("newBalance")} className="card  bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">NEW BALANCE</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiNewbalance></SiNewbalance></h1>
            </div>

            {/* card-5 */}
            <div onClick={() => handleGoToBrandpage("underArmour")} className="card  bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">UNDER ARMOUR</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiUnderarmour></SiUnderarmour></h1>
            </div>

            {/* card-6 */}
            <div onClick={() => handleGoToBrandpage("reebok")} className="card  bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">REEBOK</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiReebok></SiReebok></h1>
            </div>

            {/* card-7 */}
            <div onClick={() => handleGoToBrandpage("fila")} className="card col-start-2 bg-base-100 shadow-2xl hover:bg-base-300 hover:cursor-pointer">
                <div className="card-body items-center  text-center">
                    <h2 className="card-title">FILA</h2>
                </div>
                <h1 className="flex justify-center text-9xl py-10"><SiFila></SiFila></h1>
            </div>
        </div>
    );
};

export default Cards;