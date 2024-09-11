import React from "react";
import { useSelector } from "react-redux";

function ResultPage({ formData }) {
  const userData = useSelector((state) => state.user.userData);
  console.log(userData);
  return (
    <div className="bg-[#FF885B] h-screen flex justify-center items-center p-4 ">
      <div className="bg-[#FFE5CF] p-4 rounded-xl flex justify-between w-full ">
        <div className="  w-1/3 border-r-4 border-zinc-900 p-2 text-xl font-semibold">
          <h1 className="text-center  text-3xl font-bold">User Info</h1>
          <p>First Name:</p>
          <p className="text-blue-600">{userData.firstName}</p>
          <p>Last Name:</p>
          <p className="text-blue-600">{userData.lastName}</p>
          <p>Email Name:</p>
          <p className="text-blue-600">{userData.email}</p>
          <p>Password :</p>
          <p className="text-blue-600">{userData.password}</p>
          <p>Phone Number :</p>
          <p className="text-blue-600">{userData.phone}</p>
        </div>
        <div className=" w-1/3  border-r-4 border-zinc-900 p-2 text-xl font-semibold">
          <h1 className="text-center text-3xl font-bold">Shipping Info</h1>
          <p>streetAddress:</p>
          <p className="text-blue-600">{userData.address.streetAddress}</p>
          <p>city:</p>
          <p className="text-blue-600">{userData.address.city}</p>
          <p>state:</p>
          <p className="text-blue-600">{userData.address.state} </p>
          <p>postalCode:</p>
          <p className="text-blue-600">{userData.address.postalCode}</p>
          <p>country:</p>
          <p className="text-blue-600">{userData.address.country}</p>
        </div>
        <div className=" w-1/3  p-2  text-xl font-semibold">
          <h1 className="text-center text-3xl font-bold ">Payment Info</h1>
          <p> cardNumber:</p>
          <p  className="text-blue-600">{userData.cardInfo.cardNumber}</p>
          <p>cardHolderName:</p>
          <p  className="text-blue-600">{userData.cardInfo.cardHolderName}</p>
          <p>expirationDate:</p>
          <p  className="text-blue-600">{userData.cardInfo.expirationDate}</p>
          <p>cvv:</p>
          <p  className="text-blue-600">{userData.cardInfo.cvv}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
