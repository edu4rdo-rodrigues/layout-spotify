"use client";

import { 
  Play
} from 'lucide-react';

import Image from 'next/image'
import { useState } from 'react';

function CardAlbums() {

  const [musicas, setMusicas] = useState([
    {
      img: "/albun.jpg", 
      name: "Nirvana", 
      alt: "Capa do album da banda nirvana" 
    },
    {
      img: "/tupac.jpg", 
      name: "Tupac", 
      alt: "Capa do album do 2pac" 
    },
    {
      img: "/racionais.jpg", 
      name: "Racionais", 
      alt: "Capa do album do Racionais" 
    },
    {
      img: "/ac-dc.jpg", 
      name: "AC DC", 
      alt: "Capa do album da banda nirvana" 
    },
    {
      img: "/aventura-noturna.jpg", 
      name: "Aventura Noturna", 
      alt: "Capa do album Avenrua Noturna" 
    },
    {
      img: "/cavalo-de-troia.jpg", 
      name: "Cavalo de Troia", 
      alt: "Capa do album Cavalo de Troia" 
    },
  ]);

  const ImgPX = 104
  
  let iconStylesPlay = { color: "black", fill: "black" };

  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      {
        musicas.map((musica, index) => (
          <a key={index} className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image 
              src={ musica.img } 
              width={ImgPX} 
              height={ImgPX} 
              alt={ musica.alt } 
            />
            <strong>{ musica.name }</strong>  
            <button className='w-12 h-12 flex items-center justify-centers pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play style={iconStylesPlay} />
            </button>          
          </a>
        ))
      }
      
    </div>
  );
};

export default CardAlbums;