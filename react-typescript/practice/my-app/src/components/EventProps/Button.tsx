import { PropTypes } from "./Button.types";

function Button({ handleClick }: PropTypes) {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 5)}>say hello</button>
    </div>
  );
}

export default Button;
