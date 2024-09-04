import axios from "axios";
import { BlankTextInputError } from "../../exception/errors";
import { useMutation } from "react-query";

const validateSignInForm = (username, password) => {
  if (username === null || username === "" || username.trim() === "") {
    throw new BlankTextInputError({ fieldName: "username" });
  }

  if (password === null || password === "" || password.trim() === "") {
    throw new BlankTextInputError({ fieldName: "password" });
  }
};

const useSignInSubmit = ({
  username,
  password,
  onValidateError,
  onSubmitError,
  onSubmitSuccess,
}) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const loginMutation = useMutation(
    () => axios.post(`${baseURL}/login`, { username, password }),
    {
      onSuccess: (response) => {
        localStorage.setItem("at", response.data.accessToken);
        localStorage.setItem("rt", response.data.refreshToken);
      },
      onError: () => {
        onSubmitError();
      },
    }
  );

  const handleSignInSubmit = () => {
    try {
      validateSignInForm(username, password);
      loginMutation.mutate();
      onSubmitSuccess();
    } catch (error) {
      onValidateError(error);
    }
  };

  return { handleSignInSubmit, loginMutation };
};

export default useSignInSubmit;
