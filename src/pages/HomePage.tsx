import axios from 'axios';
import { useEffect, useState } from 'react';

type Product = {
    title: string
}
const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProductList(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log('result', productList);

  return (
    <div>
      {productList.map((product, index) => (
        <div key={index}>{product.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
