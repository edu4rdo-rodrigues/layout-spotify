import { 
  ChevronLeft, 
  ChevronRight, 
} from 'lucide-react';

function ButtonsLeftRight() {
  return (
    <div className='flex items gap-3'>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronLeft/>
      </button>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronRight/>
      </button>
    </div>
  );
};

export default ButtonsLeftRight;