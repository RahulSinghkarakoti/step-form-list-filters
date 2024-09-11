import React from "react";

const Step2 = ({ formData, setFormData, formErrors }) => {
  return (
    <div className="text-2xl font-semibold text-[#33372C]-700 flex flex-col space-y-2 px-2">
      {/* <h1 className="text-center font-bold text-3xl">Shipping Information</h1> */}

      <div className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Street Address:
          <input
            type="text"
            value={formData.address.streetAddress}
            className=" shadow-[#3e352de5] shadow-md border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
            onChange={(e) =>
              setFormData({
                ...formData,
                address: {
                  ...formData.address,
                  streetAddress: e.target.value,
                },
              })
            }
          />
        </label>
        <label className="flex flex-col">
          City:
          <input
            type="text"
            value={formData.address.city}
            className=" shadow-[#3e352de5] shadow-md border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
            onChange={(e) =>
              setFormData({
                ...formData,
                address: {
                  ...formData.address,

                  city: e.target.value,
                },
              })
            }
          />
        </label>
        <div className="flex  ">
          <label className="flex flex-col w-1/2">
            State:
            <input
              type="text"
              value={formData.address.state}
              className=" shadow-[#3e352de5] shadow-md border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,

                    state: e.target.value,
                  },
                })
              }
            />
          </label>
          <label className="flex flex-col w-1/2">
            PostalCode:
            <input
              type="text"
              value={formData.address.postalCode}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address: {
                    ...formData.address,

                    postalCode: e.target.value,
                  },
                })
              }
            />
          </label>
        </div>
        <label className="flex flex-col">
          Country:
          <input
            type="text"
            value={formData.address.country}
            className=" shadow-[#3e352de5] shadow-md border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
            onChange={(e) =>
              setFormData({
                ...formData,
                address: {
                  ...formData.address,

                  country: e.target.value,
                },
              })
            }
          />
        </label>
      </div>
      {formErrors && (
        <p className="bg-white text-red-700 rounded-xl text-2xl font-semibold p-3 absolute bottom-2 right-2">
          {formErrors.message}
        </p>
      )}
    </div>
  );
};

export default Step2;
