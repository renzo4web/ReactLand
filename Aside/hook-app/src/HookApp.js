import CounterApp from "./components/01-useState/CounterApp";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";

const HookApp = () => {
  return (
    <div className="container">
      <h1 className="display-1">Hooks App</h1>
      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3">
        <h2 className="text-left mt-2">useState</h2>
        <CounterApp />
        <hr className="my-4" />
        <CounterWithCustomHook />
      </div>
      <div className="my-4 border border-primary border-3 p-3 bg-light rounded-3">
        <h2 className="text-left mt-2">useEffect</h2>
        <SimpleForm />
      </div>
    </div>
  );
};

export default HookApp;
