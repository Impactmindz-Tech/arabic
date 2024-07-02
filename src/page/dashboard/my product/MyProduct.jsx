import Images from "../../../constant/Images.js";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
function MyProduct() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <BackButtonMenu text="حراجى" link="/" />

      {/* product section */}
      <div className="flex flex-wrap  justify-center gap-4">
        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className="">تيشيرت </h3>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.child}
              alt={Images.child}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className=""> طقم ولادى</h3>
            <p className="text-[#D96951]">400 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.child}
              alt={Images.child}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className=""> طقم ولادى</h3>
            <p className="text-[#D96951]">400 ريال</p>
          </div>
        </div>
        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className="">تيشيرت </h3>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.child}
              alt={Images.child}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className=""> طقم ولادى</h3>
            <p className="text-[#D96951]">400 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className="">تيشيرت </h3>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProduct;
