import useUserInfoGet from "../../hooks/user-info/useUserInfoGet";
import HomePage from "../home/HomePage";
import LoadingPage from "../loading/LoadingPage";
import SignInPage from "../sign-in/SignInPage";

const MainPage = () => {
  const { isLoading, isError, isSuccess } = useUserInfoGet();

  if (isLoading) return <LoadingPage />;
  if (isError) return <SignInPage />;
  if (isSuccess) return <HomePage />;
};

export default MainPage;
