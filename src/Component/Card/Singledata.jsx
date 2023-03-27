import React from 'react';
import { BsCalendarDateFill } from 'react-icons/bs';
import { RiFolderInfoFill } from 'react-icons/ri';

const Singledata = ({item,handledata}) => {
    const {id,image,features,name,published_in}=item
    return (
    <div className="card w-[500px] bg-base-100 shadow-xl">
  <figure><img className='h-[300px]' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className='text-[17px] font-bold text-[#2c9094]'>Features</h1>
    {features.map((pra,index)=>(
        <p>{index+1}. {pra}</p>
    ))}
    <hr className='border-2 border-indigo-600'/>
    <div className="text-[27px] font-bold text-[#a92e88]">{name}</div> 
    <div className="flex justify-between">
      <div className="text-[19px] flex items-center"><BsCalendarDateFill/>&nbsp;{published_in}</div>
      <div className="text-[19px] cursor-pointer">
        <label onClick={handledata} htmlFor="my-modal-3" className='cursor-pointer'><RiFolderInfoFill/></label>
    </div>
    </div>
  </div>

</div>
    );
};

export default Singledata;