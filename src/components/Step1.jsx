import React from 'react'

const Step1= ({ formData, setFormData,passwordMatchError,formErrors })=>  {
    return (
        <div className='text-2xl font-semibold text-[#33372C]-700 flex flex-col space-y-2 px-2'>
        {/* <h1 className="text-center font-bold text-3xl">Account Information</h1> */}


        <div className='flex flex-col space-y-2'>

          <label className="flex flex-col">
            First Name:
            <input
              type="text"
              required
              value={formData.firstName}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </label>
          <label className="flex flex-col">
          Last Name:
            <input
              type="text"
              required
              value={formData.lastName}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </label>
          <label className="flex flex-col">
          Email:
            <input
              type="email"
              required
              value={formData.email}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>
          <div className='flex '>
          <label className="flex flex-col w-1/2">
          Password:
            <input
              type="password"
              required
              value={formData.password}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </label>
          <label className="flex flex-col w-1/2">
         Confirm Password:
            <input
              type="password"
              required
              value={formData.confirmPassword}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </label>
          </div>
          <label className="flex flex-col">
            Phone:
            <input
              type="phone"
              required="true"
              value={formData.phone}
              className="  shadow-[#3e352de5] shadow-md  border-[#33372C]  bg-[#f0cfb2e5] rounded-lg p-1  outline-none  mx-2 "
         
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </label>
        </div>
        {
          passwordMatchError && (
            <p className='bg-white text-red-700 rounded-xl text-2xl font-semibold p-3 absolute bottom-2 right-2'>
              Passwords do not match
            </p>
          )
        }
         {
          formErrors && (
            <p className='bg-white text-red-700 rounded-xl text-2xl font-semibold p-3 absolute bottom-2 right-2'>
              {formErrors.message}
            </p>
          )
        }
        </div>
      );
}

export default Step1
