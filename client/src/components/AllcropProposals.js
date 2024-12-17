import React from 'react'
import { useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import AllavailableCropCard from '../pages/cropPage/AllavailbleCropCard';

export default function AllcropProposals() {
  
  const[crops,setcrops] = useState([]);
  const navigate = useNavigate();



  useEffect(()=>{ 
    async function fetchdata() {
      try{

        const response =  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/crop/getAllavailableCrops`);
            if(response){
                setcrops(response.data);
                
            }
            if (response.data.length === 0 && !toast.isActive('no-proposals')) {
              navigate('/');
              toast.warn('Crops are not Available' ,{ toastId: 'no-proposals' });
             
            }
      }catch(error){
        if(error.response){
          if(error.response.status===400 && !toast.isActive('no-proposals')){
            navigate("/");
            toast.error(error.response.data.message || "BAd Request",{ toastId: 'no-proposals' });
            console.log("error from all availablecrop",error)
            
          }else {
            toast.warning(error.response.data.message || 'Request failed',{ toastId: 'no-proposals' });
            
          }
        }else{
          toast.error("Internal server Error",{ toastId: 'no-proposals' })
          
        }
      
        console.log("error from crop",error);
        navigate("/");
      }
    }
    fetchdata();
  },[navigate])

  return (
    <>
     <div className='w-full min-h-screen h-auto'>
      <div className='w-full h-auto grid grid-cols-1 justify-center place-items-stretch sm:grid-cols-2 lg:grid-cols-3'>
      {crops.map((crop) => (
          <AllavailableCropCard crops={crop} key={crop._id} />
        ))}
      </div>
    </div>

    </>
  )
}
