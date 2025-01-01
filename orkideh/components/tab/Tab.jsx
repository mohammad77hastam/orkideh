import { GoPerson } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";



function Tab() {
  return (
    <>
      <div className='w-full h-[60px] flex flex-row-reverse'>
        <div className="flex justify-end w-[50%]"><img className="w-[80px] h-[40px] mr-[20px] mt-[15px]" src="public/img/logo.svg" alt="" /></div>
        <div className="flex justify-start w-[50%]">
          <div className="ml-[20px] m-2 mt-[20px] text-2xl"> <GoPerson /></div>
          <div className="m-2  mt-[20px] text-2xl"><PiShoppingCartLight /></div>
        </div>
      </div>
    </>
  )
}

export default Tab