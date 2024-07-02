import BackButtonMenu from "../../../layout/BackButtonMenu";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
function CategoryPage() {
  return (
    <div className="pt-5">
      <Header />
      <BackButtonMenu text="التصنيفات" link="/" />

      <div className="flex flex-wrap  justify-center gap-4">
        <div className="cardShadow min-w-[31%] py-5 flex justify-center cursor-pointer">
          <img
            src={Images.chairText}
            alt={Images.chairText}
            className="w-30 object-contain"
          />
        </div>

        <div className="cardShadow min-w-[31%] py-5 flex justify-center cursor-pointer">
          <img
            src={Images.clothText}
            alt={Images.clothText}
            className="w-30 object-contain"
          />
        </div>

        <div className="cardShadow min-w-[31%] py-5 flex justify-center cursor-pointer">
          <img
            src={Images.chairText}
            alt={Images.chairText}
            className="w-30 object-contain"
          />
        </div>

        <div className="cardShadow min-w-[31%] py-5 flex justify-center cursor-pointer">
          <img
            src={Images.clothText}
            alt={Images.clothText}
            className="w-30 object-contain"
          />
        </div>

        <div className="cardShadow min-w-[31%] py-5 flex justify-center cursor-pointer">
          <img
            src={Images.chairText}
            alt={Images.chairText}
            className="w-30 object-contain"
          />
        </div>

        <div className="cardShadow min-w-[31%] py-5 flex justify-center cursor-pointer">
          <img
            src={Images.clothText}
            alt={Images.clothText}
            className="w-30 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
