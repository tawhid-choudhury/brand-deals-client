import { Carousel } from "flowbite-react";

const Banner = () => {
    return (
        <div>
            <div className='h-[50vh]'>
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/qCjpFYT/banner1.jpg)' }}>
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-5xl">
                                    <h1 className="mb-5 text-5xl lg:text-6xl font-bold  text-white">The Best Brand Deals For Fashion and Apparel</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/MZhKK7b/banner2.jpg)' }}>
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