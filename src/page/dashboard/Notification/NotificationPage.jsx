import Images from "../../../constant/Images.js";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
const NotificationPage = () => {
  return (
    <>
      <div className="w-[90%] m-auto pb-20">
        <Header />
        <BackButtonMenu text="الاشعارات" link="/" />

        <div className="my-6 gap-y-5 flex flex-wrap justify-end">
          <div className="wallet2 w-full flex  justify-end pr-3 bg-[#F5F5F5] hover:bg-[#F5F5F5]">
            <div className="flex py-5 gap-5 ">
              <div className="flex flex-col justify-end">
                <div className="flex justify-between">
                  <h5 className="font-bold text-[#205960]">منذ 5 أيام </h5>
                  <h5 className="font-bold text-[#205960]">متجر سيارات </h5>
                </div>
                <div className="flex justify-end">
                  <h5 className="w-[90%] my-2 text-right">
                    تم اضافة سيارة جديدة مع مميزات رائعة ادخل متجرنا وشارك معنا
                    افضل الاسعار
                  </h5>
                </div>
              </div>
              <div className="icon">
                <img
                  src={Images.chair_Img}
                  alt="chair img"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>

          <div className="wallet2 w-full flex  justify-end pr-3 hover:bg-[#F5F5F5]">
            <div className="flex py-5 gap-5 ">
              <div className="flex flex-col justify-end">
                <div className="flex justify-between">
                  <h5 className="font-bold text-[#205960]">منذ 3/3/2024 </h5>
                  <h5 className="font-bold text-[#205960]">متجر سيارات </h5>
                </div>
                <div className="flex justify-end">
                  <h5 className="w-[90%] my-2 text-right">
                    تم اضافة سيارة جديدة مع مميزات رائعة ادخل متجرنا وشارك معنا
                    افضل الاسعار
                  </h5>
                </div>
              </div>
              <div className="icon">
                <img
                  src={Images.chair_Img}
                  alt="chair img"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
          <div className="wallet2 w-full flex  justify-end pr-3 hover:bg-[#F5F5F5]">
            <div className="flex py-5 gap-5 ">
              <div className="flex flex-col justify-end">
                <div className="flex justify-between">
                  <h5 className="font-bold text-[#205960]">منذ 3/3/2024 </h5>
                  <h5 className="font-bold text-[#205960]">متجر سيارات </h5>
                </div>
                <div className="flex justify-end">
                  <h5 className="w-[90%] my-2 text-right">
                    تم اضافة سيارة جديدة مع مميزات رائعة ادخل متجرنا وشارك معنا
                    افضل الاسعار
                  </h5>
                </div>
              </div>
              <div className="icon">
                <img
                  src={Images.chair_Img}
                  alt="chair img"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
