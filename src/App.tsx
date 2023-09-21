import "./App.css";
import useCopyToClipboard from "./components/clipboard/hooks/useCopyToClipboard";
import Debounce from "./components/debounce";
import { useDebounce } from "./components/debounce/hook/useDebounce";
import { Comments } from "./components/reusability/bad/comments";
import { Button } from "./styles/tailwind/button";
import ContainerQueries from "./styles/tailwind/container-queries";
import { Works } from "./styles/tailwind/dynamic-u-c/Works";
import InputUnstyleable from "./styles/tailwind/input";
import { SpecialButton } from "./styles/tailwind/merge";
import { Truncate } from "./styles/truncate";

function App() {
  const { handleChange, value } = useDebounce();
  const { value: result, handleCopy } = useCopyToClipboard();

  console.log(result);
  return (
    <>
      {value}
      <Debounce handleChange={handleChange} />

      <div
        style={{
          marginTop: 20,
          padding: 20,
          border: "1px solid red",
        }}
      >
        Bad:
        <Comments
          comments={[]}
          nextClicked={() => {}}
          previous={() => {}}
          itemClick={() => {}}
        />
      </div>

      <div>
        PASTED : {result}
        <button
          onClick={() =>
            handleCopy(
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusanda",
            )
          }
        >
          Copy Text
        </button>
      </div>

      <div>
        <Works />
        Merge:
        <SpecialButton className="p-3" />
        <Truncate />
        <InputUnstyleable />
        <ContainerQueries />
        <div>
          Class Variance Authority
          <Button intent="primary" size="medium">
            App Button
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
