import React from 'react'
import '../Style/Page/Notfound.css'
import {PiBracketsCurly} from 'react-icons/pi'

const Notfound = () => {
  return (
    <section className="notfound">
        <PiBracketsCurly/>
        <h1><span>404</span> Not Found!</h1>
        <h2>The page you are looking for is not available.</h2>
    </section>
  )
}

export default Notfound