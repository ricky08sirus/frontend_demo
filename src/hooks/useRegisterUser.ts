import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerTelegramUsers } from "../services/apiRegister"; // Your API function

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  const {
    isPending: isRegistering,
    data: user,
    error: userError,
    isSuccess: isRegistered,
    reset,
    mutate: registerUser,
  } = useMutation({
    mutationFn: (userDetails: object) => registerTelegramUsers(userDetails),
    onSuccess(data) {
      queryClient.setQueryData(["userData"], data);
    },
  });

  return {
    registerUser,
    isRegistering,
    user,
    userError,
    isRegistered,
    reset,
  };
};
