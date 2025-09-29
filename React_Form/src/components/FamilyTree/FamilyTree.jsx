import { createContext } from "react";
import Grandpa from "./Grandpa";

export const AssetsContext = createContext("");

const FamilyTree = () => {
  const asset = "Diamond";
  const newAsset = "Gold";
  return (
    <div className="text-center mt-11">
      <h1 className="text-4xl font-bold mb-7">This Is Family Tree</h1>
      <AssetsContext.Provider value={newAsset}>
        <Grandpa asset={asset} />
      </AssetsContext.Provider>
    </div>
  );
};

export default FamilyTree;
