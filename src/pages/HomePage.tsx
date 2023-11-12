import axios from 'axios';
import { useEffect } from 'react';

const HomePage = () => {
  // function fetchProducts () {}

  const fetchProducts = () => {
    const data = axios.get('https://fakestoreapi.com/products');
    console.log({ data });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>Homepage</div>;
};

export default HomePage;
