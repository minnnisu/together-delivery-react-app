import "./SignUpLayout.css";

const SignUpLayout = ({ children }) => {
  const [
    logoTitle,
    username,
    checkButton,
    password,
    passwordCheck,
    name,
    nickname,
    email,
    university,
    telephone,
    signUpButton,
  ] = children;

  return (
    <div className="signup-layout-container">
      <div className="logo-title">{logoTitle}</div>
      <div className="signup-input-container">
        <div className="username-container">
          <div className="username">{username}</div>
          <div className="username-check-button">{checkButton}</div>
        </div>
        <div className="password">{password}</div>
        <div className="password-check">{passwordCheck}</div>
        <div className="name">{name}</div>
        <div className="nickname">{nickname}</div>
        <div className="email">{email}</div>
        <div className="university">{university}</div>
        <div className="telephone">{telephone}</div>
      </div>
      {signUpButton}
    </div>
  );
};

export default SignUpLayout;
