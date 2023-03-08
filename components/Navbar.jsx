'use client';

import Link from 'next/link';
import '../styles/globals.css' ;
import NavLink from '../app/nav-link';



import { useRouter } from 'next/navigation';
const menu = [
  { title: 'Home', path: '/' },
  { title: 'Explore', path: '/explore' },
  { title: 'Search', path: '/search' },
  { title: 'Campaign', path: '/campaign' },
]


const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const navLink = [
    {
      name: 'home',
      link:'/',
    },
    {
      name: 'explore',
      link:'/explore',
    },
    {
      name: 'search',
      link:'/search',
    },
    {
      name: 'campaign',
      link:'/campaign',
    },
  ];
  return(
  <nav className='bg-primary-black'>
    <div className='flex justify-center py-4 '>
      <img src='/RaiseRocketlogo.png'
      
      className='w-[280.55px] h-[40px]'/>
    </div>
    <div className='md:flex justify-center font-excratch text-secondary-white items-center '>
     <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/">Home
        </NavLink>
      </ul>
      <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/explore">Explore
        </NavLink>
      </ul> 
      <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/create">Create
        </NavLink>
      </ul> 
      <ul className='px-4 text-[12px] hover:text-green transistion duration-300'>
        <NavLink  href="/dashboard">Dashboard
        </NavLink>
      </ul> 
      <button className='absolute right-10 transition-all duration-300 cursor-pointer   inline-flex items-center mr-2 mb-2 space-x-2 text-green hover:img hover:text-primary-black border border-green hover:bg-green focus:ring-4 px-4 py-2.5 text-sm focus:outline-none focus:ring-green-300 font-excratch rounded-lg text-green  dark:border-green dark:text-green dark:hover:text-primary-black dark:hover:bg-green dark:focus:ring-green '>
      <img  className="hover:backdrop-grayscale "src='/metamask logo.png'/>
        <span>
        Connect
        </span>
      </button>
    
      </div>
      
    
    
  </nav>  

  );
};

export default Navbar;
