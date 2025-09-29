import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = ({ asset }) => {
  return (
    <div className="border-2 border-amber-200 p-4 rounded-2xl">
      <h1>This is Grandpa</h1>
      <section className="text-center flex justify-around mt-7 gap-4">
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Dad asset={asset} />
        </div>
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Uncle />
        </div>
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Aunty />
        </div>
      </section>
    </div>
  );
};

export default Grandpa;
