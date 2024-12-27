import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import AppliedProposalCard from './AppliedProposalCard';

import axios from 'axios';

export default function AppliedProposal() {
  const navigate = useNavigate();
  const [allsubmitproposal, setallproposal] = useState([]);
  
  const { token } = useContext(Authcontext);


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/farmer/getallAplliedProposals`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
           
        if (response.data && response.data.length === 0) {
          toast.warn('You have not applied to any Proposal', { toastId: 'no-applied' });
          navigate('/');
        } else if (response.data) {
          setallproposal(response.data.proposaldetail);
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
  }, [token, navigate]); 

  return (
    <>
  <div className='w-full min-h-screen h-auto bg-gradient-to-r from-green-300 to-green-400'>
      <div className='w-full h-auto grid grid-cols-1 justify-center place-items-stretch sm:grid-cols-2 lg:grid-cols-3'>
      {

Array.isArray(allsubmitproposal) && allsubmitproposal.map((requests)=>(
                <AppliedProposalCard key={requests._id} requests={requests}/>
        ))
      }
      </div>
    </div>
    
    
    
    </>
    
  );
}

