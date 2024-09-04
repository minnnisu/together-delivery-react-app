import LogoTitle from "../../components/LogoTitle/LogoTitle";
import SubTitle from "../../components/SubTitle/SubTitle";
import LoadingLayout from "../main/LoadingLayout/LoadingLayout";

const LoadingPage = () => {
  return (
    <LoadingLayout>
      <LogoTitle />
      <SubTitle>{"잠시만 기다려주세요...!"}</SubTitle>
    </LoadingLayout>
  );
};

export default LoadingPage;
