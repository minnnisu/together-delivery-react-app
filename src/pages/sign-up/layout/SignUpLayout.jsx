import "./SignUpLayout.css";

const SignUpLayout = ({ children }) => {
  const [
    logoTitle,
    username,
    userNameCheckButton,
    password,
    passwordCheck,
    name,
    nickname,
    nickNameCheckButton,
    email,
    university,
    telephone,
    signUpButton,
  ] = children;

  return (
    <div className="signup-layout-container">
      <div className="logo-title">{logoTitle}</div>
      <div className="signup-input-container">
        <div className="row-flex-container">
          <div className="text-input">{username}</div>
          <div className="duplication-check-button">{userNameCheckButton}</div>
        </div>
        <div className="password">{password}</div>
        <div className="password-check">{passwordCheck}</div>
        <div className="name">{name}</div>
        <div className="row-flex-container">
          <div className="text-input">{nickname}</div>
          <div className="duplication-check-button">{nickNameCheckButton}</div>
        </div>
        <div className="email">{email}</div>
        <div className="university">{university}</div>
        <div className="telephone">{telephone}</div>
      </div>
      {signUpButton}
    </div>
  );
};

export default SignUpLayout;
