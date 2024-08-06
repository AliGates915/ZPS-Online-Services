// components/HomePage/ServicePage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import  Shadi_Card_Services from './Shadi_Card_Services'
import Flex_Services from './Flex_Services';
import Business_Card_Services from './Business_Card_Services';
import _3DWallpaper_Services from './_3DWallpaper_Services';
import Social_Services from './Social_Services';
import Logo_Services from './Logo_Services';
import Letter_Pad_Services from './Letter_Pad_Services';
import Memo_Services from './Memo_Services';
import Shield_Award_Services from './Shield_Award_Services';

const ServicePage: React.FC = () => {
  type ServicePageParams = {
    id: string;
  };
  
  const { id } = useParams<ServicePageParams>();
  
  return (
    <div className="mt-14 bg-cyan-50 text-black h-screen w-full p-4">
      <h1 className='flex justify-center'>Service Details for : {id}</h1>
      {  
      id === "Flex Printing" &&
        <Flex_Services/>
      }
      {  
      id === "Shadi Card" &&
        <Shadi_Card_Services/>
      }
      {  
      id === "Business Card" &&
        <Business_Card_Services/>
      }
      {  
      id === "3D-Wallpaper" &&
        <_3DWallpaper_Services/>
      }
      {  
      id === "Social Poster" &&
        <Social_Services/>
      }
      {  
      id === "Logo Design" &&
        <Logo_Services/>
      }
      {  
      id === "Letter Pad" &&
        <Letter_Pad_Services/>
      }
      {  
      id === "Memo" &&
        <Memo_Services/>
      }
      {  
      id === "Shield Award" &&
        <Shield_Award_Services/>
      }
      
      
    </div>
  );
};

export default ServicePage;