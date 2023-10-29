import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';
import Ad from './Ad';

const BrandPage = () => {
    const products = useLoaderData();
    const { brand } = useParams();
    console.log();
    return (
        <div className='py-10 px-5 lg:px-10'>
            <div>
                <Ad></Ad>
            </div>
            <h1 className='text-center capitalize text-3xl p-10'>{brand}</h1>

            <h3>Showing all <span className='capitalize'>{brand}</span> products:</h3>
            <div className='flex justify-center'>
                <div className='flex flex-wrap gap-10 justify-center items-center my-10'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandPage;