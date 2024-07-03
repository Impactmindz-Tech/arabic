import Header from "../../../components/Header";
import BackButtonMenu from "../../../layout/BackButtonMenu";
import Images from "../../../constant/Images";

function NoAddressPage() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <BackButtonMenu text="العناوين" link="/" />
      <div className="my-9">
        <div className="flex justify-center">
          <img src={Images.noAddress} alt="noAddress" />
        </div>

        <div className="flex justify-center my-7">
          <img src={Images.addBtn} alt="noAddress" className="cursor-pointer" />
        </div>
        <div className="flex justify-center my-7">
          <p className="text-[#555555]">لا يوجد عناوين قم باضافة عنوان</p>
        </div>
      </div>
    </div>
  );
}

export default NoAddressPage;
