
import Images from '../../../constant/Images'

function VendorCards() {
  return (
    <div className="w-[30%] cursor-pointer">
    <img src={Images.car} alt="car" className="object-fit w-[100%] " />
    <p className='text-center text-[#205960] font-sm'>محلات كيدز</p>
  </div>
  )
}

export default VendorCards
