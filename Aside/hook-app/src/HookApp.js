import CounterApp from "./components/01-useState/CounterApp";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import MultipleCustomHooks from "./components/03-examples/MultipleCustomHooks";
import { FocusScreen } from "./components/04-useRef/FocusScreen";
import RealExampleRef from "./components/04-useRef/RealExampleRef";
import Layout from "./components/05-useLayoutEffect/Layout";
import CallbackHook from "./components/06-memos/CallbackHook";
import MemoHook from "./components/06-memos/MemoHook";
import { Memorize } from "./components/06-memos/Memorize";
import { Padre } from "./components/07-tarea-memo/Padre";
import TodoApp from "./components/08-useReducer/TodoApp";

const HookApp = () => {
  return (
    <div className="container">
      <h1 className="display-1">Hooks App</h1>
      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3 bg-dark">
        <h2 className="text-left text-info fw-bold mt-2">useState</h2>
        <CounterApp />
        <hr className="my-4" />
        <CounterWithCustomHook />
      </div>

      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3 bg-dark">
        <h2 className="text-left text-info fw-bold mt-2">useEffect</h2>
        <SimpleForm />
        <hr className="my-4" />
        <FormWithCustomHook />
      </div>

      <div className="my-4 border border-primary border-3 p-3 bg-dark rounded-3">
        <h2 className="text-left text-info fw-bold mt-2">Examples</h2>
        <MultipleCustomHooks />
      </div>

      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3 bg-dark">
        <h2 className="text-right text-info fw-bold mt-2">useRef</h2>
        <FocusScreen />

        <hr className="my-4" />
        <RealExampleRef />
      </div>

      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3 bg-dark">
        <h2 className="text-right text-info fw-bold mt-2">useLayoutEffect</h2>
      </div>
      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3 bg-dark">
        <h2 className="text-right text-info fw-bold mt-2">useMemo</h2>
        <Memorize />

        <hr className="my-4" />

        <MemoHook />
        <hr className="my-4" />
        <CallbackHook />
        <hr className="my-4" />
        <Padre />
      </div>
      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3 bg-dark">
        <h2 className="text-right text-info fw-bold mt-2">useReducer</h2>
        <TodoApp />
      </div>
    </div>
  );
};

export default HookApp;
