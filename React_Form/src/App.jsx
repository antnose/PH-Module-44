import "./App.css";
import ControlField from "./components/ControledField/ControlField";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlField from "./components/UnControlField/UnControlField";

function App() {
  return (
    <div className="lg:max-w-7xl mx-auto lg:px-0 px-12 ">
      <h1 className="text-center text-5xl font-bold mt-4">
        Explore react form
      </h1>

      {/* <SimpleForm /> */}

      {/* <FormAction /> */}

      {/* <ControlField /> */}

      {/* <UnControlField /> */}

      <HookForm />
    </div>
  );
}

export default App;
