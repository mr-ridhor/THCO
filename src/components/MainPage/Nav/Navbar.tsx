import {useEffect, useState}from 'react'
import { HiHome } from 'react-icons/hi';
import { useLocation } from 'react-router-dom'
import Userpix from './helpers/Userpix';
import {BiSolidBell} from 'react-icons/bi'
import {MdKeyboardArrowDown} from 'react-icons/md'
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [navbarText, setNavbarText] = useState('');
   // Function to update the navbar text based on the current pathname
   const updateNavbarText = () => {
    switch (pathname) {
      case '/':
        setNavbarText('Dashboard');
        break;
      case '/message':
        setNavbarText('Conversations');
        break;
      case '/settings':
        setNavbarText('Settings');
        break;
      case '/orders':
        setNavbarText('Orders');
        break;
      case '/inventory':
        setNavbarText('Inventory');
        break;
        case '/customers':
          setNavbarText('Customers');
          break;
      default:
        setNavbarText('Dashboard');
    }
  }
  useEffect(()=>{
    updateNavbarText()
  }, [pathname])
  return (
    <div className=''>
        <nav className={` w-full h-14 xl:h-20   relative shadow-lg bg-white `}>
       <div className="px-2 w-full flex items-center h-10 gap-1">
       <span className=' text-md text-[#45464E] h-full flex items-center'>{navbarText}</span>
       <div className='flex-grow justify-end flex w-full items-center h-full gap-2'>
        <div className=" md:flex hidden items-center bg-[#FEF5EA] py-1 md:px-2 gap-0 md:gap-2 rounded-md text-[#1C1D22]">
          <span className='text-sm  '>Nanny's Shop</span>
          <MdKeyboardArrowDown/>
        </div>
        <BiSolidBell className="text-[#5570F1]"/>
        <div className="">
          <Userpix/>
          
        </div>
       </div>
       </div>
       <hr />
       <div className="px-2 gap-1 h-4 text-sm w-full  flex items-center">
        <HiHome className="text-[#5570F1] text-[10px] 2xl:tetx-[12px]"/>
        <span className='text-[10px] 2xl:tetx-[12px] text-[#8B8D97]'>{navbarText ==='Dashboard'? "" :`/ ${navbarText}`}</span>
        </div>
        </nav>
    </div>
  )
}

export default Navbar