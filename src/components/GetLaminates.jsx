import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export const GetLaminates = () => {
  return (
    <div className="flex items-center justify-between m-10 mt-36">
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{fontSize: 150, color: 'white'}}/>
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{fontSize: 150, color: 'white'}}/>
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{fontSize: 150, color: 'white'}}/>
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{fontSize: 150, color: 'white'}}/>
      </div>
    </div>
  );
};
