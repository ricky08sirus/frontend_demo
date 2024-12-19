declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
export async function getReferredUsers(userId: string) {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = `https://bossblock.xyz/referred-users/${userId}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data: any = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get referred details");
  }
}
