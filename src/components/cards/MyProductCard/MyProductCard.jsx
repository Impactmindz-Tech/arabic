import Images from '../../../constant/Images'

function MyProductCard() {
  return (
    <div className="cardShadow min-w-[31%] py-5 sm:min-w-[48%]">
    <div className="p-3 flex justify-center">
      <img
        src={Images.child}
        alt={Images.child}
        className="w-30 object-contain"
      />
    </div>
    <div className="text-right pr-4">
      <h3 className=""> طقم ولادى</h3>
      <p className="text-[#D96951]">400 ريال</p>
    </div>
  </div>
  )
}

export default MyProductCard
