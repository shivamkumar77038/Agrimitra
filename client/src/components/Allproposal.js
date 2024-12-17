import React from 'react'
import { useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import Allproposalviewcard from '../pages/RetailerProposals/Allproposalviewcard.js';

export default function Allproposals() {
  
  const[proposal,setproposal] = useState([]);
  const navigate = useNavigate();





  useEffect(()=>{ 
    async function fetchdata() {
      try{

        const response =  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/retailProposal/getAllavailableProposal`);
            if(response){
                setproposal(response.data);
                
                
            }
            if (response.data.length === 0 && !toast.isActive('no-proposals')) {
             
              toast.warn('Currently, there are no Proposals.' ,{ toastId: 'no-proposals' });
              navigate('/');
            }
      }catch(error){
        if(error.response){
         
            toast.warning(error.response.data.message || 'Request failed',{ toastId: 'no-proposals1' });
  
        }else{
          toast.error("Internal server Error",{ toastId: 'no-proposals1' })
        }
  
        console.log("error from allproposal file in component",error);
        navigate("/");
      }
    }
    fetchdata();
  },[navigate])

  return (
    <>
     <div className='w-full min-h-screen h-auto'>
      <div className='w-full h-auto grid grid-cols-1 justify-center place-items-stretch sm:grid-cols-2 lg:grid-cols-3'>
      {
        proposal.map((proposal)=>(
                <Allproposalviewcard key={proposal._id} proposal={proposal}/>
        ))
      }
      </div>
    </div>

    </>
  )
}

