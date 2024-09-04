import axios from "axios";
import { useMutation } from "react-query";
import {
  InternalServerError,
  UsernameDuplicationError,
} from "../../exception/errors";

const useUsernameDuplicationCheck = (onSuccess, onError) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const usernameDuplicationCheckMutation = useMutation(
    (data) => axios.post(`${baseURL}/auth/check/username`, data),
    {
      onSuccess,
      onError: (error) => {
        if (error.response?.data.errorCode === "DuplicatedUsernameError") {
          return onError(new UsernameDuplicationError());
        }

        return onError(new InternalServerError());
      },
    }
  );

  const handleUsernameDuplicationCheck = (username) => {
    const data = { username };
    usernameDuplicationCheckMutation.mutate(data);
  };

  return { handleUsernameDuplicationCheck };
};

export default useUsernameDuplicationCheck;
