import Header from "../../../components/Header";
import ProductCard from "../../../components/cards/ProductPageCard/ProductCard";
import BackButtonMenu from "../../../layout/BackButtonMenu";
import NavBarProductPage from "../../../components/NavBars/ProductPageNavBar/NavBarProductPage";

function ProductPage() {
  return (
    <div className="w-[90%] m-auto pb-20">
      <Header />
      <BackButtonMenu text="المنتجات" link={"/"} />

      <NavBarProductPage />

      <div className="flex flex-wrap justify-end gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductPage;
