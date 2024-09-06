import "./BlindBigButton.css";

const BlindBigButton = ({ children, disabled = false, onClick }) => {
  return (
    <>
      <div className="blind-big-button-gap"></div>
      <div className="blind-big-button">
        <button className="big-button" disabled={disabled} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default BlindBigButton;
