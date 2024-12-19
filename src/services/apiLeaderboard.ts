declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
type StartFarmingInput = string;
type CurrentPageInput = number;

export async function getLeaderboard(
  userId: StartFarmingInput,
  nextPage?: CurrentPageInput
) {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = nextPage
    ? `https://bossblock.xyz/leaderboard?userId=${userId}&page=${nextPage}`
    : `https://bossblock.xyz/leaderboard?userId=` + userId;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get leaderboard data");
  }
}
