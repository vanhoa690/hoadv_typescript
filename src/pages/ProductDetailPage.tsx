import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  // call API
  
  return <div>ProductDetailPage {productId}</div>;
};

export default ProductDetailPage;
