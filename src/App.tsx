import "./App.css";
import Debounce from "./components/debounce";
import { useDebounce } from "./components/debounce/hook/useDebounce";

function App() {
  const { handleChange, value } = useDebounce();
  return (
    <>
      {value}
      <Debounce handleChange={handleChange} />
    </>
  );
}

export default App;
