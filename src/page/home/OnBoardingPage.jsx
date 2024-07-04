import OnBoardingSlider from "../../components/slider/OnBoardingSlider";
import Images from "../../constant/Images";

function OnBoardingPage() {
  return (
    <div className="w-full h-screen bg-lightGrey">
      <div className="pb-20 m-auto w-[720px] relative sm:w-[100%]">
        <OnBoardingSlider />

        {/* next */}
        <div className="btn mt-5 flex flex-wrap justify-center">
          <button className="RedBtnSubmit w-[50%] p-2 outline-none">التالى</button>
        </div>
        {/* skip */}
        <div className="btn flex mt-3 flex-wrap justify-center">
          <p className="p-2 text-center text-[#D24325] cursor-pointer">تخطى</p>
        </div>

        <div className="absolute bottom-0 left-0 flex justify-center w-full items-center sm:bottom-3">
          <img src={Images.sponsor} alt="Images sponsor" />
        </div>
      </div>
    </div>
  );
}

export default OnBoardingPage;
