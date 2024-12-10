import React from 'react'
import Image from "next/image";
import logo from "../images/Group.png";
import bulb from "../images/lightbulb-01.png";
import love from "../images/icon.png"
import cartIcon from "../images/carticon.png";
import avatar from "../images/Avatar.png";
import downarrow from "../images/downarrow.png";
import searchIcon from "../images/searchicon.png"
import NavBar from './NavBar';
import dot from "../images/Ellipse.png";
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from "./ThirdContainer";
import FourthContainer from './FourthContainer';
import FifthComponent from './FifthComponent';
import Footer from './Footer';


const Header = () => {
  return (
    <div className="ml-7 h-[1000px]">
    <div className="flex justify-between">
    <div className="mt-8 items-center flex justify-start">
      <div className="h-16 w-32">
        <Image src={logo} alt="logo">
        </Image>
      </div>
      <div className="gird grid-cols-12  relative">
        <input className="bg-[#F9FAFB] w-[500px] py-2 pl-2 col-span-9 rounded-md ml-3 text-sm" type="text" placeholder="Rechercher un produit"></input>
        <button className="col-span-3 asbolute pt-1 w-6 h-6 -ml-8"><Image className="w-4 h-4" src={searchIcon} alt="button"></Image></button>
      </div>
    </div>
      <div className="mt-8 flex justify-between items-center">
       <div className="flex items-center mr-2">
        <Image className="w-3 h-4 mr-1" src={bulb} alt="loading"></Image>
        <div className="text-sm">Inspirations</div>
       </div>
       <div className="flex items-center mr-2">
        <Image className="w-5 h-5 mr-1" src={love} alt="loading"></Image>
        <div className="text-sm mr-1">Mes favoris</div>
        <div className="text-sm rounded-full px-1 bg-[#CAD2D566]">24</div>
       </div>
       <div className="flex items-center rounded-md mr-2 p-2 bg-[#0093D0]">
        <Image className="mr-2 w-4" src={cartIcon} alt="Loading"></Image>
        <div className="text-sm text-white">panier</div>
       </div>
       <div className="flex items-center mr-2">
        <Image className="h-11 w-11 mr-2" src={avatar} alt="Laoding"></Image>
        </div>
        <div className="flex items-center mr-2">
          <div className="text-sm mr-1">FR</div>
          <Image className="w-2 mr-2" src={downarrow} alt="Loading"></Image>
        </div>
      </div>
    </div>
    <NavBar/>
    <div className="py-4 flex items-center">
      <div className="pr-1">Home</div>
      <Image className=" w-2 pr-1" src={dot} alt="elllipse"></Image>
      <span>Art de la table</span>
    </div>
    <MainContainer/>
    <SecondContainer/>
    <ThirdContainer/>
    <FourthContainer/>
    <FifthComponent/>
    <Footer/>
    </div>
  )
}

export default Header