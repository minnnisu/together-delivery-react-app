import { useNavigate } from "react-router-dom";
import BigButton from "../../components/BigButton/BigButton";
import BigLoadingButton from "../../components/BigLoadingButton/BigLoadingButton";
import LogoTitle from "../../components/LogoTitle/LogoTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import TextInput from "../../components/TextInput/TextInput";
import useSignInInput from "../../hooks/sign-in/useSignInInput";
import useSignInSubmit from "../../hooks/sign-in/useSignInSubmit";
import SignUpTextButton from "./components/SignUpTextButton/SignUpTextButton";
import SignInLayout from "./layout/SignInLayout";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleInputFormSubmitSuccess = () => {
    navigate("/home");
  };

  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleValidateError,
    handleInputFormSubmitError,
  } = useSignInInput();

  const { handleSignInSubmit, loginMutation } = useSignInSubmit({
    username,
    password,
    onValidateError: handleValidateError,
    onSubmitError: handleInputFormSubmitError,
    onSubmitSuccess: handleInputFormSubmitSuccess,
  });

  return (
    <SignInLayout>
      <LogoTitle />
      <SubTitle>{"대학생들을 위한 배달비 절약 서비스"}</SubTitle>
      <TextInput
        placeholder="아이디"
        value={username}
        onChange={(event) => handleUsernameChange(event)}
      />
      <TextInput
        placeholder="비밀번호"
        value={password}
        type="password"
        onChange={(event) => handlePasswordChange(event)}
      />
      {!loginMutation.isLoading ? (
        <BigButton onClick={() => handleSignInSubmit()}>{"로그인"}</BigButton>
      ) : (
        <BigLoadingButton />
      )}

      <SignUpTextButton onClick={() => navigate("/signUp")} />
    </SignInLayout>
  );
};

export default SignInPage;
