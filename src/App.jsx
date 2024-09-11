import { Link } from "react-router-dom";
import { CiShare1 } from "react-icons/ci";
import { useEffect, useState } from "react";

export default function App() {
   

 
  return (
    <div 
     className=" text-3xl font-bold   h-screen bg-black flex flex-col items-center justify-center space-y-4">
       
      <h1 className="text-8xl text-white">DataBrain Assignment</h1>
      <div className="flex gap-7">
        <Link to={"/form"}>
          <div className=" flex items-center justify-center gap-2 text-zinc-900   hover:text-white border-2 border-blue-700 bg-slate-100 w-fit p-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ">
            Form
            <CiShare1 />
          </div>
        </Link>
        <Link to={"/Ecommerce"}>
          <div className=" flex items-center justify-center gap-2 text-zinc-900  hover:text-white border-2 border-blue-700 bg-slate-100 w-fit p-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ">
            Ecommerce
            <CiShare1 />
          </div>
        </Link>
        <Link to={"/api"}>
          <div className=" flex items-center justify-center gap-2 text-zinc-900  hover:text-white border-2 border-blue-700 bg-slate-100 w-fit p-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 ">
            Api Items
            <CiShare1 />
          </div>
        </Link>
      </div>
    </div>
  );
}
