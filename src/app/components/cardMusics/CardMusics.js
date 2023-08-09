"use client";

import Image from 'next/image'
import { useState } from 'react';

function CardMusics() {

  const [musicas, setMusicas] = useState([
    {
      img: "/albun.jpg", 
      author: "Nirvana",
      music: "smells like",
      alt: "Capa do album da banda nirvana" 
    },
    {
      img: "/tupac.jpg", 
      author: "Tupac", 
      music: "ambitionz az a ridah",
      alt: "Capa do album do 2pac" 
    },
    {
      img: "/racionais.jpg", 
      author: "Racionais", 
      music: "Vida Loka pt 2",
      alt: "Capa do album do Racionais" 
    },
    {
      img: "/ac-dc.jpg", 
      author: "AC DC", 
      music: "Black in Back",
      alt: "Capa do album da banda nirvana" 
    },
    {
      img: "/aventura-noturna.jpg",
      author: "Mc Kevin",
      music: "Aventura Noturna", 
      alt: "Capa do album Avenrua Noturna" 
    },
    {
      img: "/cavalo-de-troia.jpg", 
      author: "Mc Kevin",
      music: "Cavalo de Troia", 
      alt: "Capa do album Cavalo de Troia" 
    },
  ]);

  const ImgPX = 1000

  return (
    <div className='grid grid-cols-6 gap-4 mt-4'>
      {
        musicas.map((musica, index) => (
          <a key={index} className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
            <Image src={musica.img} className='w-full' width={ImgPX} height={ImgPX} alt="Capa do albun da nirvana" />
            <strong className='font-semibold'>
              {musica.author}
            </strong>
            <span className='text-sm text-zinc-400'>
              {musica.music}
            </span>
          </a>
        ))
      }
    </div>
  );
};

export default CardMusics;