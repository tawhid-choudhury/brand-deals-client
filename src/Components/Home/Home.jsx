import Banner from "./Banner";
import Cards from "./Cards";
import Contact from "./Contact";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl text-center py-9">Explore our partner brands</h1>
            <Cards></Cards>
            <h1 className="text-5xl text-center py-9">Contact Us</h1>
            <Contact></Contact>
            <h1 className="text-5xl text-center py-9">Meet the team</h1>
            <Team></Team>
        </div>
    );
};

export default Home;