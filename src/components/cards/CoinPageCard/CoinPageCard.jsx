import Images from "../../../constant/Images";

function CoinPageCard() {
  return (
    <div className="wallet2 w-full flex  justify-center  hover:bg-[#F5F5F5]">
      <div className="flex py-5 gap-2 sm:p-2">
        <div className="flex flex-col">
          <div className="flex justify-end gap-2 sm:pl-1">
            <h5 className="font-bold text-[#205960]">متجر سيارات </h5>
          </div>
          <div className="flex justify-end">
            <h5 className="w-[100%] my-2 text-right">
              تم اضافة سيارة جديدة مع مميزات رائعة ادخل متجرنا وشارك معنا افضل
              الاسعار
            </h5>
          </div>
          <div className="flex justify-end gap-2 sm:pl-1">
            <h5 className="font-bold text-[#205960]">
              النقاط المكتسبة . 120 نقطة{" "}
            </h5>
          </div>
        </div>
        <div className="icon">
          <img
            src={Images.chair_Img}
            alt="chair img"
            className="w-10 h-10 sm:h-auto sm:w-20"
          />
        </div>
      </div>
    </div>
  );
}

export default CoinPageCard;
