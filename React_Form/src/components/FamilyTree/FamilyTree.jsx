import { createContext, useState } from "react";
import Grandpa from "./Grandpa";

export const AssetsContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const asset = "Diamond";
  const newAsset = "Gold";
  const [money, setMoney] = useState(0);

  return (
    <div className="text-center mt-11">
      <h1 className="text-4xl font-bold mb-7">This Is Family Tree</h1>
      <p className="text-2xl font-bold mb-7">Totally family money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetsContext.Provider value={newAsset}>
          <Grandpa asset={asset} />
        </AssetsContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;
