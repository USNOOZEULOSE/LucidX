"use client";
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import ngoData from "/Users/sweekiatwong/Documents/GitHub/TrustMarkers/src/resource.json";
// can get id from params?
export default function donorPagewithId({ params }) {
    const [ngo,setNgo] = useState(null);


  console.log(ngoData);
    useEffect(()=>{
        for(let i=0;i<ngoData.length;i++){
            console.log(ngoData[i].ngoName)
            if(ngoData[i].ngoName == params.id){
                setNgo(ngoData[i]);
            }
        }
        console.log(ngo);
    },[ngoData])
  return (
    <div>
      
      
    </div>
  );
}
