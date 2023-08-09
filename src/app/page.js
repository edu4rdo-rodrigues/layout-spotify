
import CardMusic from './components/cardAlbums/CardAlbums';
import CardPlaylist from './components/cardPlaylist/CardPlaylist';
import CardAlbum from './components/cardMusics/CardMusics';
import Navbar from './components/navbar/Navbar';
import TresPontinhos from './components/tresPontinhos/TresPontinhos';
import ButtonsLeftRight from './components/buttonsLeftRight/ButtonsLeftRight';
import Footer from './components/footer/Footer';

function Home() {

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <TresPontinhos />
          <Navbar />
          <CardPlaylist />
        </aside>
        <main className='flax-1 p-6 w-screen'>
          <ButtonsLeftRight />
          <h1 className='font-semibold text-3xl mt-10'>
            Good Afternon
          </h1>
          <CardMusic />
          <h2 className='font-semibold text-2xl mt-10'>
            Made for Diego Schell Fernandes
          </h2>
          <CardAlbum />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;