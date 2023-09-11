import { Button } from "flowbite-react";
import React, { useState } from "react";

export const Homepage = () =>{
    const [] = useState(false);
    return (
      <div>
        {/* <div className="bg-gradient-to-t from-indigo-300 to-indigo-300  w-full h-full shadow  flex justify-center items-center">
          <div className="w-[819px] h-[300px] bg-white bg-opacity-60 rounded-3xl">
          </div>
        </div> */}
        <div className="bg-gradient-to-t from-indigo-300 to-indigo-300 w-full h-[500px] flex items-center justify-center">
  <div className="w-[819px] h-[300px] bg-white bg-opacity-60 rounded-3xl flex items-center justify-center">
        <Button></Button>
  </div>
</div>

      </div>
    );
  }