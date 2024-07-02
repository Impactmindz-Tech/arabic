import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";

function VendorProfilePage() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <div className="banner w-[100%] bg-red-600 h-50 my-5 relative">
        <div className="flex justify-end gap-2 items-center my-6 z-10 absolute top-0 right-5">
          <p className="cursor-pointer text-white font-bold">
            {" "}
            <Link to={"/"}> حساب التاجر </Link>
          </p>
          <Link to={'/'}>
            <div className="arrow cursor-pointer">
              <img
                src={Images.whiteArrowRight}
                alt="right arrow"
                className="w-5 h-5"
              />
            </div>{" "}
          </Link>
        </div>
        <img
          src={Images.banner2}
          alt="banner 2"
          className="w-[100vw] h-[100%] "
        />
      </div>
    </div>
  );
}

export default VendorProfilePage;
