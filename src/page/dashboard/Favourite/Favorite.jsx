
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import FavoriteCard from "../../../components/cards/FavoriteCard/FavoriteCard.jsx";
function Favorite() {
  return (
    <div className="w-[90%] m-auto pb-20 sm:w-[100%]">
      <Header />
      <BackButtonMenu text="المفضلة" link="/" />

      {/* product section */}
      <div className="flex flex-wrap  justify-end gap-4 sm:gap-2">
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
       

      

      </div>
    </div>
  );
}

export default Favorite;
