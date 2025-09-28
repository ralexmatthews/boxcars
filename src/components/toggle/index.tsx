import classNames from "classnames";

type Props<A extends string | number> = {
  options: A[];
  selected: A;
  onSelected: (option: A) => void;
};

const Toggle = <A extends string | number>({
  options,
  selected,
  onSelected,
}: Props<A>) => (
  <div className="flex bg-gray-100 rounded-lg p-1 w-full overflow-y-auto">
    {options.map((option) => (
      <button
        type="button"
        className={classNames(
          "flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200",
          option === selected
            ? "bg-primary text-white shadow-sm font-bold"
            : "text-gray-600 hover:text-gray-900",
        )}
        key={option}
        onClick={() => onSelected(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default Toggle;
