import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

type ProductFormParams = {
  title: string;
  category: string;
  image: string;
  price: number;
  rate: number;
  description: string;
};
const AdminCreateProduct = () => {
    const navigate = useNavigate();
  const [productAdd, setProductAdd] = useState<ProductFormParams>({
    title: "",
    category: "",
    image: "",
    price: 0,
    rate: 0,
    description: "",
  });

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductAdd({ ...productAdd, [event.target.name]: event.target.value });
  };
  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // validate show error
    try {
      await axios.post("/products", productAdd);
      toast.success("Add Product Successfull!");
        navigate("/admin/products");
    } catch (error) {
      toast.error("Login Failed! - " + error);
      console.log(error);
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form onSubmit={handleSubmitForm}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Title
              </label>
              <input
                value={productAdd.title}
                onChange={handleChangeForm}
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product title"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                value={productAdd.image}
                onChange={handleChangeForm}
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product Image"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                value={productAdd.category}
                onChange={handleChangeForm}
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product Category"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                value={productAdd.price}
                onChange={handleChangeForm}
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
              />
            </div>

            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Rate
              </label>
              <input
                value={productAdd.rate}
                onChange={handleChangeForm}
                type="number"
                name="rate"
                id="rate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                value={productAdd.description}
                onChange={handleChangeForm}
                name="description"
                id="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminCreateProduct;
