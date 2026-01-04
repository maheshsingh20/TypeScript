
const arr: string[] = ["First", "Second", "Third", "Fourth", "Fifth"];

const First = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
      {arr.map((item, index) => (
        <div key={index} className="bg-red-700 p-4 rounded-s text-center font-medium">
          {item}
        </div>
      ))}
    </div>
  );
};

export default First;
