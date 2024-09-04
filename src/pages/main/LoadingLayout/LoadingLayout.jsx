import "./LoadingLayout.css";

const LoadingLayout = ({ children }) => {
  const [logoTitle, message] = children;

  return (
    <div className="loading-layout-container">
      <div className="logo-title">{logoTitle}</div>
      <div className="message">{message}</div>
    </div>
  );
};

export default LoadingLayout;
