declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};
// Define the type for the response data
interface FarmingResponse {
  // Define the properties of the response you expect
  success: boolean;
  message?: string;

  remainingTime?: string;
  // Add other properties as needed
}

// Define the type for the input parameters
type StartFarmingInput = string; // In this case, it's just userId as a string

export async function startFarming(
  userId: StartFarmingInput
): Promise<FarmingResponse> {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = `https://bossblock.xyz/farming/start/${userId}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data: FarmingResponse = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to start farming");
  }
}

//Get farming time and reward
export async function getFarmingReward(userId: StartFarmingInput) {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = `https://bossblock.xyz/farming/check/${userId}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data: FarmingResponse = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get farming details");
  }
}

//Collect farming reward
export async function collectFarmingReward(userId: StartFarmingInput) {
  // const API_USER_URL = process.env.VITE_API_USER_URL;
  const url = `https://bossblock.xyz/farming/collect/${userId}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data: FarmingResponse = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to collect farming reward");
  }
}
