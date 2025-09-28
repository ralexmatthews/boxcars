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
  <select
    className="text-lg px-2 py-4 overflow-y-auto rounded border border-black w-full max-w-48"
    value={selected}
    onChange={(e) => onSelected(e.target.value as A)}
  >
    {options.map((value) => (
      <option key={value}>{value}</option>
    ))}
  </select>
);

export default Select;
