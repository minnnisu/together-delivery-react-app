import "./BlindBigLoadingButton.css";

const BlindBigLoadingButton = () => {
  return (
    <>
      <div className="blind-big-loading-button-gap"></div>
      <div className="blind-big-loading-button">
        <button className="big-loading-button" disabled={true}></button>
      </div>
    </>
  );
};

export default BlindBigLoadingButton;
