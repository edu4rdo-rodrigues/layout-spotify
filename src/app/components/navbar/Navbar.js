import { Home as HomeIcon, Library, Search, } from 'lucide-react';

function Navbar() {
  return (
    <nav className='space-y-5 mt-10'>
      <a className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
        <HomeIcon/>
        Home
      </a>
      <a className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
        <Search/>
        Search
      </a>
      <a className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
        <Library/>
        Your Library
      </a>
    </nav>
  );
};

export default Navbar;