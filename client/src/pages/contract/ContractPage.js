import React from 'react';

export default function ContractPage({ contracts }) {
  

  const {cropName,_id,retailerId,farmerId,farmingMethod,quantity,deliveryAddress,createdAt,status,payment,pricePerUnit} = contracts

  const convertToKg = (weight, weightUnit) => {
    if (weightUnit === 'kg') {
      return weight; // already in kg
    }
    if (weightUnit === 'tons') {
      return weight * 1000; // 1 ton = 1000 kg
    }
    if (weightUnit === 'metric ton') {
      return weight * 1000; // 1 metric ton = 1000 kg
    }
    return weight; // fallback, return as is
  };

  const convertPriceToKg = (price, priceUnit) => {
    if (priceUnit === 'kg') {
      return price; // already in Rs/kg
    }
    if (priceUnit === 'tons') {
      return price / 1000; // Rs/ton to Rs/kg
    }
    if (priceUnit === 'metric ton') {
      return price / 1000; // Rs/metric ton to Rs/kg
    }
    return price; // fallback, return as is
  };

  const weightInKg = convertToKg(quantity.weight, quantity.unit);
  const pricePerKg = convertPriceToKg(pricePerUnit.price, pricePerUnit.unit);

  const calculatedTotalPrice = weightInKg * pricePerKg;

  return (
    <div className="w-full  min-h-screen  h-auto flex justify-center bg-gray-100 py-8">
      <div className="bg-white border font-serif border-gray-200 rounded-lg shadow-lg p-6 w-full sm:w-4/5 lg:w-full">
        {/* Image Section */}
        <div className="flex space-x-4 mb-6">
          <div className="w-1/2 h-40 bg-gray-200 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src="#1234"
              alt="Retailer "
            />
          </div>
          <div className="w-1/2 h-40 bg-gray-200 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src="#123456"
              alt="Farmer "
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-left space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-bold text-green-700">Contract Details</h2>
          </div>

          <div>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Contract ID: </span>{ _id}
              
            </p>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Retailer ID: </span>{retailerId}
            </p>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Farmer ID: </span>{farmerId}
            </p>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Crop Name: </span>{cropName}
            </p>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Farming Method: </span>{farmingMethod}
            </p>
          </div>

          <div >
          <p className="text-gray-700 text-sm m-1 ">
              <span className="font-bold text-green-800">Quantity: </span>{`${quantity.weight}/${quantity.unit}`}
            </p>
            <p className="text-gray-700 text-sm m-1 ">
              <span className="font-bold text-green-800">Price: </span>{`${pricePerUnit.price}Rs/${pricePerUnit.unit}`}
            </p>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Total Amount: </span>{`${calculatedTotalPrice}Rs`}
            </p>
          </div>

          <div>
          <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Deliver Address: </span>{`${deliveryAddress.address},${deliveryAddress.city},${deliveryAddress.state}`}
              deliver address
            </p>

            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Delivery Date: </span>{new Date(createdAt).toLocaleString()}
            </p>
            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Contract Date: </span>{new Date(createdAt).toLocaleString()}
            </p>
          </div>

          <div>
          <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Payment Status: </span>{payment}
            </p>

            <p className="text-gray-700 text-sm m-1">
              <span className="font-bold text-green-800">Contract Status: </span>{status}
            </p>
            
          </div>



        </div>
      </div>
    </div>
  );
}
