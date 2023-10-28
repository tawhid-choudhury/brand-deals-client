import Banner from "./Banner";
import Cards from "./Cards";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-3xl text-center py-9">Explore our partner brands</h1>
            <Cards></Cards>
        </div>
    );
};

export default Home;