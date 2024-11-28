import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SinglePaste from './SinglePaste';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes)
 
  const [searchterm, setSearchterm] = useState('');

  // const dispatch = useDispatch();

  const filterData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchterm));

  // console.log( "filter content op " , filterData);



  return (
    <div className='flex ml-2 sm:ml-0  flex-col gap-4 mt-6 sm:min-w-[600px] min-w-[400px]'>
      <input
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
        placeholder='Search pastes... '
        
        className="placeholder-[#BFA181]
        p-4 bg-gray-700  rounded-xl"

      />


      <div className='border p-2 gap-4 flex flex-col rounded-2xl'>
        <div className='text-5xl text-center font-extrabold text-[#BFA181]'>All Pastes ... </div>


        <div className='flex flex-col gap-y-3'>
          {

            filterData.length > 0 &&
            filterData.map((item) => {
              return (<SinglePaste key={item._id} items={item} />)
            })
          }

        </div>


      </div>


    </div>
  )
}

export default Paste