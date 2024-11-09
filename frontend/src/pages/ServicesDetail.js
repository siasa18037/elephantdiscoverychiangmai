import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import '../styles/ServicesDetail.css';
import ServicesDetailHead from '../components/servicesDetail/ServicesDetailHead';
import ServicesDetailPackage from '../components/servicesDetail/ServicesDetailPackage';
import ServicesDetailDocument from '../components/servicesDetail/ServicesDetailDocument';
import BACKEND_URL from '../config';
import NotFound from '../pages/NotFound';

const ServicesDetail = () => {
  const { nameproduct } = useParams();
  const [product, setProduct] = useState(null);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchStats = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/data/product`);
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false); 
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  useEffect(() => {
    if (productData.length > 0) {
      const foundProduct = productData.find((item) => item.name === nameproduct);
      setProduct(foundProduct);
    }
  }, [nameproduct, productData]);

  if (loading) { 
    return <div className="loading_2">Loading...</div>;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className='ServicesDetail'>
      <ServicesDetailHead data={product} />
      <ServicesDetailPackage data={product} />
      <ServicesDetailDocument data={product}/>
    </div>
  );
};

export default ServicesDetail;
