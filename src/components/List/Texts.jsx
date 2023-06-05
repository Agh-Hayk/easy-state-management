import { DELETE_TEXT } from "./actinos";
import { useTextListProviderContext } from "./context";

const Texts = () => {
  const { state, dispatch } = useTextListProviderContext();

  return (
    <>
      {state.length ? (
        <ul>
          {state.map((el) => (
            <li
              key={el.id}
              style={{
                marginBottom: "10px",
              }}
            >
              {el.name}
              <button
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  dispatch({
                    type: DELETE_TEXT,
                    payload: {
                      id: el.id,
                    },
                  });
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        "no data"
      )}
    </>
  );
};

export default Texts;
