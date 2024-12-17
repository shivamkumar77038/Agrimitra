import React from 'react'



export default function AppliedCropCard({ requests }) {
  
  
  const { cropName, quantity,farmerName,harvestedDate,farmingMethod,pricePerunit,farmLocation,_id } = requests;
  





  

  return (
    <div className="bg-green-300 border font-serif border-green-200 rounded-lg m-4  shadow-lg p-4 w-auto sm:w-3/4">
      <div className="flex justify-center space-x-2 mb-4">
       
      </div>
      <div className="text-center ">
        <h2 className="text-xl font-bold  text-green-900">Proposal Id : {_id}</h2>
        <p className="text-base font-bold  text-green-800">Name: {cropName.toUpperCase()}</p>
        <p className="text-green-900 text-sm mt-1 font-semibold">Farmer Name: {farmerName}</p>
        <p className="text-green-800 text-sm mt-1 font-semibold">Quantity: {quantity.weight} {quantity.unit}</p>
        <p className="text-green-900 text-sm font-bold mt-2">Price: {pricePerunit.price} Rs/{pricePerunit.unit}</p>
        <p className="text-green-800 text-sm font-bold mt-2">Farming Method: {farmingMethod}</p>
        <p className="text-green-900 text-sm font-bold mt-2">Farm Address: {`${farmLocation.adrress}, ${farmLocation.city}, ${farmLocation.State}`}</p>
        <p className="text-green-800 font-semibold text-base mt-1">Harvested Date: {new Date(harvestedDate).toLocaleDateString()}</p>
        
        


      </div>
    </div>
  );
}
