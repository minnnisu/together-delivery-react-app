import { useState } from "react";
import { toast } from "react-toastify";

const useSignInInput = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleValidateError = (error) => {
    toast.warning(
      "아이디 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.",
      { position: "bottom-center" }
    );
  };

  const handleInputFormSubmitError = () => {
    toast.warning(
      "아이디 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.",
      { position: "bottom-center" }
    );
    setUsername("");
    setPassword("");
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleValidateError,
    handleInputFormSubmitError,
  };
};

export default useSignInInput;
