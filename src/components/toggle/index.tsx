type Props<A extends string | number> = {
  options: A[];
  selected: A;
  onSelected: (option: A) => void;
};

const Toggle = <A extends string | number>({
  options,
  selected,
  onSelected,
}: Props<A>) => {
  return (
    <div className="flex w-full">
      {options.map((option) => (
        <button
          type="button"
          className={`w-full first:rounded-l-lg first:border-l border-l-0 last:rounded-r-lg border border-black p-2 ${
            option === selected ? "bg-amber-200" : "bg-white"
          }`}
          key={option}
          onClick={() => onSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
