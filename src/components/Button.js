const button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn" id="btn-button"
    >
      {text}
    </button>
  );
};

button.defaultProps = {
  color: "steelBlue",
};
export default button;
