declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
//send game scores
interface GameProps {
  gameScores: object;
}
export async function gameScoresUpdate(gameScores: GameProps) {
  // const GAME_API = process.env.VITE_API_GAME_URL;
  const url = `https://bossblock.centralus.cloudapp.azure.com/update-score`;
  const registerScores = JSON.stringify(gameScores);
  console.log(gameScores, registerScores);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: registerScores,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.error) throw Error();
    return data;
  } catch (error) {
    throw Error(`Could not update score`);
  }
}
