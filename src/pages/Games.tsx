//@ts-ignore
import useLocalScript from "../features/game/ExternalScript";
declare global {
  interface Window {
    finalScore: number; // Define finalScore as a number
  }
}
const Games = () => {

  const handleGoBack = () => {
    window.location.href = "/";
  };
  window.finalScore = 0;
  const { loaded, error } = useLocalScript("game");
  console.log(loaded, error);

  if (error) {
    return <div>Error loading script: {error.message}</div>;
  }

  if (!loaded) {
    return <div> Sorry can't load game</div>;
  }

  return (
    <div className="absolute z-50 font-sixty-four font-extrabold left-1/2 -translate-x-1/2 text-red-400">
      <button className="flex justify-center gap-2 items-center" onClick={handleGoBack}> <span className="text-xs mt-1">close</span></button>
    </div>
  );
};

export default Games;
