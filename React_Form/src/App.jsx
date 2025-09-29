import "./App.css";
import ControlField from "./components/ControledField/ControlField";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductManagement from "./components/ProductManagement/ProductManagement";
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

      {/* <HookForm /> */}

      {/* <ProductManagement /> */}

      <FamilyTree />
    </div>
  );
}

export default App;
