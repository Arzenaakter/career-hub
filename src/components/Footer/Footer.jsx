import React from 'react';
import footerLogos from '../../assets/Icons/logos.png';


const Footer = () => {
    return (
        <div className='bg-black text-white '>
          <div className=' w-[80%] mx-auto  py-10 grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-start'>
            <div className='flex flex-col gap-4 '>
                <h4 className='text-2xl '>CareerHub</h4>
                <p >There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <img src={footerLogos} alt="" className='w-20 m-auto md:m-0' />
            </div>

            <div className='flex flex-col gap-4'>
                <h2 className=' text-xl'>Company</h2>
                <p >About Us</p>
                <p >Work</p>
                <p >Latest News</p>
                <p >Career</p>
                


            </div>

            <div className='flex flex-col gap-4 '>
            <h2 className=' text-xl'>Product</h2>
                <p >Prototype</p>
                <p >Plans & Pricing</p>
                <p >Customers</p>
                <p >Intregations</p>

            </div>

            <div className='flex flex-col gap-4'>
            <h2 className=' text-xl'>Support</h2>
                <p >Help desk</p>
                <p >sales</p>
                <p >Becomes a partners</p>
                <p >Developer</p>

            </div>

            <div className='flex flex-col gap-4'>
            <h2 className=' text-xl'>Contact</h2>
                <p >524 Broadway , NYC</p>
                <p >+1 777 - 978 - 5570</p>

            </div>
           
          </div>
          <hr  className='w-[80%] mx-auto '/>
         
          <div className='w-[80%] mx-auto flex text-[#757575] justify-between mt-6 pb-10'>
            <p>@2023 TechHub. All Rights Reserved</p>
            <p>Powered by TechHub</p>
          </div>
            
        </div>
    );
};

export default Footer;