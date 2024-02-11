import '../Style/Component/Splash.css'
import logo from '../Assets/a_initial-removebg-preview 1.png'

const Splash = () => {

  return (
    <>
        <main className='main'>
          <img src={logo} alt="" />
          <h1 data-text="HI, WELCOME TO MY WEBSITE">HI, WELCOME TO MY WEBSITE</h1>
        </main>
    </>
  )
}

export default Splash