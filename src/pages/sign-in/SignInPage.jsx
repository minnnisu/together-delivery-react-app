import BigButton from "../../components/BigButton/BigButton";
import LogoTitle from "../../components/LogoTitle/LogoTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import TextInput from "../../components/TextInput/TextInput";
import SignUpTextButton from "./components/SignUpTextButton/SignUpTextButton";
import SignInLayout from "./layout/SignInLayout";

const SignInPage = () => {
  return (
    <SignInLayout>
      <LogoTitle />
      <SubTitle>{"대학생들을 위한 배달비 절약 서비스"}</SubTitle>
      <TextInput placeholder="아이디" onChange={() => {}} />
      <TextInput placeholder="비밀번호" type="password" onChange={() => {}} />
      <BigButton>{"로그인"}</BigButton>
      <SignUpTextButton />
    </SignInLayout>
  );
};

export default SignInPage;
