import React, {useContext} from 'react';

const Tracking = () => {

    return(
        <div className="bg-gray-100 min-h-screen py-40 flex flex-col text-primary">
            <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2">
              <h1 className="text-2xl font-bold mb-6">Track your package</h1>
              <form className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700 font-medium">
                    Package Code
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* Package Data */}
            <div className="max-w-2xl mx-auto bg-white shadow-md p-6 w-1/2 font-semibold">
                Package Informatiom
                <div className='font-normal'>Package Code: </div>
                <div className='font-normal'>Pickup Point: </div>
                <div className='font-normal'>Package Owner: </div>
                <div className='font-normal'>Package Status: </div>
            </div>
        </div>
    );
};

export default Tracking;