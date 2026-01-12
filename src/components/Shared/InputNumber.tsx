

function InputNumber() {
  return (
    <input
      type="number"
      min="1"
      max="20"
      className="w-full px-3 py-2 border border-neutral-400 rounded 
        focus:outline-none focus:ring-2 focus:ring-blue-primary text-sm"
    />
  );
}

export default InputNumber;
