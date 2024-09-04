import SignUpLayout from "./layout/SignUpLayout";
import LogoTitle from "../../components/LogoTitle/LogoTitle";
import CheckButton from "./components/CheckButton/CheckButton";
import SignUpInput from "./components/SignUpInput/SignUpInput";
import BlindBigButton from "../../components/BlindBigButton/BlindBigButton";

const SignUpPage = () => {
  return (
    <SignUpLayout>
      <LogoTitle />
      <SignUpInput label={"아이디"} placeholder={"아이디"} />
      <CheckButton>{"중복 확인"}</CheckButton>
      <SignUpInput label={"비밀번호"} placeholder={"비밀번호"} />
      <SignUpInput label={"비밀번호 확인"} placeholder={"비밀번호 확인"} />
      <SignUpInput label={"이름"} placeholder={"홍길동"} />
      <SignUpInput label={"닉네임"} placeholder={"코린이"} />
      <SignUpInput label={"이메일"} placeholder={"hanggi@naver.com"} />
      <SignUpInput label={"대학교"} placeholder={"한끼 대학교"} />
      <SignUpInput label={"전화번호"} placeholder={"010 1234 5678"} />
      <BlindBigButton>{"회원가입"}</BlindBigButton>
    </SignUpLayout>
  );
};

export default SignUpPage;
