"use client";

import { useState } from "react";

function CardPlaylist() {
  const [musicas, setMusicas] = useState([
    {name: 'Hot Hist Brasil'},
    {name: 'Aniver Funk'},
    {name: 'My Playlist'},
    {name: 'Top Brasil'}
  ])

  return (
    <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
      {musicas.map((musica, index) => (
        <a key={index} className='text-sm text-zinc-400 hover:text-zinc-100'>
          { musica.name }
        </a>
      ))}
    </nav>
  );
};

export default CardPlaylist