import BackButtonMenu from "../../../layout/BackButtonMenu";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
import CategoryCard from "../../../components/cards/CategoryCard/CategoryCard";
function CategoryPage() {
  return (
    <div className="pb-20">
      <Header />
      <BackButtonMenu text="التصنيفات" link="/dashboard/home" />

      <div className="flex flex-wrap  justify-center gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default CategoryPage;
