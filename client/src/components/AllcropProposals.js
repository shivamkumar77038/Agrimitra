import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AllavailableCropCard from '../pages/cropPage/AllavailbleCropCard';

export default function AllcropProposals() {
  const [crops, setCrops] = useState([]);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    async function fetchData() {
          
      try {
        const response = await axios.get(`${backendUrl}/crop/getAllavailableCrops`);
        if (Array.isArray(response.data)) {
          setCrops(response.data);
        }
        if (Array.isArray(response.data) && response.data.length === 0 && !toast.isActive('no-proposals')) {
          navigate('/');
          toast.warn('Crops are not Available', { toastId: 'no-proposals' });
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400 && !toast.isActive('bad-request')) {
            navigate('/');
            toast.error(error.response.data.message || 'Bad Request', { toastId: 'bad-request' });
          } else {
            toast.warning(error.response.data.message || 'Request failed', { toastId: 'request-failed' });
          }
        } else {
          toast.error('Internal server error', { toastId: 'internal-error' });
        }
        console.error('Error from crop:', error);
        navigate('/');
      }
    }
    fetchData();
  }, [navigate]);

  return (
    <div className="w-full min-h-screen h-auto bg-green-200">
      <div className="w-full h-auto grid grid-cols-1 justify-center place-items-stretch sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(crops) &&
          crops.map((crops) => <AllavailableCropCard crops={crops} key={crops._id} />)}
      </div>
    </div>
  );
}
