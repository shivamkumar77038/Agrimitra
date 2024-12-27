import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import ContractPage from './ContractPage';
import axios from 'axios';

export default function Farmercontract() {
  const navigate = useNavigate();
  const [Allcontract, setcontracts] = useState([]);
  const { token } = useContext(Authcontext);

 

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/farmer/getContracts`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (Array.isArray(response.data)) {
           
          setcontracts(response.data);
        }

        if (response.data.length === 0 && !toast.isActive('no-proposals')) {
           
          toast.warn('You dont have Any active Contracts' ,{ toastId: 'no-contract' });
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
        {Array.isArray(Allcontract) &&  Allcontract.map((contracts) => (
          <ContractPage key={contracts._id} contracts={contracts}  />
        ))}
      </div>
    </div>
  );
}
