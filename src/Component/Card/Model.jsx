import React from 'react';
import { BsCalendarDateFill } from 'react-icons/bs';
import { RiFolderInfoFill } from 'react-icons/ri';

const Model = ({modeldata}) => {
    const {id,image,features,name,published_in,description}=modeldata
    console.log(modeldata)
    return (
        <>
 {/* The button to open modal */}
{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
{/* set all data */}
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl h-[400px] overflow-y-hidden">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className='flex gap-3'>
    <div className="card-body">
     <p>{description}</p>
     <div className='flex justify-between'>
        <div>
        <h1 className='text-[17px] font-bold text-[#2c9094]'>Features 1</h1>
        {features.map((item,index)=>(
        <p>{index+1}. {item}</p>
    ))}
        </div>
        <div>
        <h1 className='text-[17px] font-bold text-[#2c9094]'>Features 2</h1>
        {features.map((item,index)=>(
        <p>{index+1}. {item}</p>
    ))}
        </div>
     </div>
    <hr className='border-2 border-indigo-600'/>
    <div className="text-[27px] font-bold text-[#a92e88]">{name}</div> 
    <div className="flex justify-between">
      <div className="text-[19px] flex items-center"><BsCalendarDateFill/>&nbsp;{published_in}</div>
      <div className="text-[19px] cursor-pointer"><RiFolderInfoFill/></div>
    </div>
  </div>
     <img className='w-[400px]' src={image}/>
    </div>
  </div>
</div>
            
        </>
    );
};

export default Model;