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
    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-white transition-colors appearance-none cursor-pointer outline-none"
    value={selected}
    onChange={(e) => onSelected(e.target.value as A)}
    style={{
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
      backgroundPosition: "right 0.5rem center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "1.5em 1.5em",
      paddingRight: "2.5rem",
    }}
  >
    {options.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
);

export default Select;
