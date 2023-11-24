import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

const AdminProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setProductList(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const handleRemoveProduct = async (id: number) => {
        console.log(id);
        // alert(`"Hello! I am an alert box!!" ${id}`);
        const { data } = await axios.delete(`https://fakestoreapi.com/products/${id}`)
        console.log(data);
        setProductList(productList.filter(product => product.id !== id))
        // fetchProducts();
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((productItem, index) => (<tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {productItem.title}
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$ {productItem.price}</td>
                            <td className="px-6 py-4">
                                <div className='flex flex-row gap-2'>
                                    <button
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleRemoveProduct(productItem.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>

                            </td>
                        </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AdminProductList