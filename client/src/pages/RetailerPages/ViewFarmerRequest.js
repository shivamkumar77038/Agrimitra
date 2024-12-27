import React from 'react'
import { useEffect,useState,useContext } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import {  useLocation,useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import ViewRequest from './ViewRequest';

export default function ViewFarmerRequest() {
const location = useLocation();
const id = location.state

const naviagte = useNavigate();
const backendurl= process.env.REACT_APP_BACKEND_URL ;



const [request ,setrequest] = useState([]);
const {token} = useContext(Authcontext);


useEffect(()=>{

  if(!token){
    return
  }

async function fectchData(){
try{
 const response = await axios.get(`${backendurl}/retail/getFarmersRequest/${id}`,{
    headers : {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
    }
 }) 
   if(response){
    
    
    setrequest(response.data.bidders); 
   }
   if (response.data.bidders.length === 0 && !toast.isActive('no-requests')) {
           
    toast.warn('No Farmer Request For Proposal' ,{ toastId: 'no-requests' });
    naviagte('/retailer/get_allpropsals');
  }

}catch(error){
    naviagte("/retailer/get_allpropsals")
    if (error.response) {
      console.error('Error Response:', error.response.data);
      toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`,{ toastId: 'no-requests' });
    } else {
      console.error('Error:', error.message);
      toast.error(`Error: ${error.message}`,{ toastId: 'no-requests' });
    }
  
  }

}



fectchData();

},[id,token,naviagte])


  return (
   
   <>
      
   <div className='w-full text-center h-auto flex flex-col '>
    <h1 className='font-serif text-green-900 mt-2 font-lg'> Proposal Id : {id} </h1>
    {
      request.map((requests) => (
        <ViewRequest key={requests._id} proposalid={id} requests={requests} />
      ))
    }
   </div>
   
   </>
   
  )
}
