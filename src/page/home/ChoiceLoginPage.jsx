import { Link } from "react-router-dom";
import Images from "../../constant/Images";

function ChoiceLoginPage() {
  return (
    <div className="w-full h-screen bg-lightGrey">
      <div className="pb-20 m-auto w-[720px] relative sm:w-[100%] ">
        <div className="">
          <h1 className="text-right font-bold text-[#272727] my-6 pr-5">
            يمكنك الان اختيار تسجيل الدخول !{" "}
          </h1>

          <div className="flex flex-wrap my-10  items-center min-h-[60vh] p-10">
            <div className=" flex justify-center   w-full">
              <Link to="/login">
                <div className="bg-[#F8E1DC] p-6 px-10 rounded-full">
                  <img
                    src={Images.merchant}
                    alt="merchant"
                    className="w-20 h-20"
                  />
                  <p className="text-center text-[#D24325] font-extrabold text-2xl">
                    تاجر
                  </p>
                </div>
              </Link>
            </div>

            <div className="merchant flex justify-center my-6 w-full">
              <Link to="/login">
                <div className="bg-[#F8E1DC] p-6 px-10 rounded-full">
                  <img src={Images.client} alt="client" className="w-20 h-20" />
                  <p className="text-center text-[#D24325] font-extrabold text-2xl">
                    عميل
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex justify-center w-full items-center sm:bottom-3">
          <img src={Images.sponsor} alt="Images sponsor" />
        </div>
      </div>
    </div>
  );
}

export default ChoiceLoginPage;
