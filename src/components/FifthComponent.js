import React from 'react'
import picture from "../images/BUFFET.png";
import Image from 'next/image'


const FifthComponent = () => {
  return (
    <div>
      <div className="flex">
        <Image className="w-1/2 rounded-xl" src={picture} alt="loading"></Image>
        <div className="w-1/2 ml-5 mr-5 p-2 rounded-xl bg-[#FFF3F9] ">
          <div className="text-sm">Office ipsum you must be muted.
             Synergize helicopter prioritize anyway job due harvest most opportunity 
             didn't. Yet busy any meeting shark light marginalised 4-blocker message.
              Productize corporate nail caught synergy highlights lunch. Company another 
              pushback items dear or any.</div>
              <div className="mt-8">
                <input className="w-[70%] py-2 pl-2 rounded-xl border" type="text" plceholder="john@doe.com "></input>
                <button className="bg-[#5CD2DD] py-2 px-2 rounded-xl ml-2">S’inscrire</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default FifthComponent