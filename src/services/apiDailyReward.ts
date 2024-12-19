declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
export async function dailyReward(userId: string) {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = `https://bossblock.xyz/claim-daily-bonus/${userId}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.error) throw Error();
    return data;
  } catch (error) {
    throw Error(`Daily bonus already claimed today`);
  }
}
