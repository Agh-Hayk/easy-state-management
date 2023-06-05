import Form from "./components/List/Form";
import Texts from "./components/List/Texts";
import { TextListProvider } from "./components/List/context";

function App() {
  return (
    <div className="App">
      <TextListProvider>
        <Form />
        <Texts />
      </TextListProvider>
    </div>
  );
}

export default App;
