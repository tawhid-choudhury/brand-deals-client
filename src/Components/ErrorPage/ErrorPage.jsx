
import { AiFillFrown } from 'react-icons/ai';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-9xl pt-10'><AiFillFrown></AiFillFrown></p>

            <h1 className='text-center text-2xl font-bold mb-10'>
                Error!!
            </h1>
            <p className='text-center '>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3 className='mb-10'>404 Page not found</h3>
                </div>
            }
            <Link to={'/'}> <p className='btn btn-accent'>Go Back to Home</p></Link>
        </div>
    );
};

export default ErrorPage;