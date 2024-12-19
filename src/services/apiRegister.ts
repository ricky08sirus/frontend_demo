declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
export async function registerTelegramUsers(userDetails: object) {
  const userData = JSON.stringify(userDetails);
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = `https://bossblock.xyz/user`;
  // const url = `${API_USER_URL}/user`;

  try {
    const res = await fetch(url, {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    console.log(data);
    return data;
  } catch {
    throw Error("Failed registering telegram user");
  }
}

//To get user Stats
export async function getStats(userId: string) {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  try {
    if (!userId) return;
    const res = await fetch(`https://bossblock.xyz/user-stats/${userId}`);
    return res.json();
  } catch {
    throw Error("Failed fetching user stats");
  }
}
