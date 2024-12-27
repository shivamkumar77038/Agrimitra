import React, { useContext, useEffect,useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import ProposalCard from './ProposalCard'


export default function All_Proposals() {

const navigate = useNavigate();
const [proposal,setproposal] = useState([]);
const backendurl= process.env.REACT_APP_BACKEND_URL ;



const {token} = useContext(Authcontext);

useEffect(()=>{
 
    const fetchdata = async () => {
        try {
          const response = await axios.get(`${backendurl}/retail/getAllCropProposals`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          
          if (response) {
            setproposal(response.data);
          }

          if (response.data.length === 0 && !toast.isActive('no-proposals')) {
           
            toast.warn('You dont have Active Proposals' ,{ toastId: 'no-proposals' });
            navigate('/');
          }
        
        } catch (error) {
          navigate('/');
          
          if (error.response) {
           
            if (error.response.status === 400) {
              
              toast.warning(error.response.data.message || 'Bad Request');
            } else {
              toast.warning(error.response.data.message || 'Request failed');
            }
          } else {
            toast.warning('Network error or server error');
          }
          console.log(error);
         
        }
      };
  
      if (token) {
        fetchdata();
      }



},[token,navigate])

const handleDelete = (id) => {
  setproposal((prevProposals) => prevProposals.filter((prop) => prop._id !== id));
};


  return (
    <>
    <div className='w-full min-h-screen h-auto'>
      
        <div className='w-full h-auto grid grid-cols-1 place-items-stretch sm:grid-cols-2 lg:grid-cols-3'>
        {proposal.map((prop) => (
          <ProposalCard key={prop._id} onDelete={handleDelete} crops={prop}  />
        ))}
      </div> 
      
    </div>
    </>
  )
}
