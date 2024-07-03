import Images from '../../../constant/Images'

function VendorProfileCard() {
  return (
    <div className="cardShadow min-w-[31%] py-5 sm:min-w-[48%]">
    <div className="flex justify-center">
      <img
        src={Images.jacket}
        alt={Images.jacket}
        className="w-30 object-contain sm:w-auto"
      />
    </div>
    <div className="text-right pr-4">
      <h3 className="">تيشيرت </h3>
      <p className="text-[#D96951]">200 ريال</p>
    </div>
  </div>
  )
}

export default VendorProfileCard
