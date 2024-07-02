import Header from '../../../components/Header'
import Images from '../../../constant/Images'

function VendorProfilePage() {
  return (
    <div>
      <Header/>
<div className="banner w-[100%] h-20">
    <img src={Images.banner2} alt="banner 2" className='w-[100%] h-[100%] object-contain'/>
</div>
    </div>
  )
}

export default VendorProfilePage
