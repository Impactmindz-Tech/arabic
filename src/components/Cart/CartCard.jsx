import { useState } from 'react'
import Images from '../../constant/Images'
function CartCard() {
    let [count,setCount]=useState(1);
    const decrement=()=>{

        setCount(--count)
    }

    const Increment=()=>{
        setCount(++count)
    }
  return (
    <>
       <div className="cardShadow w-[96%] m-auto flex justify-between items-center p-3 mt-[10px]">
          <div className="price font-bold text-[#D96951] p-2 flex flex-col gap-y-4">
            200 ريال
            <div className="deleteIcon text-center px-3">
              <img
                src={Images.deleteIcon}
                alt="delete icon"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <h3 className="mb-4">تيشيرت رصاصى </h3>
              <div className="border border-[#D24325] rounded-full flex px-1 w-[160px] items-center justify-between">
                <div className="left"><img src={Images.minus} alt="minus sign" className="cursor-pointer" onClick={()=>decrement()}/></div>
                <div className="input text-[#D24325] font-bold">{count}</div>
                <div className="right"><img src={Images.plus} alt="plus sign" className="cursor-pointer" onClick={()=>Increment()}/></div>
              </div>
            </div>
            <div className="img">
              <img src={Images.jacket} alt="jacket" className="w-[80px]" />
            </div>
          </div>
        </div>
    </>
  )
}

export default CartCard
