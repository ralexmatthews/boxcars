type Props<A extends string> = {
  options: readonly A[];
  selected: A;
  onSelected: (newOption: A) => void;
};

const SelectList = <A extends string>({
  options,
  selected,
  onSelected,
}: Props<A>) => (
  <div className="max-h-64 min-[400px]:max-h-[50vh] overflow-y-auto rounded border border-black w-48">
    {options.map((value) => (
      <div
        key={value}
        className={`px-2 py-1 w-full ${
          value === selected ? "bg-amber-100" : ""
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

export default SelectList;
