import Images from '../../../constant/Images'
function DetailsOrderCompleteCard() {
 
  return (
    
       <div className="cardShadow w-[96%] m-auto flex justify-between items-center p-3">
          <div className="price font-bold text-[#D96951]  ">
            200 ريال
          
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <h3 className="mb-4">تيشيرت رصاصى </h3>
             <div className="qty flex justify-end gap-2">
                <h3>2</h3>
                <h3>عدد:</h3>
             </div>
            </div>
            <div className="img">
              <img src={Images.jacket} alt="jacket" className="w-[80px] sm:w-[15vw]" />
            </div>
          </div>
        </div>
    
  )
}

export default DetailsOrderCompleteCard
