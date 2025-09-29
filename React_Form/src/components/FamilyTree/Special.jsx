import { useContext } from "react";
import { AssetsContext } from "./FamilyTree";

const Special = ({ asset }) => {
  const newAsset = useContext(AssetsContext);
  return (
    <div>
      <h3>Special: {newAsset} </h3>
    </div>
  );
};

export default Special;
