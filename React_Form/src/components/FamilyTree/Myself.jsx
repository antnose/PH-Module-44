import Special from "./Special";

const Myself = ({ asset }) => {
  return (
    <div>
      <h3>Myself</h3>
      <div className="border-2 border-amber-200 p-6 rounded-2xl w-full">
        <Special asset={asset} />
      </div>
    </div>
  );
};

export default Myself;
