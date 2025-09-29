import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      <h1>Dad</h1>
      <section className="text-center flex justify-around mt-7 gap-4">
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Myself />
        </div>
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Brother />
        </div>
        <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
          <Sister />
        </div>
      </section>
    </div>
  );
};

export default Dad;
