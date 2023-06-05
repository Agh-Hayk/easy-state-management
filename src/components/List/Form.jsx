import { useState } from "react";
import { ADD_TEXT } from "./actinos";
import { useTextListProviderContext } from "./context";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useTextListProviderContext();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!!inputValue) {
      dispatch({
        type: ADD_TEXT,
        payload: {
          name: inputValue,
          id: Math.random(),
        },
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
