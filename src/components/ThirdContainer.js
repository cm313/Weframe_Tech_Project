import React from 'react'
import ItemCard2 from './ItemCard2'

const ThirdComponent = () => {
  return (
    <div className="bg-[#FBF9F899] mt-14 py-4">
      <div className="flex justify-between">
        <div>Ces produits pourraient vous intéresser</div>
        <div>Voir toute la collection</div>
      </div>
      <div className="flex flex-wrap">
        <ItemCard2/>
        <ItemCard2/>
        <ItemCard2/>
      </div>
    </div>
  )
}

export default ThirdComponent