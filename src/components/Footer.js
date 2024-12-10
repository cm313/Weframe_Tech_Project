import React from 'react'
import logo from "../images/Group.png"
import Image from 'next/image'
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div className="flex mt-6 border-t ">
      <Image src={logo} className="w-32 h-14" alt="logo"></Image>
      <div className="text-sm mx-4">
        <div>INFOS PRATIQUES</div>
        <div>À propos</div>
        <div>Livraisons & Reprises</div>
        <div>Mode d’emploi</div>
        <div>F.A.Q</div>
      </div>
      <div className="text-sm mx-4">
        <div>LÉGAL</div>
        <div>Mentions légales</div>
        <div>CGU</div>
        <div>CGV</div>
        <div>Politique de confidentialité</div>
      </div>
      <div className="text-sm mx-4">
        <div>MON COMPTE</div>
        <div>Accéder à mon compte</div>
        <div>Ma liste d’envie</div>
        <div>Créer un compte</div>
        <div>Mot de passe oublié</div>
      </div>
      <div className=" ml-96">
         <div>NOUS SUIVRE</div>
         <div className="flex">
          <Image className="mx-2" src={twitter} alt=""></Image>
          <Image className="mx-2" src={insta} alt=""></Image>
          <Image className="mx-2" src={linkedin} alt=""></Image>
         </div>
      </div>
    </div>
  )
}

export default Footer