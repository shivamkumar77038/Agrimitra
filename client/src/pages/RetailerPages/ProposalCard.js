import React, { useContext } from 'react';
import axios from "axios";
import { Authcontext } from '../../Context/Contextapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function CropCard({ crops,onDelete }) {
  
  const naviagte = useNavigate();
  const { cropName, quantity, desiredPrice,deliverydate, createdAt, _id,deliverylocation,status, } = crops;
  const {token} = useContext(Authcontext);
 
// delete proposal function
const deleteProposal = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/retail/delete/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Add token if needed
        'Content-Type': 'application/json',
      },
    });

   toast.success("Proposal Deleted")
    onDelete(id); 
    return ;

  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.data);
      toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
    } else {
      console.error('Error:', error.message);
      toast.error(`Error: ${error.message}`);
    }
  }
};

// view farmer requests function

const Viewrequest = (id)=>{
  naviagte(`/farmerequests/${id}`,{state:id});

}  


 


  

  return (
    <div className="bg-green-300 border border-green-200 rounded-lg m-4 hover:scale-105 shadow-lg p-4 w-auto sm:w-3/4">
      <div className="flex justify-center space-x-2 mb-4">
      
      </div>
      <div className="text-center ">
        <h2 className="text-xl font-bold text-green-900">{cropName.toUpperCase()}</h2>
        <p className="text-green-900 text-sm mt-1 font-semibold">Required Quantity: {quantity.weight} {quantity.unit}</p>
        <p className="text-green-800 text-lg font-bold mt-2">Desired Price: {desiredPrice.price}Rs/{desiredPrice.unit}</p>
        <p className="text-green-900 font-semibold text-sm mt-1">Desired Delivery Date: {new Date(deliverydate).toLocaleDateString()}</p>
        <p className="text-green-800 font-semibold text-sm mt-1">Delivery Location: {deliverylocation.city},{deliverylocation.State}</p>
        <p className="text-green-800 font-semibold text-sm mt-1">Proposal Status: {status}</p>
        <p className="text-green-800 text-sm mt-1">Listed Date: {new Date(createdAt).toLocaleDateString()}</p>
        <button onClick={()=>Viewrequest(_id)} className="bg-red-500 w-2/5 text-white text-sm h-8 rounded-sm hover:bg-orange-900 m-2">
          Farmer Requests 
        </button>

        <button onClick={()=> deleteProposal(_id)} className="bg-red-500 w-2/5 h-8 rounded-sm text-white text-base hover:bg-orange-900 mt-1">
          Delete
        </button>
      </div>
    </div>
  );
}
