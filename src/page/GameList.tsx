import Header from '../components/gamelist/Header';
import GameCard from '../components/gamelist/GameCard';

const GameList = () => {
  return (
    <div className="bg-[url('/public/gameBg.png')] h-full justify-start flex gap-24 flex-col bg-center bg-cover px-4">
      <Header />
      <div className='h-8/12 overflow-auto flex flex-col items-center justify-around gap-y-6 w-full'>
           {
        Array.from({ length: 10 }, (_, index) => (
          <div key={index} className='w-full'>
            <GameCard title={`Game ${index + 1}`} />
          </div>
        ))
      }
   </div>
    </div>
  )
}

export default GameList