import Header from "../../../components/Header";
import ProductCard from "../../../components/cards/ProductPageCard/ProductCard";
import BackButtonMenu from "../../../layout/BackButtonMenu";
import NavBarProductPage from "../../../components/NavBars/ProductPageNavBar/NavBarProductPage";

function ProductPage() {
  return (
    <div className="pb-20">
      <Header />
      <BackButtonMenu text="المنتجات" link={"/dashboard/home"} />

      <NavBarProductPage />

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductPage;
