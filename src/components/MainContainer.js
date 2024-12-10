import React from 'react';
import Image from "next/image";
import device from "../images/LocationCheesebigpicture.png";
import table from "../images/Table.png";
import like from "../images/icon.png";
import scale from "../images/scale.png";
import frame from "../images/Frame.png";

const MainContainer = () => {
  return (
    <div className="flex">
    <div className="w-1/2 mr-2">
          <div className=" h-96 bg-[#F8F6F4] relative">
          <Image className="w-10 h-10 my-2 ml-2 " src={table} alt="Table"></Image>
          <Image className="w-10 h-10 my-2 ml-2" src={table} alt="Table"></Image>
          <Image className="w-10 h-10 my-2 ml-2" src={table} alt="Table"></Image>
          <Image className="w-10 h-10 my-2 ml-2" src={table} alt="Table"></Image>
          <Image className="w-[70%] h-[85%] -mt-44 absolute m-auto right-0 left-0" src={device} alt="device"></Image>
          </div>
          <div className="mt-2">
          <div>Description produit</div> 
          <div className="text-sm text-wrap">Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</div>
          </div>
    </div>
    <div className="w-1/2 h-96">
       <div className="flex justify-between">
         <div>Cheese – appareil à raclette 1/2 roue</div>
         <div><Image src={like} alt="like"></Image></div>
       </div>
       <div><span>39,50€</span><span>/pièce</span></div>
       <div className="flex justify-between border-t border-b ">
          <div className="flex py-3">
           <Image src={scale} alt="scale"></Image>
           <div>20cm</div>
           <Image src={frame} alt="frame"></Image>
           <div>50cm</div>
          </div>
          <div>
          RÉF : VABGN5
          </div>
          </div>
          <div>
          Location appareil à raclette - Raclette traditionnelle 1/2 roue
          Réglable en hauteur
          Appareil à raclette professionnel
          Boîtier de chauffe horizontal réglable en hauteur
           
          220V
          900W
         </div>
         <div className="flex border-t mt-60 pt-4">
            <button>
              <div className="flex border rounded-md p-2 items-center">
              <div className="mx-2">-</div>
              <div className="mx-2">1</div>
              <div className="mx-2">+</div>
              </div>
              </button>
            <button className="w-full rounded-md bg-[#5CD2DD] ml-1">
            Ajouter au panier
            </button>
         </div>
         <div className="mt-7">
         <div className="flex p-4 rounded-md justify-between bg-[#FBF9F899]">
          <div>Livraisons</div>
          <div>+</div>
         </div>
         <div className="flex  p-4 rounded-md justify-between bg-[#FBF9F899]">
          <div>Livraisons</div>
          <div>+</div>
         </div>
         </div>
    </div>
    </div>
  )
}

export default MainContainer