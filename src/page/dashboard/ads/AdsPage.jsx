import { FaRegEye } from "react-icons/fa";
import Images from "../../../constant/Images";
import Header from "../../../components/Header";
import BackButtonMenu from "../../../layout/BackButtonMenu";

function AdsPage() {
  return (
    <div className="w-[90%] m-auto pb-10">
      <Header />
      <BackButtonMenu text="الاعلانات" link="/" />

      <div className="banner">
        <div className="w-full">
          <img
            src={Images.banner}
            alt="banner"
            className="object-contain w-[100%]"
          />
        </div>

        <div className="details py-5 flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="text-[#B2B2B2]">10</div>
            <div className="text-[#B2B2B2]">
              <FaRegEye />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="text-right">
              <h3 className="text-[#205960] font-bold">عيدك عندنا</h3>
              <p className="sm:text-sm">تخفيضات على كل ملابس الاطفال, الرجالى والحريمى تصل حتى 30%</p>
              <h3 className="text-[#205960] font-bold">اعلان . متجر الاصيل</h3>
            </div>
            <div className="icon">
              <img
                src={Images.chair_Img}
                alt="chair_Img"
                className="w-12 h-12 sm:h-auto sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="banner">
        <div className="w-full">
          <img
            src={Images.banner}
            alt="banner"
            className="object-contain w-[100%]"
          />
        </div>

        <div className="details py-5 flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="text-[#B2B2B2]">10</div>
            <div className="text-[#B2B2B2]">
              <FaRegEye />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="text-right">
              <h3 className="text-[#205960] font-bold">عيدك عندنا</h3>
              <p className="sm:text-sm">تخفيضات على كل ملابس الاطفال, الرجالى والحريمى تصل حتى 30%</p>
              <h3 className="text-[#205960] font-bold">اعلان . متجر الاصيل</h3>
            </div>
            <div className="icon">
              <img
                src={Images.chair_Img}
                alt="chair_Img"
                className="w-12 h-12 sm:h-auto sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default AdsPage;
