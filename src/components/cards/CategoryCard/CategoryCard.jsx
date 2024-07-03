import Images from "../../../constant/Images";

function CategoryCard() {
  return (
    <div className="cardShadow sm:min-w-[46%] min-w-[31%] py-5 flex justify-center cursor-pointer">
      <img
        src={Images.chairText}
        alt={Images.chairText}
        className="w-30 object-contain sm:w-[20vw]"
      />
    </div>
  );
}

export default CategoryCard;
