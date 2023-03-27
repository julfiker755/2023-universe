import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Model from './Model';
import Singledata from './Singledata';

const Card = () => {
    const [alldata,setalldata]=useState([])
    const [modeldata,setmodeldata]=useState(null)
    const [show,setshow]=useState(false)
    useEffect(()=>{
      fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then(res=>res.json())
      .then(dataa=>setalldata(dataa.data.tools))
    },[])
    const handledata=(data)=>{
        setmodeldata(data)
    }
    const handleSort = () => {
        console.log("dataall")
        const sortedData = alldata.sort((a, b) => {
          return new Date(b.published_in) - new Date(a.published_in);
        });
        setalldata([...alldata, sortedData]);
      };
    //   --------Extra niom model menu total object parse
    //  location image folter demo photo ache
    // fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
    
    return (
        <div>
          <span className='text-center block'> <Button handleclick={handleSort}>sort by date</Button> </span>
          <div className='container mx-auto mt-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-4'>
            {alldata.slice(0,show ? 12:6).map(item=><Singledata handledata={()=>handledata(item)} item={item}></Singledata>)}
            </div>
          </div>
           {!show && <div className='flex justify-center my-3'><Button handleclick={()=>setshow(!show)}>See more</Button></div>}
          {/* how to use modal data */}
          {modeldata && <Model modeldata={modeldata}></Model>}
        </div>
    );
};

export default Card;