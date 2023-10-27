import { Carousel } from "flowbite-react";

const Banner = () => {
    return (
        <div>
            <div className='h-screen'>
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg)' }}>
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-5xl">
                                    <h1 className="mb-5 text-5xl lg:text-6xl font-bold  text-white">The Best Brand Deals For Fashion and Appreal</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/5cTJk8Q/expo.jpg)' }}>
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-5xl">
                                    <h1 className="mb-5 text-5xl lg:text-6xl font-bold  text-white"> Top Brands top Deals </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    );
};

export default Banner;