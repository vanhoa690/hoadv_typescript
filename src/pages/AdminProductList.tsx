import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminProductList = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProductList(data);
    } catch (error) {
      console.log(error);
      toast.error("Get Product List Failed - " + error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    fetchProducts();
  }, []);

  const handleRemoveProduct = async (id: string) => {
    try {
      // confirm dialog
      if (window.confirm("Do you really remove product?")) {
        await axios.delete(`/products/${id}`);
        fetchProducts();
        toast.success("Delete Successfull - " + id);
      }
    } catch (error) {
      toast.error("Delete Failed - " + error);
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Product List
      </h1>
      <Link to={"/admin/products/create"}>
        <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Product
        </button>
      </Link>
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
            {productList.map((product, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title}
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$ {product.price}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link to={`/admin/products/edit/${product._id}`}>
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => handleRemoveProduct(product._id)}
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
  );
};

export default AdminProductList;
