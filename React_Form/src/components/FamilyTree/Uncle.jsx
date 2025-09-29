import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className="text-center flex justify-around mt-7 gap-4">
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Cousin cousin={"Rhoim"} />
        </div>

        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Cousin cousin={"Korim"} />
        </div>
      </section>
    </div>
  );
};

export default Uncle;
