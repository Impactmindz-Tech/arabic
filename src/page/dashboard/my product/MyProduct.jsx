import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import MyProductCard from "../../../components/cards/MyProductCard/MyProductCard.jsx";
function MyProduct() {
  return (
    <div className="w-[90%] m-auto pb-20 sm:w-[100%]">
      <Header />
      <BackButtonMenu text="حراجى" link="/" />

      {/* product section */}
      <div className="flex flex-wrap  justify-center gap-4 sm:gap-2">
        

       <MyProductCard />
       <MyProductCard />
       <MyProductCard />
       <MyProductCard />

    
      </div>
    </div>
  );
}

export default MyProduct;
