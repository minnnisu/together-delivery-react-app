import { toast } from "react-toastify";
import { validateSignUpForm } from "./SignUpInputValidator";
import { useMutation } from "react-query";
import axios from "axios";

const useSignUpFormSubmit = (navigateHome) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const signUpMutation = useMutation((data) =>
    axios.post(`${baseURL}/auth/signup`, data)
  );

  const handleSignUpFormSubmit = (inputs) => {
    const result = validateSignUpForm(inputs);
    if (!result) {
      toast.warning("입력한 정보가 올바른지 확인해주세요.", {
        position: "bottom-center",
      });

      return;
    }

    const data = {
      username: inputs.username.value,
      password: inputs.password.value,
      passwordCheck: inputs.passwordCheck.value,
      name: inputs.name.value,
      nickname: inputs.nickname.value,
      email: inputs.email.value,
      telephone: inputs.telephone.value,
      college: inputs.college.value,
    };

    signUpMutation.mutate(data, {
      onSuccess: () => {
        navigateHome();
      },
      onError: () => {
        toast.error("일시적인 오류가 발생하였습니다.", {
          position: "bottom-center",
        });
      },
    });
  };

  return { signUpMutation, handleSignUpFormSubmit };
};

export default useSignUpFormSubmit;
