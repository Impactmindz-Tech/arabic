
import { Link } from 'react-router-dom'
import Header from '../../../components/Header'
import ProductCard from '../../../components/cards/ProductPageCard/ProductCard'
import BackButtonMenu from '../../../layout/BackButtonMenu'

function ProductPage() {
  return (
    <div className="w-[90%] m-auto">
    <Header />
    <BackButtonMenu text="المنتجات" link={"/"}/>


    <nav className="flex justify-end space-x-8 my-4 ">
      <Link to="#" className=" border-red-600 pb-1">الكل</Link>
      <Link to="#" className="text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1">ملابس</Link>
      <Link to="#" className="text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1">ساعات</Link>
      <Link to="#" className="text-red-600 border-b-2 text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1">ماركت</Link>
    </nav>


    <div className="flex flex-wrap  justify-end gap-4">

<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
   
    </div>
    </div>
  )
}

export default ProductPage
