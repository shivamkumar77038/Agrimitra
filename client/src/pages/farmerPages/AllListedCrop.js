import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import CropCard from '../cropPage/CropCard';
import axios from 'axios';

export default function AllListedCrop() {
  const navigate = useNavigate();
  const [Allcrop, setallcrop] = useState([]);
  const { token } = useContext(Authcontext);

  const handleDelete = (id)=>{
    setallcrop((prevProposals) => prevProposals.filter((prop) => prop._id !== id));
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/crop/getListedCrops`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (Array.isArray(response.data)) {
          setallcrop(response.data);
        }

        if (response.data.length === 0 && !toast.isActive('no-proposals')) {
           
          toast.warn('You dont have Any CropProposals' ,{ toastId: 'no-proposals' });
          navigate('/');
        }
      } catch (error) {
        // Check if error.response exists and handle the error accordingly
        if (error.response) {
          // Handle different status codes here
          if (error.response.status === 400) {
            navigate('/');
            toast.warning(error.response.data.message || 'Bad Request');
          } else {
            toast.warning(error.response.data.message || 'Request failed');
          }
        } else {
          toast.warning('Network error or no response from server');
        }
        console.log(error);
        navigate('/');
      }
    };

    if (token) {
      fetchdata();
    }
  }, [token, navigate]); // Add navigate to dependencies to avoid potential issues with hook behavior

  return (
    <div className='w-full min-h-screen h-auto'>
      <div className='w-full h-auto grid grid-cols-1 justify-center place-items-stretch sm:grid-cols-2 lg:grid-cols-3'>
        {Array.isArray(Allcrop) && Allcrop.map((crop) => (
          <CropCard key={crop._id} ondelete={handleDelete} crops={crop}  />
        ))}
      </div>
    </div>
  );
}
