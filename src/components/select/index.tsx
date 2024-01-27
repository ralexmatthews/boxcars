type Props<A extends string> = {
  options: readonly A[];
  selected: A;
  onSelected: (newOption: A) => void;
};

const Select = <A extends string>({
  options,
  selected,
  onSelected,
}: Props<A>) => (
  <div className="max-h-64 min-[400px]:max-h-[50vh] overflow-y-auto rounded border w-48">
    {options.map((value) => (
      <div
        key={value}
        className={`px-2 py-1 w-full ${
          value === selected ? "bg-gray-300" : ""
        }`}
      >
        <button
          type="button"
          className="w-full text-left"
          onClick={() => onSelected(value)}
        >
          {value}
        </button>
      </div>
    ))}
  </div>
);

export default Select;
