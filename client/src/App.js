
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Allcrop from './components/AllcropProposals';
import CropViewCard from './pages/cropPage/CropViewCard';
import Allproposal from './components/Allproposal';
import ProposalViewCard from './pages/RetailerProposals/ProposalViewCard';
import AllAppliedCrops from './pages/RetailerPages/AllAppliedCrops';
import LoginRole from './components/LoginRole'
import Login from './pages/farmerPages/Login';
import Signup from './pages/farmerPages/Signup'
import RetailLogin from './pages/RetailerPages/Login';
import Retailsignup from './pages/RetailerPages/Signup';
import RetailerContract from './pages/contract/RetailerContract';
import ViewFarmerRequest from './pages/RetailerPages/ViewFarmerRequest';
import ListinCropDemand from './pages/RetailerPages/ListingCropDemand';
import CropListing from './pages/cropPage/CropListing';
import ViewRequest from './pages/farmerPages/ViewRequest';
import AllListedCrop from './pages/farmerPages/AllListedCrop';
import AllProposals from './pages/RetailerPages/AllProposals';
import Farmercontract from './pages/contract/Farmercontract';
import AppliedProposal from './pages/farmerPages/AppliedProposal';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
      element: <Home/>
      } ,

      {
        path: "/contactUs",
      element: <ContactUs/>
      } ,

      {
        path: "/login",
      element: <LoginRole />
      } ,
// available crop proposal routes
      {
        path: "/Allcrops",
      element: <Allcrop />
          
      } ,
      {
      path: "/Allcrops/:id",
      element:<CropViewCard/>
      },
// available proporal from retailers
      {
        path: "/AllavailableProposal",
      element: <Allproposal/>
      } ,
       
      {
        path: "/viewProposal/:id",
      element: <ProposalViewCard/>
      } ,
// Farmer Routes
      {
        path: "/Farmerlogin",
        element: <Login/>
      } ,
      {
        path: "/Farmersignup",
        element: <Signup/>
      } ,
      
      {
        path: "/farmer/register_crop",
        element: <CropListing/>
      } ,
      {
        path: "/farmer/all_listed_crops",
        element: <AllListedCrop/>
      } ,

      {
        path: "/buyerequests/:id",
        element: <ViewRequest/>
      } ,
      {
        path: "/farmer/contracts",
        element: <Farmercontract/>
      } ,
      {
        path: "/farmer/appliedcontracts",
        element: <AppliedProposal/>
      } ,

    // Retailer Routes
      {
        path: "/Retaillogin",
      element: <RetailLogin/>
      } ,
       
      {
        path: "/Retailsignup",
      element: <Retailsignup/>
      } ,
        
      {
        path: "/retailer/register_crop_demand",
      element: <ListinCropDemand/>
      } ,

      {
        path: "/retailer/get_allpropsals",
      element: <AllProposals/>
      } ,

      {
        path:"/farmerequests/:id",
        element: <ViewFarmerRequest/>

      },
      {
        path:"/retailer/contracts",
        element: <RetailerContract/>

      },

      {
        path:"/retailer/appliedCrops",
        element: <AllAppliedCrops/>

      },



      
    ]
  },
]);



function App() {
  return (
    <>
 <RouterProvider router={router} />

    </>
  );
}

export default App;
