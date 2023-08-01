
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
const icons={
    pie:<AiOutlinePieChart/>,
    bag:<BsBag/>,
    user:<HiOutlineUsers />,
    arrow:  <MdKeyboardArrowDown/>

}
export const data=[
  {
    id:1,
    sales:'₦4,000,000.00',
    volume:450,
    per:"",
    pie:icons.pie,
    bag:icons.bag,
    user:icons.user,
    arrow:icons.arrow
  }
]

