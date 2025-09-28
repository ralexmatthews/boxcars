const TextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-white transition-colors placeholder-gray-400 outline-none"
    {...props}
  />
);

export default TextInput;
