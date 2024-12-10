import Image from 'next/image'
import React from 'react'
import icon1 from '../images/Groupe_25.png'
import icon2 from "../images/dish.png"
import icon3 from "../images/Groupe_56.png"
import icon4 from "../images/Groupe_123.png"


const FourthContainer = () => {
  return (
    <div className="my-5 from-fuchsia-200 mt-10">
      <div className="text-center">
      <div>On s’occupe de tout</div>
      <div>Office ipsum you must be muted. It meeting commitment busy pain.</div>
      </div>
      <div className="flex my-7 mx-80 m-auto items-center right-0 left-0 justify-between">
          <Image src={icon1} alt="icon1"/>
          <Image src={icon2} alt="icon2"/>
          <Image src={icon3} alt="icon3"/>
          <Image src={icon4} alt="icon4"/>
      </div>
    </div>
  )
}

export default FourthContainer