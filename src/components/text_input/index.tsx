const TextInput = <A extends string>(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) => (
  <input
    className="text-lg px-2 py-4 overflow-y-auto rounded border border-black w-full max-w-48"
    {...props}
  />
);

export default TextInput;
