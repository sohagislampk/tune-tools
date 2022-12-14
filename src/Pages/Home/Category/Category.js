

import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';

const Category = () => {
    const products = useLoaderData();
    const { name } = useParams();

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-8'>All {name} Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 my-4 mx-8 justify-between lg:mx-8'>
                {
                    products.length ?
                        <>
                            {
                                products.map(product =>
                                    <Product Product
                                        key={product._id}
                                        product={product}
                                    ></Product>
                                )
                            }
                        </> :
                        <p className='text-center text-secondary'>No Products Availble in this Category</p>
                }
            </div >
        </div >
    );
};

export default Category;