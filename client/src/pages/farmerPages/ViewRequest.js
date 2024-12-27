import React from 'react'
import { useEffect,useState,useContext } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import {  useLocation,useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import ViewProposal from './ViewProposal';

export default function ViewRequest() {
const location = useLocation();
const id = location.state
const naviagte = useNavigate();




const [request ,setrequest] = useState([]);

const {token} = useContext(Authcontext);


useEffect(()=>{

  if(!token){
    return
  }

async function fectchData(){
try{
 const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/farmer/getBuyersRequest/${id}`,{
    headers : {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
    }
 }) 
   if(Array.isArray( response.data)){
    
    setrequest(response.data.bidders); 
   }
   if (response.data.bidders.length === 0 && !toast.isActive('no-proposals')) {
           
    toast.warn('No Buying Request For Crop' ,{ toastId: 'no-proposals' });
    naviagte('/farmer/all_listed_crops');
  }

}catch(error){
    if (error.response) {
      console.error('Error Response:', error.response.data);
      toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
    } else {
      console.error('Error:', error.message);
      toast.error(`Error: ${error.message}`);
    }
  
  }

}



fectchData();

},[id,token,naviagte])


  return (
   
   <>
      
   <div className='w-full text-center h-auto flex flex-col '>
    <h1 className='font-serif text-green-900 mt-2 font-lg'> Crop Id : {id} </h1>
    {
      Array.isArray(request) && request.map((bidder) => (
        <ViewProposal key={bidder._id} cropid={id} bidder={bidder} />
      ))
    }
   </div>
   
   </>
   
  )
}
