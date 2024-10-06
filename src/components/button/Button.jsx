import "./Button.css";

export const Button = (props) => {
  //Obj Distructing autwn ton properties apo to OBJ props
  const {
    value,
    onButtonClick,
    isEqualSign = false,
    isColorRed = false,
    isColorGreen = false,
  } = props;

  // Handle button click and pass the value to the parent
  const handleClick = () => {
    onButtonClick(value); // Pass the button value directly
  };

  return (
    <input
      value={value}
      //Pername to callback handleClick sto prop onClick to JSX Element input
      onClick={handleClick}
      className={`btn 
        ${isEqualSign ? "equalSign" : ""} 
        ${isColorRed ? "colorRed" : ""}
        ${isColorGreen ? "colorGreen" : ""}
        `}
      readOnly
    />
  );
};
