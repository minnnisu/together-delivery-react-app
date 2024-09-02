import "./SignInLayout.css";

const SignInLayout = ({ children }) => {
  const [logoTitle, subTitle, idInput, pwInput, signInButton, signUpButton] =
    children;

  return (
    <div className="sign-in-container">
      <div className="main-logo-container">{logoTitle}</div>
      <div className="sub-title-container">{subTitle}</div>
      <div className="id-input-container">{idInput}</div>
      <div className="pw-input-container">{pwInput}</div>
      <div className="sign-in-btn-container">{signInButton}</div>
      <div className="sign-up-btn-container">{signUpButton}</div>
    </div>
  );
};

export default SignInLayout;
