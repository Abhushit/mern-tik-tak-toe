import "./index.css";

interface BoxButtonprops {
    value: string;
    handleBoxClick: () => void;
    disabled?: boolean
}

const BoxButton = ({ handleBoxClick, value, disabled }:BoxButtonprops) => {
  return (
    <button className="box_button" onClick={handleBoxClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default BoxButton;
