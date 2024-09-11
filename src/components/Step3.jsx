import React from "react";

const Step3 = ({ formData, setFormData,formErrors }) => {
  return (
    <div className="text-2xl font-semibold text-[#33372C]-700 flex flex-col space-y-2 px-2">
      {/* <h1 className="text-center font-bold text-3xl">Payment Information</h1> */}

      <div className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Card Number:
          <input
            type="text"
            value={formData.cardInfo.cardNumber}
            className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
            onChange={(e) =>
              setFormData({
                ...formData,
                cardInfo: {
                  ...formData.cardInfo,
                  cardNumber: e.target.value,
                },
              })
            }
          />
        </label>
        <label className="flex flex-col">
          CardHolder Name:
          <input
            type="text"
            value={formData.cardInfo.cardHolderName}
            className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
            onChange={(e) =>
              setFormData({
                ...formData,
                cardInfo: {
                    ...formData.cardInfo,

                    cardHolderName: e.target.value,
                },
              })
            }
          />
        </label>
        <div className="flex  mb-2">
          <label className="flex flex-col w-1/2">
            Expiration Date:
            <input
              type="text"
              value={formData.cardInfo.expirationDate}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cardInfo: {
                    ...formData.cardInfo,

                    expirationDate: e.target.value,
                  },
                })
              }
            />
          </label>
          <label className="flex flex-col w-1/2">
            CVV:
            <input
              type="text"
              value={formData.cardInfo.cvv}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cardInfo: {
                    ...formData.cardInfo,
                    cvv: e.target.value,
                  },
                })
              }
            />
          </label>
        </div>
      </div>
      {formErrors && (
        <p className="bg-white text-red-700 rounded-xl text-2xl font-semibold p-3 absolute bottom-2 right-2">
          {formErrors.message}
        </p>
      )}
    </div>
  );
};

export default Step3;
