import React from 'react';
import { UserGroupIcon, ServerIcon, CalendarIcon, ChartBarSquareIcon, CogIcon} from '@heroicons/react/24/solid'

const SideBar = () => {
  return (
    <div className='left-0 bg-white w-40'>
      <h1 className='flex items-center justify-center text-2xl h-16 from-cyan-600 bg-gradient-to-b
                     to-purple-600 text-white font-bold pl-1 pr-1'>
        Home
      </h1>
      <ul className='flex flex-col text-lg h-full bg-gradient-to-b from-cyan-500 to-purple-400 '>
        <li
          className='flex justify-center items-center flex-col py-7 text-white '>
          <UserGroupIcon className='w-7 h-7' />
          Proyect
        </li>
        <li
          className='flex justify-center items-center flex-col py-2 border-purple-500 text-blue-500
                     border-l-4 rounded-full w-100 flex bg-violet-200 m-font-bold'>
          <ServerIcon className='w-7 h-7 text-purple-800' />
          Tasks
        </li>
        <li
          className='flex justify-center items-center flex-col py-7 text-white'>
          <CalendarIcon className='w-7 h-7' />
          Schedule
        </li>
        <li
          className='flex justify-center items-center flex-col py-7 text-white'>
          <ChartBarSquareIcon className='w-7 h-7' />
          Project
        </li>
        <li
          className='flex justify-center items-center flex-col py-7 text-white mt-auto mb-16 rounded-b-l'>
          <CogIcon className='w-7 h-7' />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
