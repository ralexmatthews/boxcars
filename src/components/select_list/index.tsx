import classNames from "classnames";

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
  <div className="max-h-64 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-sm w-full">
    {options.map((value) => (
      <div
        key={value}
        className={classNames(
          "border-b border-gray-100 last:border-b-0",
          value === selected ? "bg-primary" : "hover:bg-gray-50",
        )}
      >
        <button
          type="button"
          className={classNames(
            "w-full flex text-left px-4 py-3 text-sm transition-colors",
            value === selected ? "text-white font-medium" : "text-gray-700",
          )}
          onClick={() => onSelected(value)}
        >
          {value}
        </button>
      </div>
    ))}
  </div>
);

export default SelectList;
