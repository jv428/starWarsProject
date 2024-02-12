import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export const GetLaminates = () => {
  return (
    <div className="flex flex-wrap items-center justify-between m-10">
      <div className="w-full text-center mb-20 text-3xl font-medium">
        <h1>¿Que hay al interior?</h1>
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
      <div className="flex justify-center items-center bg-slate-300 w-[20%] h-56 rounded-md shadow-md hover:scale-105 cursor-pointer duration-500">
        <EmailIcon sx={{ fontSize: 150, color: "white" }} />
      </div>
    </div>
  );
};
