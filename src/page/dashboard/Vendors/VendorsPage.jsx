import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import BackButtonMenu from "../../../layout/BackButtonMenu";
import VendorCards from "../../../components/cards/VendorCard/VendorCards";
import VendorNavBar from "../../../components/NavBars/VendorNavBar/VendorNavBar";
function VendorsPage() {
  return (
    <div className="pb-20">
      <Header />
      <BackButtonMenu text="المتجر" link={"/"} />

     <VendorNavBar />

      <div className="flex gap-3 flex-wrap justify-between">
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
        <VendorCards />
      
      </div>
    </div>
  );
}

export default VendorsPage;
