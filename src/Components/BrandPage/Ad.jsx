import { Carousel } from 'flowbite-react';

const openLink = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
};

const Ad = () => {
    return (
        <div className='h-[170px] max-w-[728px] m-auto'>
            <Carousel>
                {/* slide1 */}
                <div onClick={() => openLink('https://tawhid-choudhury.github.io/fruits-basket-a3/')} className="hover:cursor-pointer">
                    <img src="https://i.ibb.co/N90mr8Y/fruitsAd.jpg" className='w-full h-full' alt="" />
                </div>

                {/* slide2 */}
                <div onClick={() => openLink('https://gameandtecha9.web.app/')} className="hover:cursor-pointer">
                    <img src="https://i.ibb.co/DDKnbBp/convention-Expo.jpg" className='w-full h-full' alt="" />
                </div>

                {/* slide3 */}
                <div onClick={() => openLink('https://redundant-adjustment.surge.sh/')} className="hover:cursor-pointer">
                    <img src="https://i.ibb.co/RS1byks/donationad.jpg" className='w-full h-full' alt="" />
                </div>
            </Carousel>

        </div>
    );
};

export default Ad;