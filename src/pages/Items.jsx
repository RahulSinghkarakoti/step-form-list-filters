import React, { useState } from "react";
import axios from "axios";

function Items() {
  const [datas, setDatas] = useState();

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.org/users");
      console.log(res.data);
      setDatas(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = () => {
    console.log("clicked");
    fetchPosts();
  };

  return (
    <div className=" bg-white p-4 ">
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleClick()}
          className=" flex items-center justify-center gap-2 text-zinc-900 text-3xl  hover:text-white border-2 border-blue-700 bg-slate-100 w-fit p-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 "
        >
          Fetch
        </button>
      </div>
      <div className=" grid grid-cols-5 gap-2 p-3">
        {datas ?
          datas.map((data, index) => (
            <div
              key={data.id}
              className="bg-slate-300 shadow-xl hover:shadow-none p-1 rounded-md overflow-clip"
            >
              <h1>
                {data.firstname} {data.lastname}
              </h1>
              <h1>{data.birthDate} </h1>
              <h1>{data.email} </h1>
              <h1>{data.phone} </h1>
              <h1>{data.company.name} </h1>
            </div>
          )
        ):

        <div className="text-center text-4xl w-[600px] ">
          Click button to fetch the list
        </div>
      }
    
      </div>
    </div>
  );
}

export default Items;
