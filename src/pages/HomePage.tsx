import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { ProductCard } from '../components/elements/ProductCard';

const HomePage = () => {
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

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {productList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
