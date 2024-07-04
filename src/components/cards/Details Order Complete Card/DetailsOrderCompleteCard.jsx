import Images from "../../../constant/Images";
function DetailsOrderCompleteCard() {
  return (
    <div className="cardShadow flex justify-between  p-3 mt-[10px]">
      <div className="price font-bold text-[#D96951] p-2 flex">
        200 ريال
        
      </div>

      <div className="flex items-center justify-end gap-4">
        <div className="text-right">
          <h3 className="mb-4"> تيشيرت رصاصى </h3>
          <div className="flex items-center gap-2 justify-end">
       <h2>2 </h2>
       <h2>عدد:</h2>
          </div>
        </div>
        <div className="img">
          <img
            src={Images.jacket}
            alt="jacket"
            className="w-[80px] sm:w-[15vw]"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsOrderCompleteCard;
