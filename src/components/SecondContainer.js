import React from 'react'
import ItemCard from './ItemCard'

const SecondContainer = () => {
  return (
    <div className="bg-[#FBF9F899] mt-14 py-4">
      <div className="flex justify-between">
        <div>Articles similaires</div>
        <div>Voir toute la collection</div>
      </div>
      <div className="flex">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </div>
  )
}

export default SecondContainer