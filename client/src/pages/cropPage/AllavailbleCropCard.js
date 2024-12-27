import React from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { Authcontext } from '../../Context/Contextapi';
// import { toast } from 'react-toastify';


export default function AllavailableCropCard({ crops }) {


  const navigate = useNavigate();
  const { cropName, quantity, pricePerunit, harvestedDate, createdAt, _id,farmLocation,farmingMethod } = crops;
  const viewcrop =(id)=>{
    if (id) {
      navigate(`/Allcrops/${id}`,{state:crops});
    } else {
      console.error('Invalid crop ID');
    }
  }



  return (
    <div className="bg-green-300 border font-serif  border-green-200 rounded-lg m-4  shadow-lg p-4 w-auto sm:w-3/4">
     
      <div className="text-center ">
        <h2 className="text-xl font-bold  text-green-900">{cropName.toUpperCase()}</h2>
        <p className="text-green-900 text-lg mt-1 font-semibold">Farm Address: {farmLocation.city},{farmLocation.state}</p> 
        <p className="text-green-900 text-sm mt-1 font-bold">Available Quantity: {quantity.weight} {quantity.unit}</p>
        <p className="text-green-800 text-lg font-bold mt-2">Price: {pricePerunit.price} Rs/{pricePerunit.unit}</p>
        <p className="text-green-800 text-sm font-bold mt-2">Farming Method: {farmingMethod}</p>
        <p className="text-green-900 font-bold text-sm mt-1">Harvested Date: {new Date(harvestedDate).toLocaleDateString()}</p>
        <p className="text-green-800 text-sm font-semibold mt-1">Listed Date: {new Date(createdAt).toLocaleDateString()}</p>
        <button onClick={()=>viewcrop(_id)} className="bg-red-500 w-1/2 text-white text-lg hover:bg-orange-900 mt-1">
          View 
        </button>
      </div>
      
    </div>
  );
}
