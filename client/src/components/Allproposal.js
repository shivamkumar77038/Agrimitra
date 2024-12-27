import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Allproposalviewcard from '../pages/RetailerProposals/Allproposalviewcard';

export default function Allproposals() {
  const [proposal, setProposal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/retailProposal/getAllavailableProposal`);
        
        if (Array.isArray(response.data)) {
          setProposal(response.data);
          
          if (response.data.length === 0 && !toast.isActive('no-proposals')) {
            toast.warn('Currently, there are no Proposals.', { toastId: 'no-proposals' });
            navigate('/');
          }
        } else {
          throw new Error('Invalid data format received.');
        }
      } catch (error) {
        if (error.response && error.response.data) {
          toast.warning(error.response.data.message || 'Request failed', { toastId: 'request-failed' });
        } else {
          toast.error('Internal server error.', { toastId: 'server-error' });
        }
        console.error('Error fetching proposals:', error);
        navigate('/');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className='w-full min-h-screen h-auto bg-green-200'>
      <div className='w-full h-auto grid grid-cols-1 justify-center place-items-stretch sm:grid-cols-2 lg:grid-cols-3'>
        {Array.isArray(proposal) && proposal.map((proposal) => (
          <Allproposalviewcard key={proposal._id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
}
