import Image from 'next/image'
import React from 'react'
import loveIcon from "../images/icon.png"
import Table from "../images/Table.png"

const ItemCard = () => {
  return (
    <div className="w-60 mx-4 my-4 rounded-lg px-2 py-2 bg-[#F9F7F5]">
      <div className="flex justify-between">
        <Image src={loveIcon} alt="like"></Image>
        <div>Art de la table</div>
      </div>
      <Image className="w-20 h-20 m-auto right-0 left-0" src={Table} alt="product"></Image> 
      <div className="flex justify-between">
        <div>Title</div>
        <div>0€</div>
      </div>
      <div className="flex justify-between">
        <div>0,35€/Pièce · RÉF : VABGN5</div>
        <div>20 pièces</div>
      </div>
    </div>
  )
}

export default ItemCard