import React from "react";
import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h1>Aunty</h1>
      <section className="text-center flex justify-around mt-7 gap-4">
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Cousin cousin={"Rhoima"} />
        </div>
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Cousin cousin={"Halima"} />
        </div>
      </section>
    </div>
  );
};

export default Aunty;
