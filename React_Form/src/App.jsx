import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  return (
    <div className="lg:max-w-7xl mx-auto lg:px-0 px-12 ">
      <h1 className="text-center text-5xl font-bold mt-4">
        Explore react form
      </h1>
      <SimpleForm />
    </div>
  );
}

export default App;
