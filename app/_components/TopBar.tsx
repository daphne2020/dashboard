import React, { useEffect } from 'react';
import { MagnifyingGlassIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useUserService } from '_services';
import Link from 'next/link';

const TopBar = () => {
  const userService: any = useUserService();
  const user = userService.currentUser;

  useEffect(() => {
    userService.getCurrent();
    if (process.browser) {
    }
  }, []);

  return (
    <div className='h-16 pr-5 bg-gradient-to-b bg-gradient-to-r from-cyan-500 to-purple-400 w-full 
                    flex items-center justify-between text-white md:text-2xl'>
      <div className='flex px-2 items-center'>
        <input
          type='text'
          placeholder='Search for tasks ...'
          className=' bg-transparent border-1 rounded border border-gray-500 text-white placeholder-gray-200 outline-none focus:ring-0 text-lg'
        />
        <div className='cursor-pointer'><MagnifyingGlassIcon className='w-8 h-8 text-white ml-1 hover:text-cyan-300' /></div>   
      </div>
      <div className='flex space-x-2 items-center'>
        <BellIcon className='w-7 h-7 text-white' />
        <div className='flex items-center text-white'>
          <h1 className='outline-none focus:ring-0 text-lg mr-5 w-200 cursor-pointer'>
            <Link href="/users" className='text-cyan-300'>Manage Users</Link>
          </h1>
          <h1 className='font-bold mr-5 w-200'>
            Hi {user.firstName}!
          </h1>
          <UserCircleIcon className='w-10 h-10 text-white'></UserCircleIcon>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
