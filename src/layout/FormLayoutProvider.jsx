import BottomMenu from "./BottomMenu"

function FormLayoutProvider({ children }) {
  return (
    <div className='page'>
    
      <main className='pt-5'>
        {children}

        <BottomMenu />
      </main>
    </div>
  )
}

export default FormLayoutProvider
