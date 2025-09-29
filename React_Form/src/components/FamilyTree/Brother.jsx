import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);

  return (
    <div>
      <h3>Brother</h3>
      <button className="btn mt-4" onClick={() => setMoney(money + 1000)}>
        Add TK
      </button>
    </div>
  );
};

export default Brother;
