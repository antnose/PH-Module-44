import React from "react";
import Grandpa from "./Grandpa";

const FamilyTree = () => {
  const asset = "Diamond";
  return (
    <div className="text-center mt-11">
      <h1 className="text-4xl font-bold mb-7">This Is Family Tree</h1>
      <Grandpa asset={asset} />
    </div>
  );
};

export default FamilyTree;
