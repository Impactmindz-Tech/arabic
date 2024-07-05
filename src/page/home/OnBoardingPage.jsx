import { Link } from "react-router-dom";
import OnBoardingSlider from "../../components/slider/OnBoardingSlider";
import Images from "../../constant/Images";

function OnBoardingPage() {
  return (
    <div className="w-full bg-lightGrey py-2 sm:py-2"> 
      <div className="m-auto w-[720px] relative sm:w-[100%] py-10 sm:py-2">
        <OnBoardingSlider />

        {/* next */}
        <div className="btn mt-5 flex flex-wrap justify-center">
          <Link
            to="/choice_login_page"
            className="RedBtnSubmit w-[50%] p-2 outline-none flex justify-center"
          >
            <button>التالى</button>
          </Link>
        </div>
        {/* skip */}
        <div className="btn flex mt-3 flex-wrap justify-center">
          <Link
            to="/login"
            className="p-2 text-center text-[#D24325] cursor-pointer flex justify-center"
          >
            <p>تخطى</p>
          </Link>
        </div>

        <div className="bottomMenuBar flex justify-center fixed bottom-0 left-50 ">
          <img src={Images.sponsor} alt="Images sponsor" />
        </div>
      </div>
    </div>
  );
}

export default OnBoardingPage;
