import axios from "axios";
import { useMutation } from "react-query";
import {
  InternalServerError,
  NicknameDuplicationError,
} from "../../exception/errors";

const useNicknameDuplicationCheck = (onSuccess, onError) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const nicknameDuplicationCheckMutation = useMutation(
    (data) => axios.post(`${baseURL}/auth/check/nickname`, data),
    {
      onSuccess,
      onError: (error) => {
        if (error.response?.data.errorCode === "DuplicatedNicknameError") {
          return onError(new NicknameDuplicationError());
        }

        return onError(new InternalServerError());
      },
    }
  );

  const handleNicknameDuplicationCheck = (nickname) => {
    const data = { nickname };
    nicknameDuplicationCheckMutation.mutate(data);
  };

  return { handleNicknameDuplicationCheck };
};

export default useNicknameDuplicationCheck;
