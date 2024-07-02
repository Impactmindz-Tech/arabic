
import Header from '../../../components/Header'
import Images from '../../../constant/Images'

function CompleteOrder() {
  return (
    <>
      <Header />
      <div className="flex justify-center my-10">
        <img src={Images.orderComplete} alt={Images.orderComplete} className='w-[30vh]'/>
      </div>
      <h5 className='text-center text-[#205960] font-bold'>تم اكمال طلبك بنجاح</h5>
    
    <p  className='text-center w-[50%] m-auto my-2'> مرحبا بك نحن سعداء بالتعامل معك فى تطبيق ادباى ويمكنك استخدام تطبقنا فى اى وقت </p>
    
    <div className="flex justify-center my-10">
    <button className='btnSubmit w-[50%]'>العودة الى الرئيسية</button>
    </div>
    </>
  )
}

export default CompleteOrder
