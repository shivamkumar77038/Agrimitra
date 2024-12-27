import React, { useContext } from 'react'
import axios from "axios";
import { Authcontext } from '../../Context/Contextapi';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

export default function CropCard({ crops,ondelete }) {
  const navigate = useNavigate();
 
  const { cropName, quantity, pricePerunit, harvestedDate, createdAt, _id } = crops;
  const {token} = useContext(Authcontext);

const Viewrequest = (id)=>{
  navigate(`/buyerequests/${id}`,{state:id});

}  


const DeleteCrop = async(id)=>{
try{
     await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/farmer/delete/${id}`,{
      headers : {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      }
     })

     toast.success("Crop Deleted")
     ondelete(id); 
     return ;


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
  

  return (
    <div className="bg-green-300 border font-serif border-green-200 rounded-lg m-4  shadow-lg p-4 w-auto sm:w-3/4">
      <div className="flex justify-center space-x-2 mb-4">
       
      </div>
      <div className="text-center ">
        <h2 className="text-xl font-bold  text-green-900">{cropName.toUpperCase()}</h2>
        <p className="text-green-900 text-sm mt-1 font-semibold">Quantity: {quantity.weight} {quantity.unit}</p>
        <p className="text-green-800 text-lg font-bold mt-2">Price: {pricePerunit.price} Rs/{pricePerunit.unit}</p>
        <p className="text-green-900 font-semibold text-sm mt-1">Harvested Date: {new Date(harvestedDate).toLocaleDateString()}</p>
        <p className="text-green-800 text-sm mt-1">Listed Date: {new Date(createdAt).toLocaleDateString()}</p>
        <button onClick={()=>Viewrequest(_id)} className="bg-red-500 w-2/5 text-white text-sm h-8 rounded-sm hover:bg-orange-900 m-2">
          Buyer Requests 
        </button>

        <button onClick={()=>DeleteCrop(_id)} className="bg-red-500 w-2/5 m-2 h-8 rounded-sm text-white text-lg hover:bg-orange-900 mt-1">
          Delete 
        </button>

      </div>
    </div>
  );
}
