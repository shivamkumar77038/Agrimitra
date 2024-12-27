import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/Contextapi';
import axios from 'axios';

export default function ViewRequest({ requests, proposalid }) {
  const id = proposalid;
  const { name, gmail, _id ,phoneNo ,farmLocation ,farmingMethod } = requests;
  const backendurl= process.env.REACT_APP_BACKEND_URL ;
  const { token } = useContext(Authcontext);
  const navigate = useNavigate();

  const data = {
    farmerId: _id,
    cropProposal : id,
  };

  const AcceptProposal = async (id) => {
    try {
      const response = await axios.post(`${backendurl}/retail/signeContract/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) {
        toast.success(response.data.message);
        navigate('/retailer/get_allpropsals');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error Response:', error.response.data);
        toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`,{ toastId: 'no-requests1' });
      } else {
        console.error('Error:', error.message);
        toast.error(`Error: ${error.message}`,{ toastId: 'no-requests1' });
      }
      navigate('/retailer/get_allpropsals');
    }
  };

  return (
    <div className="w-full h-auto font-serif flex justify-center">
      <div className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 border border-green-300 rounded-lg m-4 shadow-lg p-6 w-4/5 sm:w-3/4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-4">Farmer Details</h2>
          <div className="space-y-2">
            <p className="text-green-900 text-sm ">
              <span className="font-extrabold text-white">Name:</span > {name}
            </p>
            <p className="text-green-900 text-sm sm:text-base">
              <span className="font-bold text-white">Farmer ID:</span> {_id}
            </p>
            <p className="text-green-900 text-sm sm:text-base">
              <span className="font-bold text-white">Phone:</span> {phoneNo}
            </p>
            <p className="text-green-900 text-sm sm:text-base">
              <span className="font-bold text-white">Email:</span> {gmail}
            </p>
            <p className="text-green-900 text-sm sm:text-base">
              <span className="font-bold text-white"> Farming Method:</span> {farmingMethod}
            </p>
            <p className="text-green-900 text-sm sm:text-base">
              <span className="font-bold text-white">Address:</span> {farmLocation.address}, {farmLocation.city}, {farmLocation.State}
            </p>
          </div>
          <div className="mt-6 flex justify-around">
            <button
              onClick={() => AcceptProposal(id)}
              className="bg-green-500 w-2/5 text-white text-sm sm:text-base h-10 rounded-md hover:bg-green-600 transition-all duration-300"
            >
              Accept
            </button>
            <button
              className="bg-red-500 w-2/5 text-white text-sm sm:text-base h-10 rounded-md hover:bg-red-600 transition-all duration-300"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
