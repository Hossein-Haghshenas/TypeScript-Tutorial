import { InputProps } from "./Input.types";

function Input({ value, handleChange }: InputProps) {
  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        /* onChange={(event) => handleChange(event)} */ onChange={
          handleChangeInput
        }
      />
    </div>
  );
}

export default Input;
