import React from 'react';
import {  useNavigate } from 'react-router-dom';


export default function Allproposalviewcard({ proposal }) {
 
  const { cropName, quantity, desiredPrice,deliverydate, createdAt, _id,deliverylocation,retailerName } = proposal;
  const navigate = useNavigate();
 const ViewCropProposal = (id)=>{
     navigate(`/viewProposal/${id}`,{state:proposal});
 }



  return (
    <div className="bg-green-300 border font-serif border-green-200 rounded-lg m-4 hover:scale-105 shadow-lg p-4 w-auto sm:w-3/4">
      <div className="flex justify-center space-x-2 mb-4">
      
      </div>
      <div className="text-center ">
        <h2 className="text-xl font-bold text-green-900">{cropName.toUpperCase()}</h2>
        <p className="text-green-900 text-sm mt-1 font-bold">Name:  {retailerName}</p>
        <p className="text-green-900 text-sm mt-1 font-bold">Required Quantity: {quantity.weight} {quantity.unit}</p>
        <p className="text-green-800 text-lg font-bold mt-2">Desired Price: {desiredPrice.price}Rs/{desiredPrice.unit}</p>
        <p className="text-green-900 font-bold text-sm mt-1">Desired Delivery Date: {new Date(deliverydate).toLocaleDateString()}</p>
        <p className="text-green-800 font-bold text-sm mt-1">Delivery Location: {deliverylocation.city},{deliverylocation.State}</p>
        <p className="text-green-800 text-sm mt-1">Listed Date: {new Date(createdAt).toLocaleDateString()}</p>
        <button onClick={()=>{ViewCropProposal(_id)}} className="bg-red-500 w-1/2 text-white text-lg hover:bg-orange-900 mt-1">
          view
        </button>
      </div>
    </div>
  );
}
